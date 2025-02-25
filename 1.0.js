'use strict';
const dolphinScore1 = 44, dolphinScore2 = 23, dolphinScore3 = 71;
const koalaScore1 = 65, koalaScore2 = 54, koalaScore3 = 49;
const calcAverage = (Score1, Score2, Score3) => (Score1 + Score2 + Score3) / 3;
let winner;
function checkWinner(scoreDolphins, scoreKoalas) {
    if (scoreDolphins >= 2 * scoreKoalas) {
        winner = `Dolphins win (${scoreDolphins} vs. ${scoreKoalas})`;
    }
    else if (scoreKoalas >= 2 * scoreDolphins) {
        winner = `Koalas win (${scoreKoalas} vs. ${scoreDolphins})`;
    }
    else {
        winner = 'No team wins...';
    }
    return console.log(winner);
}
const scoreDolphins = calcAverage(dolphinScore1, dolphinScore2, dolphinScore3);
const scoreKoalas = calcAverage(koalaScore1, koalaScore2, koalaScore3)
checkWinner(scoreDolphins, scoreKoalas);