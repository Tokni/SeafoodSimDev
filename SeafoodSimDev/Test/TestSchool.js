// <reference path = "../../TSSeafoodSimDev/externals/wrappers.d.ts"/>
// <reference path = "../../TSSeafoodSimDevXTest/ts/declarations/qunit.d.ts"/>
// <reference path = "../../TSSeafoodSimDev/externals/model.d.ts"/>
var TestSchool = (function () {
    function TestSchool() {
        var _this = this;
        this.runTests = function () {
            var startPosition = new Point2(0, 0);
            var singleCod = new Cod(1, startPosition);
            var singleMackerel = new Mackerel(1, startPosition);
            var gov = new Government(new Restrictions());
            var map = new Map(gov.getRestrictions());
            var thisPlaceholder = _this;
            map.getGrid()[0][0] = new Ocean(new CarryingCapacity([new FishGroup("group 1", ["cod", "mac"])], [100000]), 1);
            QUnit.test("Cod: constructor", function (assert) {
                var testCod;
                //Check that testCod is undefined
                assert.equal(testCod, undefined);
                //Create cod and check members
                testCod = new Cod(1, startPosition);
                assert.ok(testCod, "Cod should be defined");
                assert.deepEqual(testCod.getSize(), 1, "size should be 1");
                assert.deepEqual(testCod.getPosition(), startPosition, "position should be start position");
            });
            QUnit.test("Cod: age function", function (assert) {
                var singleCod;
                do {
                    singleCod = new Cod(1, startPosition);
                } while (singleCod.getAges()[thisPlaceholder.scenario.getCodSchoolMaxAge() - 1] == 1); //This is to ensure that cod is not old
                map.addSchool(singleCod);
                var age;
                for (var i = 0; i < thisPlaceholder.scenario.getCodSchoolMaxAge(); i++) {
                    if (singleCod.getAges()[i] == 1) {
                        age = i;
                    }
                }
                if (age < singleCod.getMaxAge()) {
                    singleCod.ageAndRecruit(map);
                    var newAge;
                    for (var i = 0; i < thisPlaceholder.scenario.getCodSchoolMaxAge(); i++) {
                        if (singleCod.getAges()[i] == 1) {
                            newAge = i;
                        }
                    }
                    assert.equal(newAge, age + 1, "Cod should have aged");
                }
            });
            QUnit.test("Cod: natural death", function (assert) {
                var singleCod = new Cod(1, startPosition);
                var map = new Map(gov.getRestrictions());
                map.getGrid()[0][0] = new Ocean(new CarryingCapacity([new FishGroup("group 1", ["cod", "mac"])], [1]), 1);
                map.addSchool(singleCod);
                //Make cod grow old
                while (singleCod.getAges()[singleCod.getMaxAge() - 1] == 0) {
                    singleCod.ageAndRecruit(map);
                }
                //Check that fish is old
                for (var i = 0; i < singleCod.getMaxAge() - 1; i++) {
                    assert.deepEqual(singleCod.getAges()[i], 0, "No cod should be young");
                }
                assert.deepEqual(singleCod.getAges()[singleCod.getMaxAge() - 1], 1, "One cod should be old");
                singleCod.ageAndRecruit(map);
                //Check that fish is removed from school
                assert.deepEqual(singleCod.getSize(), 0, "No cod should be left");
            });
            QUnit.test("Mackerel: constructor", function (assert) {
                var testMackerel;
                //Check that testMackerel is undefined
                assert.equal(testMackerel, undefined);
                //Create mackerel and check members
                testMackerel = new Mackerel(1, startPosition);
                assert.ok(testMackerel);
                assert.deepEqual(testMackerel.getSize(), 1);
                assert.deepEqual(testMackerel.getPosition(), startPosition);
            });
            QUnit.test("Mackerel: age function", function (assert) {
                var singeMackerel;
                do {
                    singeMackerel = new Mackerel(1, startPosition);
                } while (singeMackerel.getAges()[singleMackerel.getMaxAge() - 1] == 1); //This is to ensure that cod is not old
                map.addSchool(singeMackerel);
                var age;
                for (var i = 0; i < singleMackerel.getMaxAge(); i++) {
                    if (singeMackerel.getAges()[i] == 1) {
                        age = i;
                    }
                }
                if (age < singeMackerel.getMaxAge()) {
                    singeMackerel.ageAndRecruit(map);
                    var newAge;
                    for (var i = 0; i < singleMackerel.getMaxAge(); i++) {
                        if (singeMackerel.getAges()[i] == 1) {
                            newAge = i;
                        }
                    }
                    assert.equal(newAge, age + 1, "Mackerel should have aged");
                }
            });
            QUnit.test("Mackerel: natural death", function (assert) {
                var singleMackerel = new Mackerel(1, startPosition);
                var map = new Map(gov.getRestrictions());
                map.getGrid()[0][0] = new Ocean(new CarryingCapacity([new FishGroup("group 1", ["cod", "mac"])], [1]), 1);
                map.addSchool(singleMackerel);
                //Make cod grow old
                while (singleMackerel.getAges()[singleMackerel.getMaxAge() - 1] == 0) {
                    singleMackerel.ageAndRecruit(map);
                }
                //Check that fish is old
                for (var i = 0; i < singleMackerel.getMaxAge() - 1; i++) {
                    assert.deepEqual(singleMackerel.getAges()[i], 0, "No mackerel should be young");
                }
                assert.deepEqual(singleMackerel.getAges()[singleMackerel.getMaxAge() - 1], 1, "One mackerel should be old");
                singleMackerel.ageAndRecruit(map);
                //Check that fish is removed from school
                assert.deepEqual(singleMackerel.getSize(), 0, "No mackerel should be left");
            });
        };
        this.scenario = Scenario.getInstance();
        this.scenario.loadScenario('Controller/scenarios/scnTest.json', this.runTests);
    }
    return TestSchool;
}());
//# sourceMappingURL=TestSchool.js.map