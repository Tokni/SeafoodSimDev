﻿/// <reference path="Site.ts"/>
class LandingSite extends Site {
    private m_prices: { [fishType: number]: number } = {};
    private m_untaxedValue: number = 0;

    public constructor(p_shipCapacity: number, p_resourceCapacity: number, p_processPerDay: number, p_prices: { [fishType: number]: number }, p_id: string, p_position: Point2) {
        super(p_shipCapacity, p_resourceCapacity, p_processPerDay, p_id, p_position);
        this.m_resourceAtSite = 0;
        this.m_prices = p_prices;
        
    }
    public getPrices(): { [fishType: number]: number } {
        return this.m_prices;
    }

    public tax(p_taxingRate: number): number {
        var tax: number = this.m_untaxedValue * p_taxingRate;
        this.m_untaxedValue = 0;
        return tax;
    }

    //Returns a list of fish that were not taken in and a price
    public receiveFish(p_fish: number[][]): number {
        var price: number = 0;

        var percentage: number = 1;
        //Count how much fish there is
        var noOfFish: number = 0;
        for (var i = 0; i < p_fish[FishType.Cod].length; i++) {
            noOfFish += p_fish[FishType.Cod][i];
        }
        for (var i = 0; i < p_fish[FishType.Mackerel].length; i++) {
            noOfFish += p_fish[FishType.Mackerel][i];
        }
        if (this.m_resourceCapacity < this.m_resourceAtSite + noOfFish) {
            // If landing site is not able to take all the fish it should take a percentage
            percentage = (this.m_resourceCapacity - this.m_resourceAtSite) / noOfFish;
        }
        //Receive cod
        for (var i = 0; i < p_fish[FishType.Cod].length; i++) {
            var noOfReceivedFish: number = p_fish[FishType.Cod][i] * percentage;
            p_fish[FishType.Cod][i] -= noOfReceivedFish;
            price += this.m_prices[FishType.Cod] * noOfReceivedFish;
            this.m_resourceAtSite += noOfReceivedFish;
        }
        
        //Receive mackarel
        for (var i = 0; i < p_fish[FishType.Mackerel].length; i++) {
            var noOfReceivedFish: number = p_fish[FishType.Mackerel][i] * percentage;
            p_fish[FishType.Mackerel][i] -= noOfReceivedFish;
            price += this.m_prices[FishType.Mackerel] * noOfReceivedFish;
            this.m_resourceAtSite += noOfReceivedFish;
        }

        this.m_untaxedValue += price;
        return price
    }

    public processFish(): void {
        if (this.m_resourceAtSite !== 0) {
            this.m_resourceAtSite -= this.m_processPerDay;
            if (this.m_resourceAtSite < 0) {
                this.m_resourceAtSite = 0;
            }
        }
    }
}