export function generateRandomAlphabeticText(length: number): string {
    const alphabets = "abcdefghijklmnopqrstuvwxyz";
    let _: string[] = [];
    for (let i = 0; i < length; i++) {
        const randomNumber = Math.round(Math.random() * length);
        _.push(alphabets[randomNumber % alphabets.length]);
    }
    const randomAlphabeticText = _.join("");
    return randomAlphabeticText;
}

export function generateRandomAlphaNumericText(length: number): string {
    const alphabets = "abcdefghijklmnopqrstuvwxyz";
    const integers = "0123456789";
    let _: string[] = [];
    for (let i = 0; i < length; i++) {
        const randomNumber = Math.round(Math.random() * length);
        _.push(alphabets[randomNumber % alphabets.length] + integers[randomNumber % integers.length]);
    }
    const randomAlphabeticText = _.join("");
    return randomAlphabeticText;
}

console.log(generateRandomAlphabeticText(50));