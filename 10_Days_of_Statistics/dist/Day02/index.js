"use strict";
const DICE = 6;
const TOTAL_RATE = Math.pow(DICE, 2);
const Basic_Probability_Goal = 9;
const More_Dice_Goal = 6;
let basic_probability_sum = 0;
let more_dice_sum = 0;
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
const urnX = { red: 4, black: 3 };
const urnY = { red: 5, black: 4 };
const urnZ = { red: 4, black: 4 };
function getBall(urn, target) {
    let totalBall = 0;
    let targetBall = 0;
    for (const key in urn) {
        if (key == target) {
            targetBall = urn[key];
        }
        totalBall += urn[key];
    }
    return (targetBall / totalBall);
}
function calculateProbability() {
    let probability = 0;
    probability = (getBall(urnX, 'red') * getBall(urnY, 'red') * getBall(urnZ, 'black'))
        + (getBall(urnX, 'red') * getBall(urnY, 'black') * getBall(urnZ, 'red'))
        + (getBall(urnX, 'black') * getBall(urnY, 'red') * getBall(urnZ, 'red'));
    return probability;
}
const result = calculateProbability().toFixed(3);
console.log(result);
