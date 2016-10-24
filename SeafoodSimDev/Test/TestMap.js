var TestMap = (function () {
    function TestMap(p_scenario) {
        var _this = this;
        this.runTests = function () {
            var gov = new Government(new Restrictions(_this.scenario), _this.scenario);
            var map = new Map(new Restrictions(_this.scenario), _this.scenario);
            var testMap = _this;
            QUnit.test("Map: add ship", function (assert) {
                var ship = new Ship(new ShipOwner(gov, new Point2(0, 0), "0", testMap.scenario), testMap.scenario);
                assert.deepEqual(map.getShips().indexOf(ship), -1, "ship should not be in map");
                map.addShip(ship);
                assert.ok(map.getShips().indexOf(ship) > -1, "ship should be in map");
            });
            QUnit.test("Map: remove ship", function (assert) {
                var ship = new Ship(new ShipOwner(gov, new Point2(0, 0), "0", testMap.scenario), testMap.scenario);
                map.addShip(ship);
                assert.ok(map.getShips().indexOf(ship) > -1, "ship should be in map");
                map.removeShip(ship);
                assert.deepEqual(map.getShips().indexOf(ship), -1, "ship should not be in map");
            });
            QUnit.test("Map: get number of fish in tile", function (assert) {
                map = new Map(gov.getRestrictions(), testMap.scenario);
                var point = new Point2(0, 0);
                assert.deepEqual(map.getNoOfFishInTile(point), 0, "there should be no fish in tile");
                map.addSchool(new Cod(100, 80, new Point2(0, 1), testMap.scenario));
                assert.deepEqual(map.getNoOfFishInTile(point), 0, "there should be no fish in tile");
                map.addSchool(new Cod(100, 80, point, testMap.scenario));
                //Check that fish have been added
                assert.deepEqual(map.getNoOfFishInTile(point), 100, "there should be 100 fish in tile");
                map.addSchool(new Cod(50, 80, point, testMap.scenario));
                assert.deepEqual(map.getNoOfFishInTile(point), 150, "there should be 150 fish in tile");
            });
            QUnit.test("Map: get number of ships in tile", function (assert) {
                map = new Map(gov.getRestrictions(), testMap.scenario);
                var owner = new ShipOwner(gov, new Point2(4, 4), "0", testMap.scenario);
                //Check that no ships are in tile
                assert.deepEqual(map.getNoOfShipsInTile(new Point2(4, 4)), 0, "there should not be any ships in tile");
                map.addShip(owner.buyShip());
                assert.deepEqual(map.getNoOfShipsInTile(new Point2(4, 4)), 1, "there should be 1 ship in tile");
                map.addShip(owner.buyShip());
                map.addShip(owner.buyShip());
                map.addShip(owner.buyShip());
                assert.deepEqual(map.getNoOfShipsInTile(new Point2(4, 4)), 4, "there should be 4 ships in tile");
            });
        };
        this.scenario = p_scenario;
        this.scenario.loadScenario('Controller/scenarios/scnTest.json', this.runTests);
    }
    return TestMap;
}());
//# sourceMappingURL=TestMap.js.map