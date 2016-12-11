﻿// <reference path = "../../TSSeafoodSimDev/externals/wrappers.d.ts"/>
// <reference path = "../../TSSeafoodSimDev/externals/wrappers.d.ts"/>
// <reference path = "../../TSSeafoodSimDev/externals/model.d.ts"/>
class StartScreen {
    private m_scenario: Scenario;

    constructor() {
        this.m_scenario = Scenario.getInstance();
        var text1 = "Welcome to SeafoodSim. Here you can choose which scenario to run. " +
            "The scenarios have different purposes and different goals you have to achieve to " +
            "win. You can also set the durion of the simulation.";
        var text2 = "As a government official you have been given the responsibility and authority to govern a new fishery. ";
        var text3 = "Each scenario represents a different government type. ";
        var text4 = "The scoring of the game reflects the evaluation of the performance. "
        var text5 = "The government have identified the following sub-objectives: <br>Economic 70%, Enviromental 10%, Social 20%.<br>The percentages indicate the priority. ";
        var text6 = "For each sub-objective key indicators have been determined and priortized: <br>Economic: Investment 40%, Income 60%.<br>Environmental: Biomass 80% Recruitment 20%<br>Social: Onshore employment 20% Offshore employment 80%. ";

        var mainDiv: HTMLDivElement = document.createElement("div");
        $('body').append(mainDiv);
        mainDiv.id = "startScreen";
        
        var headerDiv: HTMLDivElement = document.createElement("div");
        mainDiv.appendChild(headerDiv);
        headerDiv.innerHTML = "SeafoodSim";
        headerDiv.classList.add("header");

        var textDiv: HTMLDivElement = document.createElement("div");
        mainDiv.appendChild(textDiv);
        textDiv.innerHTML = text2 + text3 + text4;            
        textDiv.id = "welcomeText";
        textDiv.classList.add("desc");
        
        var buttonTable: HTMLTableElement = document.createElement("table");
        mainDiv.appendChild(buttonTable);
        var row: HTMLTableRowElement =  buttonTable.insertRow();
        var cell: HTMLTableCellElement = row.insertCell();


        var fieldSet: HTMLFieldSetElement = document.createElement("fieldset");
        fieldSet.id = "chooseScenario";
        fieldSet.style.width = "200px";
        cell.appendChild(fieldSet);

        var button: HTMLButtonElement = document.createElement("input");
        fieldSet.appendChild(button);
        button.type = "radio";
        button.id = "scenario1";
        button.name = "radio";
        var label: HTMLLabelElement = document.createElement("label");
        label.id = "scenario1Label";
        fieldSet.appendChild(label);
        label.htmlFor = "scenario1";
        label.innerHTML = "Scenario 1";
        
        var button: HTMLButtonElement = document.createElement("input");
        fieldSet.appendChild(button);
        button.type = "radio";
        button.id = "scenario2";
        button.name = "radio";
        var label: HTMLLabelElement = document.createElement("label");
        fieldSet.appendChild(label);
        label.htmlFor = "scenario2";
        label.innerHTML = "Scenario 2";

        var button: HTMLButtonElement = document.createElement("input");
        fieldSet.appendChild(button);
        button.type = "radio";
        button.id = "scenario3";
        button.name = "radio";
        var label: HTMLLabelElement = document.createElement("label");
        fieldSet.appendChild(label);
        label.htmlFor = "scenario3";
        label.innerHTML = "Scenario 3";

     
        var cell: HTMLTableCellElement = row.insertCell();
        //var label: HTMLLabelElement = document.createElement("label");
        //cell.appendChild(label);
        //label.htmlFor = "endTime";
        //label.innerHTML = "Select the duraion of the simulation: ";
        //label.classList.add("selector-label");
        //cell.appendChild(document.createElement("br"));
        //var endTime: HTMLInputElement = document.createElement("input");
        //cell.appendChild(endTime);
        //endTime.id = "endTime";
        //endTime.type = "number";
        //endTime.max = "99999";
        //endTime.min = "10";
        //endTime.step = "10";
        //endTime.value = "100";
        //var span: HTMLSpanElement = document.createElement("span");
        //cell.appendChild(span);
        //span.innerHTML = "days";
        //span.style.marginLeft = "5px";

        var div: HTMLDivElement = document.createElement("div");
        cell.appendChild(div);
        div.id = "endTime";
        

        var cell: HTMLTableCellElement = row.insertCell();
        //var label: HTMLLabelElement = document.createElement("label");
        //cell.appendChild(label);
        //label.htmlFor = "movesPerTick";
        //label.classList.add("selector-label");
        //label.innerHTML = "Select number of moves pr tick: ";
        //cell.appendChild(document.createElement("br"));
        //var movesPrTick: HTMLSelectElement = document.createElement("select");
        //cell.appendChild(movesPrTick);
        //movesPrTick.id = "movesPerTick";
        //var option: HTMLOptionElement = document.createElement("option");
        //movesPrTick.appendChild(option);
        //option.innerHTML = "One day";
        //option.value = "1";
        //var option: HTMLOptionElement = document.createElement("option");
        //movesPrTick.appendChild(option);
        //option.innerHTML = "One week";
        //option.value = "7";
        //var option: HTMLOptionElement = document.createElement("option");
        //movesPrTick.appendChild(option);
        //option.innerHTML = "One month";
        //option.value = "30";
        //var option: HTMLOptionElement = document.createElement("option");
        //movesPrTick.appendChild(option);
        //option.innerHTML = "One year";
        //option.value = "365";

        var div: HTMLDivElement = document.createElement("div");
        cell.appendChild(div);
        div.id = "movesPerTick";


        var informationDiv: HTMLDivElement = document.createElement("div");
        mainDiv.appendChild(informationDiv);
        informationDiv.id = "information";
    
        var nameP: HTMLParagraphElement = document.createElement("p");
        informationDiv.appendChild(nameP);       
        nameP.id = "name";
        nameP.innerHTML = "Name: ";

        var desP: HTMLParagraphElement = document.createElement("p");
        informationDiv.appendChild(desP);
        desP.id = "des";
        desP.innerHTML = "Description: ";

        var msyP: HTMLParagraphElement = document.createElement("p");
        informationDiv.appendChild(msyP);
        msyP.id = "msy";
        //msyP.innerHTML = "msyCod: 25000 </br> msyMac: 80000";

        var linkP: HTMLParagraphElement = document.createElement("p");
        informationDiv.appendChild(linkP);
        linkP.id = "link";
        linkP.innerHTML = "Link: ";
        linkP.classList.add("link");

        var goalP: HTMLParagraphElement = document.createElement("p");
        informationDiv.appendChild(goalP);
        goalP.id = "goal";
        goalP.innerHTML = "Goal: ";
        
        $("#scenario1").attr("checked", 'true');//Scenario 1 is checked by default at the start (if changed, this must be changed in the constructor too)
        $('#chooseScenario').buttonset();

        $("#startScreen").dialog({
            minWidth: 1100,
            minHeight: 600,
            modal: true
        });

        
    }

