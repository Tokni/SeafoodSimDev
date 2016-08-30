﻿// <reference path = "../../TSSeafoodSimDev/externals/model.d.ts"/>

class MainView {
    private m_mapView: MapView;
    private m_mapMenu: MapMenu;

    constructor(p_map: Map, p_ShipOwners: ShipOwner[],p_taxingRate: number) {
        this.m_mapView = new MapView(p_map);
        this.m_mapMenu = new MapMenu(p_ShipOwners, p_map.getLandingSites(),p_taxingRate);
    }

    public getMapMenu(): MapMenu {
        return this.m_mapMenu;
    }
    updateMainView(p_model: Model) {
        //console.log("updating mainView");
        this.m_mapMenu.updateScore(p_model.getGovernment());
        this.m_mapView.updateMapView(p_model.getMap());
    }

}