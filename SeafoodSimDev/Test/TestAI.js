var TestAI = (function () {
    function TestAI() {
        var _this = this;
        this.runTests = function () {
            var testAi = _this;
            var ai = new AI();
            var gov = new Government(new Restrictions());
            var map = new Map(gov.getRestrictions());
            var richShipOwner = new ShipOwner(gov, new Point2(0, 0), "0", 10000000000000000000);
            var poorShipOwner = new ShipOwner(gov, new Point2(0, 0), "1", -10000000000000000000);
            QUnit.test("AI: pathToNearestLandingSite", function (assert) {
                map.emptyGrid();
                map.getGrid()[2][2] = new LandingSite(1, 10, 1, {}, "0", new Point2(2, 2));
                var path = ai.pathToNearestLandingSite(new Point2(2, 2), map);
                assert.deepEqual(path[path.length - 1], new Point2(2, 2), "Should find nearest landing site at 2,2");
                path = ai.pathToNearestLandingSite(new Point2(0, 0), map);
                assert.deepEqual(path[path.length - 1], new Point2(2, 2), "Should find nearest landing site at 2,2");
                path = ai.pathToNearestLandingSite(new Point2(4, 4), map);
                assert.deepEqual(path[path.length - 1], new Point2(2, 2), "Should find nearest landing site at 2,2");
                path = ai.pathToNearestLandingSite(new Point2(1, 3), map);
                assert.deepEqual(path[path.length - 1], new Point2(2, 2), "Should find nearest landing site at 2,2");
            });
            QUnit.test("AI: pathToNearestLandingSite with multiple sites", function (assert) {
                map.emptyGrid();
                map.getGrid()[0][4] = new LandingSite(1, 10, 1, {}, "0", new Point2(0, 4));
                map.getGrid()[3][0] = new LandingSite(1, 10, 1, {}, "1", new Point2(3, 0));
                var path = ai.pathToNearestLandingSite(new Point2(0, 0), map);
                assert.deepEqual(path[path.length - 1], new Point2(3, 0), "Nearest from 0,0 should be 3,0");
                path = ai.pathToNearestLandingSite(new Point2(4, 0), map);
                assert.deepEqual(path[path.length - 1], new Point2(3, 0), "Nearest from 4,0 should be 3,0");
                path = ai.pathToNearestLandingSite(new Point2(0, 2), map);
                assert.deepEqual(path[path.length - 1], new Point2(0, 4), "Nearest from 0,2 should be 0,4");
                path = ai.pathToNearestLandingSite(new Point2(2, 3), map);
                assert.deepEqual(path[path.length - 1], new Point2(0, 4), "Nearest from 2,3 should be 0,4");
                path = ai.pathToNearestLandingSite(new Point2(4, 4), map);
                assert.deepEqual(path[path.length - 1], new Point2(0, 4), "Nearest from 4,4 should be 0,4");
            });
            QUnit.test("AI: find nearest fuel site with multiple sites", function (assert) {
                var map = new Map(gov.getRestrictions());
                map.emptyGrid();
                map.getGrid()[5][3] = new FuelSite(1, 10, 10, 10, "0", new Point2(5, 3));
                map.getGrid()[5][8] = new FuelSite(1, 10, 101, 10, "1", new Point2(5, 8));
                var path = ai.pathToNearestFuelSite(new Point2(0, 8), map);
                assert.deepEqual(path[path.length - 1], new Point2(5, 8), "nearest fuel site from 0,8 should be 5,8");
            });
            QUnit.test("AI: buy ship", function (assert) {
                map.emptyGrid();
                assert.deepEqual(richShipOwner.getShips(), [], "rich ship owner should not have any ships");
                assert.deepEqual(poorShipOwner.getShips(), [], "poor ship owner should not have any ships");
                ai.run(richShipOwner, map);
                //Check if owner has bought ship
                assert.deepEqual(richShipOwner.getShips().length, 1, "rich ship owner should have one ship");
                ai.run(poorShipOwner, map);
                //Poor ship owner should not buy a new ship
                assert.deepEqual(poorShipOwner.getShips().length, 0, "poor ship owner should still have 0 ships");
            });
            QUnit.test("AI: sell ship", function (assert) {
                map.emptyGrid();
                poorShipOwner.buyShip();
                assert.deepEqual(poorShipOwner.getShips().length, 1, "poor ship owner should have 1 ship");
                ai.run(poorShipOwner, map);
                //Poor ship owner should sell his ship
                assert.deepEqual(poorShipOwner.getShips().length, 0, "poor ship owner should have 0 ships");
                richShipOwner.buyShip();
                var noOfShips = richShipOwner.getShips().length;
                ai.run(richShipOwner, map);
                assert.ok(richShipOwner.getShips().length >= noOfShips, "rich ship owner should not sell any of his ships");
            });
            QUnit.test("AI: pathfinding straight line", function (assert) {
                map.emptyGrid();
                var expectedPath = [new Point2(0, 0), new Point2(0, 1), new Point2(0, 2)];
                var path = ai.pathFinding(map, new Point2(0, 0), new Point2(0, 2));
                assert.deepEqual(path, expectedPath, "should find a straight line path");
            });
            QUnit.test("AI: pathfinding with land", function (assert) {
                map.emptyGrid();
                map.getGrid()[3][0] = new Land();
                map.getGrid()[3][1] = new Land();
                map.getGrid()[3][2] = new Land();
                var expectedPath = [new Point2(2, 0), new Point2(2, 1), new Point2(2, 2), new Point2(2, 3),
                    new Point2(3, 3), new Point2(4, 3), new Point2(4, 2), new Point2(4, 1), new Point2(4, 0)];
                var path = ai.pathFinding(map, new Point2(2, 0), new Point2(4, 0));
                assert.deepEqual(path, expectedPath, "should find a path around the land");
            });
        };
        this.scenario = Scenario.getInstance();
        this.scenario.loadScenario('Controller/scenarios/scnTest.json', this.runTests);
    }
    return TestAI;
}());
//# sourceMappingURL=TestAI.js.map