    public updateInfo = () => {
        //var scenario = this.m_controller.getScenario();
        var t = $("#endTime");
        $("#endTime").text("Duration of simulation: " + this.m_scenario.getDefaultNoDays() + " days");
        $("#name").html(this.m_scenario.getName());
        $("#des").html(this.m_scenario.getDescription());
        $("#des").append(" Taxing rate is " + this.m_scenario.getTaxingRate() * 100 + "%");
        //$("#des").append(" Total cc: " + 
        $("#link").html("<a target='_blank' href='" + this.m_scenario.getLink() + "'>Link to MCA</a>");
        var goal = $("#goal");
        goal.html("");
        goal.append("<p>");
        if (this.m_scenario.getfinGoal().toString() != "no")
            goal.append("Economic score goal: <span style='float:right' > " + this.m_scenario.getfinGoal() + "</span><br/>");
        if (this.m_scenario.getEcoGoal().toString() != "no")
            goal.append("Environmental score goal: <span style='float:right' > " + this.m_scenario.getEcoGoal() + "</span><br/>");
        if (this.m_scenario.getSocGoal().toString() != "no")
            goal.append("Social score goal: <span style='float:right' > " + this.m_scenario.getSocGoal() + "</span><br/>");
        if (this.m_scenario.getAllScore().toString() != "no")
            goal.append("Overall score goal: <span style='float:right' > " + this.m_scenario.getAllScore() + "</span><br/>");
        goal.append("</p>");
    }
}