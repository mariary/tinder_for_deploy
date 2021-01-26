document.addEventListener('touchstart', handleTouchStart, false);
document.addEventListener('touchmove', handleTouchMove, false);

var xDown = null;

function getTouches(evt) {
    return evt.touches ||
        evt.originalEvent.touches;
}

function handleTouchStart(evt) {
    const firstTouch = getTouches(evt)[0];
    xDown = firstTouch.clientX;
};

function handleTouchMove(evt) {
    if (!xDown ) {
        return;
    }

    var xUp = evt.touches[0].clientX;

    var xDiff = xDown - xUp;

    if (xDiff > 0) {
            Common(1);
        } else {
            Common(2);
        }
    xDown = null;
};