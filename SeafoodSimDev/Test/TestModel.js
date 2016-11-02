var TestModel = (function () {
    function TestModel() {
        this.runTests = function () {
            var model = new Model();
            var restrictions = model.getGovernment().getRestrictions();
            var map = model.getMap();
            QUnit.test("Model: update number of ships", function (assert) {
                assert.deepEqual(map.getShips().length, 0, "there should not be any ships");
                restrictions.setNoShips(3);
                model.updateNoShips();
                assert.deepEqual(map.getShips().length, 3, "there should be 3 ships");
                restrictions.setNoShips(0);
                model.updateNoShips();
                assert.deepEqual(map.getShips().length, 0, "there should not be any ships");
            });
        };
        this.scenario = Scenario.getInstance();
        this.scenario.loadScenario('Controller/scenarios/scnTest.json', this.runTests);
    }
    return TestModel;
}());
//# sourceMappingURL=TestModel.js.map