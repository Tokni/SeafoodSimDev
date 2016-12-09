var MapMenu = (function () {
    function MapMenu(p_ShipOwners, p_landingSites, p_taxingRate, p_scenario) {
        this.m_monthNames = ["January", "February", "March", "April", "May", "June",
            "July", "August", "September", "October", "November", "December"
        ];
        console.log("construct MapMenu");
        var menuDiv = document.createElement("div");
        menuDiv.id = "menuDiv";
        menuDiv.style.cssFloat = "left";
        menuDiv.style.paddingLeft = "3px";
        menuDiv.style.width = "25%";
        //menuDiv.style.minWidth = "300px";
        menuDiv.style.height = "70%";
        menuDiv.classList.add("ui-widget-content");
        document.getElementById("mainDiv").appendChild(menuDiv);
        //Create score view
        var scoreLegend = document.createElement("legend");
        var scoreLabel = document.createElement("div");
        scoreLabel.classList.add("legend-header");
        scoreLabel.innerHTML = "Score:";
        scoreLegend.appendChild(scoreLabel);
        menuDiv.appendChild(scoreLegend);
        scoreLegend.classList.add("menu-legend");
        var scoreTable = document.createElement("table");
        scoreTable.classList.add("menu-text");
        scoreLegend.appendChild(scoreTable);
        var financialRow = scoreTable.insertRow();
        var labelCell = financialRow.insertCell();
        var finacialScoreLabel = document.createElement("div");
        finacialScoreLabel.innerHTML = "Economic Score:";
        labelCell.appendChild(finacialScoreLabel);
        var scoreCell = financialRow.insertCell();
        var score = document.createElement("div");
        score.id = "financialScore";
        score.innerHTML = "0";
        score.classList.add("score");
        scoreCell.appendChild(score);
        var envRow = scoreTable.insertRow();
        var labelCell = envRow.insertCell();
        var ecoScoreLabel = document.createElement("div");
        ecoScoreLabel.innerHTML = "Environmental Score:";
        labelCell.appendChild(ecoScoreLabel);
        var scoreCell = envRow.insertCell();
        var score = document.createElement("div");
        score.id = "environmentalScore";
        score.innerHTML = "0";
        score.classList.add("score");
        scoreCell.appendChild(score);
        var socialRow = scoreTable.insertRow();
        var labelCell = socialRow.insertCell();
        var socialScoreLabel = document.createElement("div");
        socialScoreLabel.innerHTML = "Social Score:";
        labelCell.appendChild(socialScoreLabel);
        var scoreCell = socialRow.insertCell();
        var score = document.createElement("div");
        score.innerHTML = "0";
        score.id = "socialScore";
        score.classList.add("score");
        scoreCell.appendChild(score);
        var overallRow = scoreTable.insertRow();
        var labelCell = overallRow.insertCell();
        var overallScoreLabel = document.createElement("div");
        overallScoreLabel.innerHTML = "Overall Score:";
        labelCell.appendChild(overallScoreLabel);
        var scoreCell = overallRow.insertCell();
        var score = document.createElement("div");
        score.innerHTML = "0";
        score.id = "overallScore";
        score.classList.add("score");
        scoreCell.appendChild(score);
        //Create quote sliders
        //var quoteLegend: HTMLElement = document.createElement("legend");
        //quoteLegend.classList.add("menu-legend");
        //var quoteLabel: HTMLElement = document.createElement("div");
        //quoteLabel.innerHTML = "Quotas";
        //quoteLabel.className = "legend-header";
        ////quoteLegend.appendChild(quoteLabel);
        ////menuDiv.appendChild(quoteLegend);
        //var quoteTable: any = document.createElement("TABLE");
        //quoteTable.classList.add("menu-text");
        //quoteTable.width = "100%";
        ////quoteLegend.appendChild(quoteTable);
        //for (var i = 0; i < p_ShipOwners.length; i++) {
        //    var dateRow: HTMLTableRowElement = quoteTable.insertRow();
        //    var cell: HTMLTableCellElement = dateRow.insertCell();
        //    var quoteLabel: HTMLElement = document.createElement("div");
        //    quoteLabel.innerHTML = p_ShipOwners[i].getID() + ":";
        //    quoteLabel.style.cssFloat = "left";
        //    //cell.appendChild(quoteLabel);
        //    cell = dateRow.insertCell();
        //    cell.className = "slider-value-cell";
        //    var sliderValue: HTMLDivElement = document.createElement("div");
        //    sliderValue.id = "quoteValue" + p_ShipOwners[i].getID();
        //    cell.appendChild(sliderValue);
        //    cell = dateRow.insertCell();
        //    cell.className = "slider-cell";
        //    var quoteSlider: HTMLElement = document.createElement("div");
        //    quoteSlider.id = "quoteSlider" + p_ShipOwners[i].getID();
        //    quoteSlider.classList.add("slider");
        //    //cell.appendChild(quoteSlider);
        //    $("#quoteSlider" + p_ShipOwners[i].getID()).slider();
        //    $("#quoteSlider" + p_ShipOwners[i].getID()).slider("option", "min", 0);
        //    $("#quoteSlider" + p_ShipOwners[i].getID()).slider("option", "max", 100);
        //    sliderValue.innerHTML = $("#quoteSlider" + p_ShipOwners[i].getID()).slider("option", "value");
        //}
        ////Create effort limit sliders
        //var effortLegend: HTMLElement = document.createElement("legend");
        //effortLegend.classList.add("menu-legend");
        //var effortLabel: HTMLElement = document.createElement("div");
        //effortLabel.innerHTML = "Effort Limits";
        //effortLabel.className = "legend-header";
        ////effortLegend.appendChild(effortLabel);
        //menuDiv.appendChild(effortLegend);
        //var effortTable: any = document.createElement("TABLE");
        //effortTable.classList.add("menu-text");
        //effortTable.width = "100%";
        ////effortLegend.appendChild(effortTable);
        //for (var i = 0; i < p_ShipOwners.length; i++) {
        //    var dateRow: HTMLTableRowElement = effortTable.insertRow();
        //    var cell: HTMLTableCellElement = dateRow.insertCell();
        //    var effortLabel: HTMLElement = document.createElement("div");
        //    effortLabel.innerHTML = p_ShipOwners[i].getID() + ":";
        //    effortLabel.style.cssFloat = "left";
        //    cell.appendChild(effortLabel);
        //    cell = dateRow.insertCell();
        //    cell.className = "slider-value-cell";
        //    var sliderValue: HTMLDivElement = document.createElement("div");
        //    sliderValue.id = "effortValue" + p_ShipOwners[i].getID();
        //    cell.appendChild(sliderValue);
        //    cell = dateRow.insertCell();
        //    cell.className = "slider-cell";
        //    var slider: HTMLElement = document.createElement("div");
        //    slider.id = "effortSlider" + p_ShipOwners[i].getID();
        //    slider.classList.add("slider");
        //    cell.appendChild(slider);
        //    $("#effortSlider" + p_ShipOwners[i].getID()).slider();
        //    $("#effortSlider" + p_ShipOwners[i].getID()).slider("option", "min", 0);
        //    $("#effortSlider" + p_ShipOwners[i].getID()).slider("option", "max", 100);
        //    sliderValue.innerHTML = $("#effortSlider" + p_ShipOwners[i].getID()).slider("option", "value");
        //}
        //Create landing distribution sliders
        //var landingLegend: HTMLElement = document.createElement("legend");
        //landingLegend.classList.add("menu-legend");
        //var landingLabel: HTMLElement = document.createElement("div");
        //landingLabel.innerHTML = "Landing Distribution";
        //landingLabel.className = "legend-header";
        //landingLegend.appendChild(landingLabel);
        //menuDiv.appendChild(landingLegend);
        //var landingTable: any = document.createElement("TABLE");
        //landingTable.classList.add("menu-text");
        //landingLegend.appendChild(landingTable);
        //for (var i = 0; i < p_landingSites.length; i++) {
        //    var dateRow: HTMLTableRowElement = landingTable.insertRow();
        //    var cell: HTMLTableCellElement = dateRow.insertCell();
        //cell.width = "30%";
        //    var label: HTMLElement = document.createElement("div");
        //    label.innerHTML = p_landingSites[i].getID() + ":";
        //    label.style.cssFloat = "left";
        //    cell.appendChild(label);
        //    cell = dateRow.insertCell();
        //    cell.className = "slider-value-cell";
        //    var sliderValue: HTMLDivElement = document.createElement("div");
        //    sliderValue.id = "landingValue" + p_landingSites[i].getID();
        //    cell.appendChild(sliderValue);
        //    cell = dateRow.insertCell();
        //    cell.className = "slider-cell";
        //    var slider: HTMLElement = document.createElement("div");
        //    slider.id = "landingSlider" + p_landingSites[i].getID();
        //    slider.style.width = "70%";
        //    slider.style.cssFloat = "right";
        //    slider.style.margin = "10px";
        //    cell.appendChild(slider);
        //    $("#landingSlider" + p_landingSites[i].getID()).slider();
        //    $("#landingSlider" + p_landingSites[i].getID()).slider("option", "min", 0);
        //    $("#landingSlider" + p_landingSites[i].getID()).slider("option", "max", 100);
        //    sliderValue.innerHTML = $("#landingSlider" + p_landingSites[i].getID()).slider("option", "value");
        //}
        //Create number of ships slider
        var legend = document.createElement("legend");
        legend.classList.add("menu-legend");
        var label = document.createElement("div");
        label.innerHTML = "Number of vessels";
        label.className = "legend-header";
        legend.appendChild(label);
        menuDiv.appendChild(legend);
        var table = document.createElement("TABLE");
        table.width = "100%";
        table.classList.add("menu-text");
        legend.appendChild(table);
        var dateRow = table.insertRow();
        var cell = dateRow.insertCell();
        var valueDiv = document.createElement("div");
        cell.appendChild(valueDiv);
        valueDiv.innerHTML = "Pelagic vessels:";
        var cell = dateRow.insertCell();
        var valueDiv = document.createElement("div");
        cell.appendChild(valueDiv);
        valueDiv.innerHTML = p_scenario.getStartNoMackerelShips() + "";
        cell.className = "slider-value-cell";
        valueDiv.id = "noCodShips";
        var cell = dateRow.insertCell();
        var slider = document.createElement("div");
        slider.id = "noCodShipsSlider";
        slider.classList.add("slider");
        cell.className = "slider-cell";
        cell.appendChild(slider);
        $("#noCodShipsSlider").slider();
        $("#noCodShipsSlider").slider("option", "min", 0);
        $("#noCodShipsSlider").slider("option", "max", 50);
        $("#noCodShipsSlider").slider("value", p_scenario.getStartNoMackerelShips());
        var dateRow = table.insertRow();
        var cell = dateRow.insertCell();
        var valueDiv = document.createElement("div");
        cell.appendChild(valueDiv);
        valueDiv.innerHTML = "Demersal Vessels:";
        var cell = dateRow.insertCell();
        var valueDiv = document.createElement("div");
        cell.appendChild(valueDiv);
        valueDiv.innerHTML = p_scenario.getStartNoCodShips() + "";
        cell.className = "slider-value-cell";
        valueDiv.id = "noMackerelShips";
        var cell = dateRow.insertCell();
        var slider = document.createElement("div");
        slider.id = "noMackerelShipsSlider";
        slider.classList.add("slider");
        cell.className = "slider-cell";
        cell.appendChild(slider);
        $("#noMackerelShipsSlider").slider();
        $("#noMackerelShipsSlider").slider("option", "min", 0);
        $("#noMackerelShipsSlider").slider("option", "max", 50);
        $("#noMackerelShipsSlider").slider("value", p_scenario.getStartNoCodShips());
        //Create tac sliders
        var legend = document.createElement("legend");
        legend.classList.add("menu-legend");
        var label = document.createElement("div");
        label.innerHTML = "Total Allowable Catch";
        label.className = "legend-header";
        legend.appendChild(label);
        menuDiv.appendChild(legend);
        var table = document.createElement("TABLE");
        table.width = "100%";
        table.classList.add("menu-text");
        legend.appendChild(table);
        var dateRow = table.insertRow();
        var cell = dateRow.insertCell();
        var valueDiv = document.createElement("div");
        cell.appendChild(valueDiv);
        valueDiv.innerHTML = "Cod:";
        var cell = dateRow.insertCell();
        var valueDiv = document.createElement("div");
        cell.appendChild(valueDiv);
        valueDiv.innerHTML = 0 + "";
        cell.className = "slider-value-cell";
        valueDiv.id = "tacCod";
        var cell = dateRow.insertCell();
        var slider = document.createElement("div");
        slider.id = "tacCodSlider";
        slider.classList.add("slider");
        cell.className = "slider-cell";
        cell.appendChild(slider);
        var tacCodSlider = $("#tacCodSlider");
        tacCodSlider.slider();
        tacCodSlider.slider("option", "min", 0);
        tacCodSlider.slider("option", "max", 50000);
        tacCodSlider.slider("option", "step", 100);
        tacCodSlider.slider("value", 0);
        var dateRow = table.insertRow();
        var cell = dateRow.insertCell();
        var valueDiv = document.createElement("div");
        cell.appendChild(valueDiv);
        valueDiv.innerHTML = "Mackerel:";
        var cell = dateRow.insertCell();
        var valueDiv = document.createElement("div");
        cell.appendChild(valueDiv);
        valueDiv.innerHTML = 0 + "";
        cell.className = "slider-value-cell";
        valueDiv.id = "tacMackerel";
        var cell = dateRow.insertCell();
        var slider = document.createElement("div");
        slider.id = "tacMackerelSlider";
        slider.classList.add("slider");
        cell.className = "slider-cell";
        cell.appendChild(slider);
        $("#tacMackerelSlider").slider();
        $("#tacMackerelSlider").slider("option", "min", 0);
        $("#tacMackerelSlider").slider("option", "max", 50000);
        $("#tacMackerelSlider").slider("option", "step", 100);
        $("#tacMackerelSlider").slider("value", 0);
        //Restrict areas
        var legend = document.createElement("legend");
        legend.classList.add("menu-legend");
        var label = document.createElement("div");
        label.innerHTML = "Restrict Spawning Areas";
        label.className = "legend-header";
        legend.appendChild(label);
        menuDiv.appendChild(legend);
        var table = document.createElement("TABLE");
        table.width = "100%";
        table.classList.add("menu-text");
        legend.appendChild(table);
        var dateRow = table.insertRow();
        var cell = dateRow.insertCell();
        var valueDiv = document.createElement("div");
        cell.appendChild(valueDiv);
        valueDiv.innerHTML = "Restrict all spawning areas:";
        var cell = dateRow.insertCell();
        var checkBox = document.createElement("input");
        cell.appendChild(checkBox);
        checkBox.type = "checkbox";
        checkBox.id = "restrictAreas";
        //Create buttons
        var buttonsDiv = document.createElement("legend");
        buttonsDiv.classList.add("menu-legend");
        var labelDiv = document.createElement("div");
        labelDiv.className = "legend-header";
        labelDiv.innerHTML = "Simulation control";
        buttonsDiv.appendChild(labelDiv);
        menuDiv.appendChild(buttonsDiv);
        var startButton = document.createElement("div");
        startButton.id = "startButton";
        startButton.classList.add("ui-button");
        startButton.classList.add("fa");
        startButton.classList.add("fa-play");
        buttonsDiv.appendChild(startButton);
        var pauseButton = document.createElement("div");
        pauseButton.id = "pauseButton";
        pauseButton.classList.add("fa");
        pauseButton.classList.add("fa-pause");
        pauseButton.classList.add("ui-button");
        pauseButton.classList.add("marked");
        buttonsDiv.appendChild(pauseButton);
        var fastForwardButton = document.createElement("div");
        fastForwardButton.id = "fastForwardButton";
        fastForwardButton.classList.add("fa");
        fastForwardButton.classList.add("fa-fast-forward");
        fastForwardButton.classList.add("ui-button");
        buttonsDiv.appendChild(fastForwardButton);
        $(".fa").css("display", "none"); //These are hidden until user starts the simulation
        var startSimButton = document.createElement("button");
        buttonsDiv.appendChild(startSimButton);
        startSimButton.id = "startSim";
        startSimButton.classList.add("ui-button");
        startSimButton.innerHTML = "Start Simulation";
        // Create time view
        var timeLegend = document.createElement("legend");
        menuDiv.appendChild(timeLegend);
        var timeDiv = document.createElement("div");
        timeDiv.style.overflow = "hidden";
        timeLegend.appendChild(timeDiv);
        var timeTable = document.createElement("table");
        timeTable.classList.add("menu-text");
        timeTable.style.tableLayout = "fixed";
        timeTable.style.width = "100%";
        timeDiv.appendChild(timeTable);
        var dateRow = timeTable.insertRow();
        var dayCell = dateRow.insertCell();
        var dayDiv = document.createElement("div");
        dayDiv.id = "day";
        dayDiv.innerHTML = '0';
        dayCell.appendChild(dayDiv);
        dayDiv.classList.add("date");
        var monthCell = dateRow.insertCell();
        var monthDiv = document.createElement("div");
        monthDiv.id = "month";
        monthDiv.innerHTML = "January";
        monthDiv.classList.add("date");
        monthCell.appendChild(monthDiv);
        var yearCell = dateRow.insertCell();
        var yearDiv = document.createElement("div");
        yearDiv.id = "year";
        yearDiv.innerHTML = "2016";
        yearCell.appendChild(yearDiv);
        yearDiv.classList.add("date");
        var buttonCell = dateRow.insertCell();
        //buttonCell.style.cssFloat = "right";
        var restartButton = document.createElement("button");
        buttonCell.appendChild(restartButton);
        restartButton.id = "restart";
        restartButton.classList.add("ui-button");
        restartButton.innerHTML = "Restart";
        //Information div
        var informationDiv = document.createElement("div");
        menuDiv.appendChild(informationDiv);
        informationDiv.style.width = "99%";
        informationDiv.id = "information";
        var nameP = document.createElement("p");
        informationDiv.appendChild(nameP);
        nameP.innerHTML = $("#name").text();
        nameP.style.fontWeight = "bold";
        var desP = document.createElement("p");
        informationDiv.appendChild(desP);
        desP.innerHTML = $("#des").text();
        var linkP = document.createElement("p");
        informationDiv.appendChild(linkP);
        linkP.innerHTML = "<a target='_blank' href='" + p_scenario.getLink() + "'>Link to MCA</a>";
        linkP.classList.add("link");
        var goalP = document.createElement("p");
        informationDiv.appendChild(goalP);
        goalP.id = "goalInfo";
        var goal = $("#goalInfo");
        goal.html("");
        goal.append("<p>");
        if (p_scenario.getfinGoal().toString() != "no")
            goal.append("Economic score goal: <span style='float:right' > " + p_scenario.getfinGoal() + "</span><br/>");
        if (p_scenario.getEcoGoal().toString() != "no")
            goal.append("Environmental score goal: <span style='float:right' > " + p_scenario.getEcoGoal() + "</span><br/>");
        if (p_scenario.getSocGoal().toString() != "no")
            goal.append("Social score goal: <span style='float:right' > " + p_scenario.getSocGoal() + "</span><br/>");
        if (p_scenario.getAllScore().toString() != "no")
            goal.append("Overall score goal: <span style='float:right' > " + p_scenario.getAllScore() + "</span><br/>");
        goal.append("</p>");
        var durationP = document.createElement("p");
        informationDiv.appendChild(durationP);
        durationP.innerHTML = $("#endTime").text();
    }
    MapMenu.prototype.reset = function (p_ShipOwners, p_landingSites, p_taxingRate, p_scenario) {
        $("#taxSlider").slider("value", p_taxingRate * 100);
        $("#taxValue").text(p_taxingRate * 100 + "%");
        $("#noCodShipsSlider").slider("value", p_scenario.getStartNoCodShips());
        $("#noCodShips").text(p_scenario.getStartNoCodShips() + "");
        for (var i = 0; i < p_ShipOwners.length; i++) {
            $("#effortValue" + p_ShipOwners[i].getID()).text(0);
            $("#effortSlider" + p_ShipOwners[i].getID()).slider("value", 0);
            $("#quoteValue" + p_ShipOwners[i].getID()).text(0);
            $("#quoteSlider" + p_ShipOwners[i].getID()).slider("value", 0);
        }
    };
    MapMenu.prototype.updateScore = function (p_government) {
        $("#financialScore").text(Math.round(p_government.getScore().getFinancialScore()));
        $("#socialScore").text(Math.round(p_government.getScore().getSocialScore()));
        $("#environmentalScore").text(Math.round(p_government.getScore().getEnvironmentalScore()));
        $("#overallScore").text(Math.round(p_government.getScore().getOverallScore()));
    };
    MapMenu.prototype.updateDate = function (p_model) {
        var year = 2016 + Math.floor(p_model.getTime() / 365);
        var month = Math.floor((p_model.getTime() % 365) / 30);
        var monthName = this.m_monthNames[month];
        $("#year").text(year);
        $("#month").text(monthName);
        $("#day").text(p_model.getTime());
        //console.log("time: " + p_model.getTime());
        //console.log("year: " + year);
        //console.log("month: " + month);
    };
    return MapMenu;
}());
//# sourceMappingURL=MapMenu.js.map