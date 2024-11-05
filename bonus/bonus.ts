import { TAlcohol, TCocktail, TMixer } from "../alcohol"

const mixCocktail = (alchohol: TAlcohol, mixer: TMixer): TCocktail => {
    const cocktailMixed: TCocktail = {
        name: `${alchohol.name} ${mixer.name}`,
        percentage: alchohol.percentage,
        type: `${alchohol.type} ${mixer.type}`,
        carbonated: mixer.carbonated
    }

    return cocktailMixed;
}

//* -------- Alcohols --------
const bier: TAlcohol = {
    name: 'Beer',
    percentage: 7,
    type: 'Fermented drink',
}

const wodka: TAlcohol = {
    name: 'Wodka',
    percentage: 40,
    type: 'Distilled spirits',
}
//* -------- Mixers --------
const apfelschorle: TMixer = {
    name: 'Apfelschorle',
    type: 'Mixed drink',
    carbonated: true
}
const lemon: TMixer = {
    name: 'Lemon',
    type: 'Fruit',
    carbonated: false
}

console.log(mixCocktail(bier, lemon));
console.log(mixCocktail(wodka, apfelschorle));
console.log(mixCocktail(bier, apfelschorle));
console.log(mixCocktail(wodka, lemon));