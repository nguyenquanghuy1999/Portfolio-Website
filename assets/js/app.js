export const isOddNumber = (number) => number % 2 == 1;


export const countEvenNumber = (numberList) => {
    if (!Array.isArray(numberList)) {
        return 0;
    }

    return numberList.filter((number) => number % 2 === 0).length;
}
