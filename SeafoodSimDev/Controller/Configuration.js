var Configuration = (function () {
    function Configuration() {
        var _this = this;
        this.loadConfig = function (p_path, p_callBack) {
            jQuery.getJSON(p_path, function (data) {
                _this.fromJSON(data);
                p_callBack();
            });
        };
    }
    Configuration.prototype.toJSON = function () {
        var ret;
        return ret;
    };
    Configuration.prototype.fromJSON = function (p_object) {
        this.m_prices = p_object.prices;
        this.m_taxingRate = p_object.taxingRate;
        this.m_map = p_object.map;
        this.m_shipOwner = p_object.shipOwner;
        this.m_shipOwnerStartMoney = p_object.shipOwnerStartMoney;
        this.m_shipPrice = p_object.shipPrice;
        this.m_aiBuyShipBalance = p_object.aiShipBuyBalance;
        this.m_aiSellShipBalance = p_object.aiShipSellBalance;
        this.m_schoolsInOnePlace = p_object.schoolsInOnePlace;
        this.m_schoolSize = p_object.schoolSize;
        this.m_schoolMsy = p_object.schoolMsy;
        this.m_fishingPercentage = p_object.fishingPercentage;
        this.m_oceanFishCapacity = p_object.oceanFishCapacity;
        this.m_financialMaxScore = p_object.financialMaxScore;
        this.m_environmentalMaxScore = p_object.environmentalMaxScore;
        this.m_socialMaxScore = p_object.socialMaxScore;
    };
    Configuration.prototype.getPrices = function () {
        return this.m_prices;
    };
    Configuration.prototype.getTaxingRate = function () {
        return this.m_taxingRate;
    };
    Configuration.prototype.getMap = function () {
        return this.m_map;
    };
    Configuration.prototype.getShipOwner = function () {
        return this.m_shipOwner;
    };
    Configuration.prototype.getShipOwnerStartMoney = function () {
        return this.m_shipOwnerStartMoney;
    };
    Configuration.prototype.getShipPrice = function () {
        return this.m_shipPrice;
    };
    Configuration.prototype.getAiBuyShipBalance = function () {
        return this.m_aiBuyShipBalance;
    };
    Configuration.prototype.getAiSellShipBalance = function () {
        return this.m_aiSellShipBalance;
    };
    Configuration.prototype.getSchoolsInOnePlace = function () {
        return this.m_schoolsInOnePlace;
    };
    Configuration.prototype.getSchoolSize = function () {
        return this.m_schoolSize;
    };
    Configuration.prototype.getSchoolMsy = function () {
        return this.m_schoolMsy;
    };
    Configuration.prototype.getFinancialMaxScore = function () {
        return this.m_financialMaxScore;
    };
    Configuration.prototype.getEnvironmentalMaxScore = function () {
        return this.m_environmentalMaxScore;
    };
    Configuration.prototype.getSocialMaxScore = function () {
        return this.m_socialMaxScore;
    };
    Configuration.prototype.getFishingPercentage = function () {
        return this.m_fishingPercentage;
    };
    Configuration.prototype.getOceanFishCapacity = function () {
        return this.m_oceanFishCapacity;
    };
    return Configuration;
}());
//# sourceMappingURL=Configuration.js.map