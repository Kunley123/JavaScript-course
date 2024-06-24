function autoplay() {

    if (!isAutoPlaying) {
        intervalId = setInterval(function () {
            const playerMove = pickComputermove();
            playGame(playerMove);
        }, 1000);
        isAutoPlaying = true;
    } else {
    }


}
