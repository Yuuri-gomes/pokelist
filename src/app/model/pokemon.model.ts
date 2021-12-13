export interface ResultsModel {
    results: [
        {
            name: string;
            url: string;
        }
    ]
}

export interface PokemonModel {
    abilities: Abilities[];
    name: string;
    sprites: { front_default: string };
    stats: Stats[];
    types: Types[];
    weight: number;
    height: number;
}

export interface Abilities {
    ability: {
        name: string;
        url: string;
    }
    is_hidden: boolean;
    slot: number;
}

export interface Stats {
    base_stat: number;
    stat: { name: string };
}

export interface Types {
    type: { name: string };
}