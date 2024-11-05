export type TAlcohol = {
    name: string;
    percentage: number;
    type: string;
}

export type TMixer = {
    name: string;
    type: string;
    carbonated: boolean;
}

export type TCocktail = TAlcohol & TMixer;

const cocktail_1: TCocktail = {
    name: 'Caipirinha',
    percentage: 48,
    type: 'Cocktail',
    carbonated: false
}

console.log(cocktail_1);
