type Alcohol = {
    name: string;
    percentage: number;
    type: string;
}

type Mixer = {
    name: string;
    type: string;
    carbonated: boolean;
}

type Cocktail = Alcohol & Mixer;

const cocktail_1: Cocktail = {
    name: 'Caipirinha',
    percentage: 48,
    type: 'Cocktail',
    carbonated: false
}

console.log(cocktail_1);
