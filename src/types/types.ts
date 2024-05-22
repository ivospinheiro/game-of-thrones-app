export enum House {
    Dragonstone = "Dragonstone",
    Stark = "Stark",
    CasterlyRock = "Casterly Rock",
    Winterfell = "Winterfell",
    IronIslands = "Iron Islands",
    Dorne = "Dorne"
}

export interface Character {
    name: string;
    house: House;
}
