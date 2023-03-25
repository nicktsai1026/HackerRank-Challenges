const DICE: number = 6;
const TOTAL_RATE: number = Math.pow(DICE, 2);
const Basic_Probability_Goal: number = 9;
const More_Dice_Goal: number = 6;
let basic_probability_sum: number = 0;
let more_dice_sum: number = 0;

for (var i = 1; i <= DICE; i++) {
    for (var j = 1; j <= DICE; j++) {
        if (i + j <= Basic_Probability_Goal) {
            basic_probability_sum++;
        }
        if (i + j === More_Dice_Goal && i !== j) {
            more_dice_sum++;
        }
    }
}

console.log(`${basic_probability_sum} / ${TOTAL_RATE}`);
console.log(`${more_dice_sum} / ${TOTAL_RATE}`);


/* 
    One ball is drawn from each of the 3 urns. What is the probability that, 
    of the 3 balls drawn, 2 are red and 1 is black?

    red red black, red black red, black red red
*/

interface Urn {
    red: number,
    black: number
}

const urnX: Urn = { red: 4, black: 3 };
const urnY: Urn = { red: 5, black: 4 };
const urnZ: Urn = { red: 4, black: 4 };

function getBall (urn: Urn, target: string): number {
    let totalBall: number = 0;
    let targetBall: number = 0;

    for (const key in urn) {
        if (key == target) {
            targetBall = urn[key as keyof Urn];
        }
        totalBall += urn[key as keyof Urn];
    }

    return (targetBall / totalBall);
}

function calculateProbability (): number {
    let probability: number = 0;

    probability = (getBall(urnX, 'red') * getBall(urnY, 'red') * getBall(urnZ, 'black'))
        + (getBall(urnX, 'red') * getBall(urnY, 'black') * getBall(urnZ, 'red'))
        + (getBall(urnX, 'black') * getBall(urnY, 'red') * getBall(urnZ, 'red'));

    return probability;
}

const result = calculateProbability().toFixed(3);
console.log(result);