
/**
 * Generates number between 0 and 10
 * @param max the max range of generated random number
 * @returns a random number less than max
 */
function generateRandomNumber(max: number): number {
    const randomNumber = Math.random() * max; // if we put 3 than 0,1,2
    return randomNumber;
}

/**
 * Generate a random number between specified values. 
 * The generated number will be greater than or equal to min but always less than max
 * @param min a min value of random number
 * @param max a max value of random number
 * @returns a random number between min and max
 */
export function generateRandomNumberBetween(min:number, max:number): number {
    const randomNumber = Math.random() * (max - min) + max;
    return randomNumber;
}

//npx cypress run --env grepTags='@smoke'