/**
 * @param callbackObj Object An object with callbacks in .start, .progress, and .done
 * @param duration Integer Total duration in seconds
 */
 export const animate = (callbackObj, duration) => {
    var requestAnimationFrame =
        window.requestAnimationFrame ||
        window.webkitRequestAnimationFrame ||
        window.mozRequestAnimationFrame ||
        window.oRequestAnimationFrame ||
        window.msRequestAnimationFrame;
    var startTime = 0,
        percentage = 0,
        animationTime = 0;

    duration = duration * 1000 || 1000;

    var animation = function(timestamp) {
        if (startTime === 0) {
            startTime = timestamp;
        } else {
            animationTime = timestamp - startTime;
        }

        if (
            typeof callbackObj.start === 'function' &&
            startTime === timestamp
        ) {
            callbackObj.start();

            requestAnimationFrame(animation);
        } else if (animationTime < duration) {
            if (typeof callbackObj.progress === 'function') {
                percentage = animationTime / duration;
                callbackObj.progress(percentage);
            }

            requestAnimationFrame(animation);
        } else if (typeof callbackObj.done === 'function') {
            callbackObj.done();
        }
    };

    return requestAnimationFrame(animation);
};

export const easeInOutQuad = t => {
    return t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t;
};

export const scrollToTop = scrollDuration => {
    var scrollStep = -window.scrollY / (scrollDuration / 15),
        scrollInterval = setInterval(function() {
            if (window.scrollY !== 0) {
                window.scrollBy(0, scrollStep);
            } else clearInterval(scrollInterval);
        }, 15);
};