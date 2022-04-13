export interface PokemonsDataModel {
    count: string;
    next: string;
    previous: string;
    result: Array<string>;
}

export interface PokemonsData {
    name: string;
    url: string;
    id: string;
}