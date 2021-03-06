﻿class MapMenu {
    private m_monthNames: string[] = ["January", "February", "March", "April", "May", "June",
        "July", "August", "September", "October", "November", "December"
    ];

    constructor(p_ShipOwners: ShipOwner[], p_landingSites: LandingSite[], p_taxingRate: number, p_scenario: Scenario) {
        console.log("construct MapMenu");
        var menuDiv: HTMLElement = document.createElement("div");
        menuDiv.id = "menuDiv";
        menuDiv.style.cssFloat = "left";
        menuDiv.style.paddingLeft = "3px";
        menuDiv.style.width = "25%";
        menuDiv.style.minWidth = "300px";
        menuDiv.style.height = "70%";
        menuDiv.classList.add("ui-widget-content");
        document.getElementById("mainDiv").appendChild(menuDiv);



        //Create score view
        var scoreLegend: HTMLLegendElement = document.createElement("legend");
        var scoreLabel: HTMLDivElement = document.createElement("div");
        scoreLabel.classList.add("legend-header");
        scoreLabel.innerHTML = "Score:";
        scoreLegend.appendChild(scoreLabel);
        menuDiv.appendChild(scoreLegend);
        scoreLegend.classList.add("menu-legend");
        var scoreTable: HTMLTableElement = document.createElement("table");
        scoreTable.classList.add("menu-text");
        scoreLegend.appendChild(scoreTable);

        var financialRow: HTMLTableRowElement = scoreTable.insertRow();
        var labelCell: HTMLTableCellElement = financialRow.insertCell();
        var finacialScoreLabel: HTMLDivElement = document.createElement("div");
        finacialScoreLabel.innerHTML = "Financial Score:";

        labelCell.appendChild(finacialScoreLabel);
        var scoreCell: HTMLTableCellElement = financialRow.insertCell();
        var score: HTMLDivElement = document.createElement("div");
        score.id = "financialScore";
        score.innerHTML = "0";
        score.classList.add("score");
        scoreCell.appendChild(score);

        var envRow: HTMLTableRowElement = scoreTable.insertRow();
        var labelCell: HTMLTableCellElement = envRow.insertCell();
        var ecoScoreLabel: HTMLDivElement = document.createElement("div");
        ecoScoreLabel.innerHTML = "Environmental Score:";
        labelCell.appendChild(ecoScoreLabel);
        var scoreCell: HTMLTableCellElement = envRow.insertCell();
        var score: HTMLDivElement = document.createElement("div");
        score.id = "environmentalScore";
        score.innerHTML = "0";
        score.classList.add("score");
        scoreCell.appendChild(score);

        var socialRow: HTMLTableRowElement = scoreTable.insertRow();
        var labelCell: HTMLTableCellElement = socialRow.insertCell();
        var socialScoreLabel: HTMLDivElement = document.createElement("div");
        socialScoreLabel.innerHTML = "Social Score:";
        labelCell.appendChild(socialScoreLabel);
        var scoreCell: HTMLTableCellElement = socialRow.insertCell();
        var score: HTMLDivElement = document.createElement("div");
        score.innerHTML = "0";
        score.id = "socialScore";
        score.classList.add("score");
        scoreCell.appendChild(score);

        var overallRow: HTMLTableRowElement = scoreTable.insertRow();
        var labelCell: HTMLTableCellElement = overallRow.insertCell();
        var overallScoreLabel: HTMLDivElement = document.createElement("div");
        overallScoreLabel.innerHTML = "Overall Score:";
        labelCell.appendChild(overallScoreLabel);
        var scoreCell: HTMLTableCellElement = overallRow.insertCell();
        var score: HTMLDivElement = document.createElement("div");
        score.innerHTML = "0";
        score.id = "overallScore"; 
        score.classList.add("score");
        scoreCell.appendChild(score);

        //Create tax slider
        var legend: HTMLElement = document.createElement("legend");
        legend.classList.add("menu-legend");
        var label: HTMLElement = document.createElement("div");
        label.innerHTML = "Taxing rate";
        label.className = "legend-header";
        legend.appendChild(label);
        menuDiv.appendChild(legend);

        var table: any = document.createElement("TABLE");
        table.width = "100%";
        table.classList.add("menu-text");
        legend.appendChild(table);
        var dateRow: HTMLTableRowElement = table.insertRow();

        var cell: HTMLTableCellElement = dateRow.insertCell();
        var valueDiv: HTMLDivElement = document.createElement("div");
        cell.appendChild(valueDiv);
        valueDiv.innerHTML = p_taxingRate * 100 + "%";
        cell.className = "slider-value-cell";
        valueDiv.id = "taxValue";

        var cell = dateRow.insertCell();
        var slider: HTMLElement = document.createElement("div");
        slider.id = "taxSlider";
        
        slider.classList.add("slider");
        cell.className = "slider-cell";
        cell.appendChild(slider);
        $("#taxSlider").slider();
        $("#taxSlider").slider("option", "min", 0);
        $("#taxSlider").slider("option", "max", 100);
        $("#taxSlider").slider("option", "step", 1);
        $("#taxSlider").slider("value", p_taxingRate * 100);

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

        //Create effort limit sliders
        var effortLegend: HTMLElement = document.createElement("legend");
        effortLegend.classList.add("menu-legend");
        var effortLabel: HTMLElement = document.createElement("div");
        effortLabel.innerHTML = "Effort Limits";
        effortLabel.className = "legend-header";
        //effortLegend.appendChild(effortLabel);
        menuDiv.appendChild(effortLegend);
        var effortTable: any = document.createElement("TABLE");
        effortTable.classList.add("menu-text");
        effortTable.width = "100%";
        //effortLegend.appendChild(effortTable);

        for (var i = 0; i < p_ShipOwners.length; i++) {
            var dateRow: HTMLTableRowElement = effortTable.insertRow();
            var cell: HTMLTableCellElement = dateRow.insertCell();
            var effortLabel: HTMLElement = document.createElement("div");
            effortLabel.innerHTML = p_ShipOwners[i].getID() + ":";
            effortLabel.style.cssFloat = "left";
            cell.appendChild(effortLabel);

            cell = dateRow.insertCell();
            cell.className = "slider-value-cell";
            var sliderValue: HTMLDivElement = document.createElement("div");
            sliderValue.id = "effortValue" + p_ShipOwners[i].getID();
            cell.appendChild(sliderValue);

            cell = dateRow.insertCell();
            cell.className = "slider-cell";
            var slider: HTMLElement = document.createElement("div");
            slider.id = "effortSlider" + p_ShipOwners[i].getID();
            slider.classList.add("slider");
            cell.appendChild(slider);
            $("#effortSlider" + p_ShipOwners[i].getID()).slider();
            $("#effortSlider" + p_ShipOwners[i].getID()).slider("option", "min", 0);
            $("#effortSlider" + p_ShipOwners[i].getID()).slider("option", "max", 100);
            sliderValue.innerHTML = $("#effortSlider" + p_ShipOwners[i].getID()).slider("option", "value");
        }
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

        //Create maximum number of ships slider
        var legend: HTMLElement = document.createElement("legend");
        legend.classList.add("menu-legend");
        var label: HTMLElement = document.createElement("div");
        label.innerHTML = "Maximum number of ships";
        label.className = "legend-header";
        legend.appendChild(label);
        menuDiv.appendChild(legend);

        var table: any = document.createElement("TABLE");
        table.width = "100%";
        table.classList.add("menu-text");
        legend.appendChild(table);
        var dateRow: HTMLTableRowElement = table.insertRow();

        var cell: HTMLTableCellElement = dateRow.insertCell();
        var valueDiv: HTMLDivElement = document.createElement("div");
        cell.appendChild(valueDiv);
        valueDiv.innerHTML = p_scenario.getStartNoOfShips()+"";
        cell.className = "slider-value-cell";
        valueDiv.id = "maxNoShips";

        var cell = dateRow.insertCell();
        var slider: HTMLElement = document.createElement("div");
        slider.id = "noOfShipsSlider";
        slider.classList.add("slider");
        cell.className = "slider-cell";
        cell.appendChild(slider);
        $("#noOfShipsSlider").slider();
        $("#noOfShipsSlider").slider("option", "min", 0);
        $("#noOfShipsSlider").slider("option", "max", 50);
        $("#noOfShipsSlider").slider("value", p_scenario.getStartNoOfShips());

        //Create buttons
        var buttonsDiv: HTMLElement = document.createElement("legend");
        buttonsDiv.classList.add("menu-legend");
        var labelDiv: HTMLElement = document.createElement("div");
        labelDiv.className = "legend-header";
        labelDiv.innerHTML = "Simulation control";
        buttonsDiv.appendChild(labelDiv);
        menuDiv.appendChild(buttonsDiv);

        var startButton: HTMLDivElement = document.createElement("div");
        startButton.id = "startButton";
        startButton.style.margin = "10px";
        startButton.classList.add("ui-button");
        startButton.classList.add("fa");
        startButton.classList.add("fa-play");
        buttonsDiv.appendChild(startButton);

        var pauseButton: HTMLDivElement = document.createElement("div");
        pauseButton.id = "pauseButton";
        pauseButton.style.margin = "10px";
        pauseButton.classList.add("fa");
        pauseButton.classList.add("fa-pause");
        pauseButton.classList.add("ui-button");
        pauseButton.classList.add("marked");
        buttonsDiv.appendChild(pauseButton);

        var fastForwardButton: HTMLDivElement = document.createElement("div");
        fastForwardButton.id = "fastForwardButton";
        fastForwardButton.style.margin = "10px";
        fastForwardButton.classList.add("fa");
        fastForwardButton.classList.add("fa-fast-forward");
        fastForwardButton.classList.add("ui-button");
        buttonsDiv.appendChild(fastForwardButton);

        // Create time view
        var timeLegend: HTMLLegendElement = document.createElement("legend");
        menuDiv.appendChild(timeLegend);
        var timeTable: HTMLTableElement = document.createElement("table");
        timeTable.classList.add("menu-text");
        timeLegend.appendChild(timeTable);

        var dateRow: HTMLTableRowElement = timeTable.insertRow();
        var monthCell: HTMLTableCellElement = dateRow.insertCell();
        var monthDiv: HTMLDivElement = document.createElement("div");
        monthDiv.id = "month";
        monthDiv.innerHTML = "January";
        monthDiv.classList.add("date");
        monthCell.appendChild(monthDiv);
        var yearCell: HTMLTableCellElement = dateRow.insertCell();
        var yearDiv: HTMLDivElement = document.createElement("div");
        yearDiv.id = "year";
        yearDiv.innerHTML = "2016";
        yearCell.appendChild(yearDiv);
        yearDiv.classList.add("date");

        var dayCell: HTMLTableCellElement = dateRow.insertCell();
        var dayDiv: HTMLDivElement = document.createElement("div");
        dayDiv.id = "day";
        dayDiv.innerHTML = '0';
        dayCell.appendChild(dayDiv);
        dayDiv.classList.add("date");

        var buttonCell: HTMLTableCellElement = dateRow.insertCell();
        buttonCell.style.cssFloat = "right";
        var restartButton: HTMLButtonElement = document.createElement("button");
        buttonCell.appendChild(restartButton);
        restartButton.id = "restart";
        restartButton.classList.add("ui-button");
        restartButton.innerHTML = "Restart";

        //Information div
        var informationDiv: HTMLDivElement = document.createElement("div");
        menuDiv.appendChild(informationDiv);
        informationDiv.style.width = "99%";
        informationDiv.id = "information";

        var nameP: HTMLParagraphElement = document.createElement("p");
        informationDiv.appendChild(nameP);
        nameP.innerHTML = $("#name").text();
        nameP.style.fontWeight = "bold";

        var desP: HTMLParagraphElement = document.createElement("p");
        informationDiv.appendChild(desP);
        desP.innerHTML = $("#des").text();

        var linkP: HTMLParagraphElement = document.createElement("p");
        informationDiv.appendChild(linkP);
        linkP.innerHTML = "<a target='_blank' href='" + p_scenario.getLink() + "'>Link to MCA</a>";
        linkP.classList.add("link");

        var goalP: HTMLParagraphElement = document.createElement("p");
        informationDiv.appendChild(goalP);
        goalP.innerHTML = $("#goal").text();

        var durationP: HTMLParagraphElement = document.createElement("p");
        informationDiv.appendChild(durationP);
        durationP.innerHTML = $("#endTime").text();
    }

    public reset(p_ShipOwners: ShipOwner[], p_landingSites: LandingSite[], p_taxingRate: number,p_scenario:Scenario) {
        $("#taxSlider").slider("value", p_taxingRate * 100);
        $("#taxValue").text(p_taxingRate * 100 + "%");

        $("#noOfShipsSlider").slider("value", p_scenario.getStartNoOfShips());
        $("#maxNoShips").text(p_scenario.getStartNoOfShips()+"");

        for (var i = 0; i < p_ShipOwners.length; i++) {
            $("#effortValue" + p_ShipOwners[i].getID()).text(0);
            $("#effortSlider" + p_ShipOwners[i].getID()).slider("value", 0);

            $("#quoteValue" + p_ShipOwners[i].getID()).text(0);
            $("#quoteSlider" + p_ShipOwners[i].getID()).slider("value", 0);
            
        }

    }
    
    public updateScore(p_government: Government): void {
        $("#financialScore").text(Math.round(p_government.getScore().getFinancialScore()));
        $("#socialScore").text(Math.round(p_government.getScore().getSocialScore()));
        $("#environmentalScore").text(Math.round(p_government.getScore().getEnvironmentalScore()));
        $("#overallScore").text(Math.round(p_government.getScore().getOverallScore()));
    }

    public updateDate(p_model: Model): void {
        var year: number = 2016 + Math.floor(p_model.getTime() / 365);
        var month: number = Math.floor((p_model.getTime() % 365)/30);
        var monthName: string = this.m_monthNames[month];

        $("#year").text(year);
        $("#month").text(monthName);
        $("#day").text(p_model.getTime());

        console.log("time: " + p_model.getTime());
        console.log("year: " + year);
        console.log("month: " + month);
    }
}