(function ($, window) {
    myScroll = new IScroll('#iscroll', {
        mouseWheel: true,
        indicators: [{
            el: $('.iscroll.slow3')[0],
            resize: false,
            ignoreBoundaries: true,
            speedRatioY: -0.3
        }, {
            el: $('.iscroll.slow4')[0],
            resize: false,
            ignoreBoundaries: true,
            speedRatioY: -0.4
        }]
    });
}(jQuery, window));
