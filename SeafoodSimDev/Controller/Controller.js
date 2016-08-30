var simState;
(function (simState) {
    simState[simState["starting"] = 0] = "starting";
    simState[simState["running"] = 1] = "running";
    simState[simState["paused"] = 2] = "paused";
    simState[simState["ending"] = 3] = "ending";
    simState[simState["fast"] = 4] = "fast";
})(simState || (simState = {}));
var Controller = (function () {
    function Controller() {
        var _this = this;
        this.simulationTick = function () {
            //console.log("Controller running simulationtick");
            _this.m_model.run();
            _this.m_view.updateMainView(_this.m_model);
        };
        this.runSimulation = function (p_ticks) {
            if (_this.m_simState == simState.paused || _this.m_simState == simState.fast) {
                clearInterval(_this.m_timer);
                _this.m_timer = setInterval(_this.simulationTick, 1000);
                _this.m_simState = simState.running;
            }
        };
        console.log("Controller loading");
        this.m_simState = simState.paused;
        this.m_delayPerTick = 1000;
        this.m_fastDelayPerTick = 100;
        this.m_model = new Model();
        this.m_view = new MainView(this.m_model.getMap(), this.m_model.getShipOwners(), this.m_model.getGovernment().getTaxingRate());
        this.m_eventHandler = new EventHandler(this);
        this.m_view.updateMainView(this.m_model);
    }
    Controller.prototype.getModel = function () {
        return this.m_model;
    };
    Controller.prototype.getEventHandler = function () {
        return this.m_eventHandler;
    };
    Controller.prototype.getSimState = function () {
        return this.m_simState;
    };
    Controller.prototype.getMainView = function () {
        return this.m_view;
    };
    Controller.prototype.pause = function () {
        if (this.m_simState == simState.running || this.m_simState == simState.fast) {
            clearInterval(this.m_timer);
            this.m_simState = simState.paused;
        }
    };
    Controller.prototype.fastForward = function () {
        if (this.m_simState == simState.running || this.m_simState == simState.paused) {
            clearInterval(this.m_timer);
            this.m_simState = simState.fast;
            this.m_timer = setInterval(this.simulationTick, this.m_fastDelayPerTick);
        }
    };
    return Controller;
}());
//# sourceMappingURL=Controller.js.map