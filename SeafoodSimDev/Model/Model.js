/// <reference path = "Map.ts"/>
/// <reference path = "Government.ts"/>
/// <reference path = "ShipOwner.ts"/>
/// <reference path = "Restrictions.ts"/>
/// <reference path = "EndScreenStats.ts"/>
var Model = (function () {
    function Model(p_scenario) {
        this.m_shipOwners = [];
        this.m_time = 0;
        console.log("constructing model");
        this.m_scenario = p_scenario;
        var restrictions = new Restrictions(this.m_scenario);
        this.m_stats = new EndScreenStats(this.m_scenario);
        this.m_map = new Map(restrictions, this.m_scenario);
        //this.m_stats = new EndScreenStats(this.m_map);
        this.m_goverment = new Government(restrictions, this.m_scenario);
        this.m_ai = new AI(this.m_scenario);
        for (var i = 0; i < p_scenario.getNoOfShipOwners(); i++) {
            var startShipPoint;
            do {
                startShipPoint = new Point2(Math.round(Math.random() * (this.m_map.getMapHeight() - 1)), Math.round(Math.random() * (this.m_map.getMapWidth() - 1)));
            } while (!(this.m_map.getTile(startShipPoint) instanceof Ocean)); //If this is not an ocean tile, find a new tile
            this.createShipOwner(startShipPoint);
        }
        this.updateStats();
    }
    Model.prototype.getScenario = function () {
        return this.m_scenario;
    };
    Model.prototype.updateStats = function () {
        var biomass = 0;
        var recruit = 0;
        var natDeath = 0;
        // updating time
        var statTime = this.getTime() / this.m_scenario.getStatFreq();
        this.m_stats.setTimeAt(statTime, this.getTime());
        //updating biomass and recruitment
        for (var _i = 0, _a = this.getMap().getSchools(); _i < _a.length; _i++) {
            var sc = _a[_i];
            biomass += sc.getBiomass();
            recruit += sc.getRecruitTotal();
            natDeath += sc.getNatDeathTotal();
        }
        this.m_stats.setBiomassPrTimeUnitAt(statTime, biomass);
        this.m_stats.setRecruitmentPrTimeUnitAt(statTime, recruit);
        this.m_stats.setNatDeathPrTimeUnitAt(statTime, natDeath);
        var t = this.m_map.getYield();
        this.m_stats.setYieldPrTimeUnitAt(statTime, this.m_map.getYield());
        //updating income
        var income = 0;
        for (var _b = 0, _c = this.m_shipOwners; _b < _c.length; _b++) {
            var so = _c[_b];
            income += so.getTaxPayed();
        }
        this.m_stats.setIncomePrTimeUnitAt(statTime, income);
        //updating invest
        var invest = this.getMap().getNoOfShips() * this.m_scenario.getShipPrice();
        this.m_stats.setInvestPrTimeUnitAt(statTime, invest);
        //this.m_map.setYield(0);
        // updating scores
        this.m_stats.setFinancialScorePrTimeUnitAt(statTime, this.m_goverment.getScore().getFinancialScore());
        this.m_stats.setEnvironmentalScorePrTimeUnitAt(statTime, this.m_goverment.getScore().getEnvironmentalScore());
        this.m_stats.setSocialScorePrTimeUnitAt(statTime, this.m_goverment.getScore().getSocialScore());
        this.m_stats.setOverallScorePrTimeUnitAt(statTime, this.m_goverment.getScore().getOverallScore());
        //updating social
        var offshore = this.getMap().getNoOfShips() * this.m_scenario.getNoOfMenPerShip();
        var onshore = this.getMap().getFuelSites().length * 5 + this.getMap().getLandingSites().length * 10;
        this.m_stats.setEmploymentLandBasedPrTimeUnitAt(statTime, onshore);
        this.m_stats.setEmploymentSeaBasedPrTimeUnitAt(statTime, offshore);
    };
    Model.prototype.getStats = function () {
        return this.m_stats;
    };
    Model.prototype.run = function (p_noOfMoves) {
        if (p_noOfMoves == undefined)
            p_noOfMoves = 1;
        for (var m = 0; m < p_noOfMoves; m++) {
            if (!(this.m_time % this.m_scenario.getStatFreq()))
                this.updateStats();
            this.m_time++;
            //console.log("running model");
            this.m_map.run();
            var t = this.m_time % this.m_scenario.getRecruitAndAgeFreq();
            if (!(this.m_time % this.m_scenario.getRecruitAndAgeFreq())) {
                this.m_map.ageAndRecruit();
            }
            for (var i = 0; i < this.m_shipOwners.length; i++) {
                this.m_ai.run(this.m_shipOwners[i], this.m_map);
            }
            this.m_goverment.getScore().updateScore(this.m_map, this.m_goverment, this.m_time);
        }
    };
    Model.prototype.getShipOwners = function () {
        return this.m_shipOwners;
    };
    Model.prototype.getMap = function () {
        return this.m_map;
    };
    Model.prototype.setMap = function (p_map) {
        this.m_map = p_map;
    };
    Model.prototype.getTime = function () {
        return this.m_time;
    };
    Model.prototype.getGovernment = function () {
        return this.m_goverment;
    };
    Model.prototype.createShipOwner = function (p_startingPoint, p_balance) {
        this.m_shipOwners.push(new ShipOwner(this.m_goverment, p_startingPoint, "shipOwner" + this.m_shipOwners.length, this.m_scenario, p_balance));
    };
    return Model;
}());
//# sourceMappingURL=Model.js.map