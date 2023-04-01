/*  Binomial Distribution

    Formula: 
        P(X = k) = C(n, k) * p^k * (1 - p)^(n - k)

    
    P(X = k) is the probability of getting exactly k successes
    C(n, k) is the number of ways to choose k successes out of n trials
    p is the probability of success
    n is the number of trials
    k is the number of successes
*/


/*
    The ratio of boys to girls for babies born in Russia is 1.09 : 1. 
    If there is 1 child born per birth, what proportion of Russian families with exactly 6 children will have at least 3 boys?

    Write a program to compute the answer using the above parameters. 
    Then print your result, rounded to a scale of  decimal places (i.e., 1.234 format).
*/

const boyGirlRatio: number = 1.09 / 2.09;

function factorial(num: number): number {
    let result: number = 1;
    for (let i = 2; i <= num; i++) {
        result *= i;
    }
    return result; 
}

function calculateBirthProbability(): number {
    let probability: number = 0;

    for (var numBoys = 3; numBoys <=6; numBoys++) {
        let numGirls: number = 6 - numBoys;
        // Calculate the probability of this number of boys and girls using the binomial distribution
        const binomialCoeff: number = factorial(6) / (factorial(numBoys) * factorial(numGirls));
        const binomialProb: number = binomialCoeff * Math.pow(boyGirlRatio, numBoys) * Math.pow(1 - boyGirlRatio, numGirls);

        probability += binomialProb;
    }

    return probability;
}

const birthProbability: string = calculateBirthProbability().toFixed(3);
console.log(`The proportion of Russian families with exactly 6 children that have at least 3 boys is ${birthProbability}`)



/*
    A manufacturer of metal pistons finds that, on average, 12% of the pistons they manufacture are rejected because they are incorrectly sized. 
    
    What is the probability that a batch of 10 pistons will contain:
        1. No more than 2 rejects?
        2. At least 2 rejects?
        
        
        0.891 0.342
*/

const rejectedRatio: number = 0.12;
const pistons: number = 10;

function binomialCoefficient(n: number, k: number): number {
    let c = 1;
    for (let i = 1; i <= k; i++) {
        c *= (n - i + 1) / i;
    }
    return c;
}

function calculateRejectRatio(start: number, end: number): number {
    let probability: number = 0;
    
    for (var i = start; i <= end; i++) {
        const binomialProb: number = binomialCoefficient(pistons, i) * Math.pow(rejectedRatio, i) * Math.pow(1 - rejectedRatio, pistons - i);
        probability += binomialProb;
    }
    
    return probability;
}

let probabilityA: number = calculateRejectRatio(0, 2);
let probabilityB: number = calculateRejectRatio(2, pistons);
console.log(`The proportion of no more than 2 rejects: ${probabilityA.toFixed(3)}`);
console.log(`The proportion of at least 2 rejects: ${probabilityB.toFixed(3)}`);

/*  Geometric Distribution 
    
    Formula: 
        P(X = n) = q^(n-1)p, where q = 1 - p.
*/

/*
    The probability that a machine produces a defective product is 1/3. 
    What is the probability that the 1st defect occurs the 5th item produced?
*/

const defectiveRatio: number = 1/3;
const target: number = 5;

function calculateDefectiveProduct(num: number): number {
    return Math.pow(1 - defectiveRatio, num - 1) * defectiveRatio;
}

console.log(calculateDefectiveProduct(target).toFixed(3));

/*
    The probability that a machine produces a defective product is 1/3. 
    What is the probability that the 1st defect is found during the first 5 inspections?
*/
// round 1: pass, round 2: pass, round 3: pass, round 4: pass, round 5: fault

const multiInsepections = (): number => {
    let result: number = 0;
    for (var i = 1; i <= target; i++) {
        result += calculateDefectiveProduct(i);
    }
    return result;
}

console.log(multiInsepections().toFixed(3));