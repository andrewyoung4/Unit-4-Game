
$(document).ready(() => {

    //program generates a random number between 19 and 120
    let randNumber = Math.floor(Math.random() * ((120 - 19) + 1) + 19);
    $('#randNum').html(randNumber);

    //each crystal has a hidden value i.e. random number between 1 and 12
    let amethyst = Math.floor(Math.random() * 12) + 1;
    let emld = Math.floor(Math.random() * 12) + 1;
    let ruby = Math.floor(Math.random() * 12) + 1;
    let sapphire = Math.floor(Math.random() * 12) + 1;

    //player clicks the crystals to display value to totScore
    let wins = 0;
    let losses = 0; 

    let totScore = 0;
    $('#totalScore').text(totScore);

    function win() {
        wins = wins + 1;
        $('#wins').text(wins);
        resetTwo();
        reset();
    }

    function lose() {
        losses = losses + 1;
        $('#losses').text(losses);
        resetTwo();
        reset();
    }

    $('#amethyst').click(() => {
        totScore = totScore + amethyst
        $('#totalScore').text(totScore);
        if (totScore === randNumber) {
            win();
            reset();
            resetTwo();
        } else if (totScore > randNumber) {
            lose();
            reset();
            resetTwo();
        }
    });

    $('#emld').click(() => {
        totScore = totScore + emld;
        $('#totalScore').text(totScore);
        if (totScore === randNumber) {
            win();
            reset();
            resetTwo();
        } else if (totScore > randNumber) {
            lose();
            reset();
            resetTwo();
        }
    });

    $('#ruby').click(() => {
        totScore = totScore + ruby;
        $('#totalScore').text(totScore);
        if (totScore === randNumber) {
            win();
            reset();
            resetTwo();
        } else if (totScore > randNumber) {
            lose();
            reset();
            resetTwo();
        }
    });

    $('#sapphire').click(() => {
        totScore = totScore + sapphire;
        $('#totalScore').text(totScore);
        if (totScore === randNumber) {
            win();
            reset();
            resetTwo();
        } else if (totScore > randNumber) {
            lose();
            reset();
            resetTwo();
        }
    });

    function reset() {
        totScore = 0;
        $('#totalScore').text(totScore);
    }

    function resetTwo() {
        randNumber = Math.floor(Math.random() * ((120 - 19) + 1) + 19);
        $('#randNum').html(randNumber);
        amethyst = Math.floor(Math.random() * 12) + 1;
        emld = Math.floor(Math.random() * 12) + 1;
        ruby = Math.floor(Math.random() * 12) + 1;
        sapphire = Math.floor(Math.random() * 12) + 1;
    }
});