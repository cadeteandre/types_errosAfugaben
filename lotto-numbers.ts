const generateLottoNumber = () => {
    const lottoNumber: number = Math.round(Math.random() * 100) + 1;
    if(lottoNumber > 49) {
        throw new Error('That number is less than 49')
    } else {
        return lottoNumber;
    }
}

let lottoResults: number[] = [];
do {
    try {
        const newNumber: number = generateLottoNumber();
        if (!lottoResults.includes(newNumber)) {
            lottoResults.push(newNumber);
        }
    } catch(err) {
        console.log(err);
    }
} while (lottoResults.length < 7);

console.log(lottoResults);
