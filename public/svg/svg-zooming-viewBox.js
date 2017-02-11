var svg = document.querySelector("svg");
svg.addEventListener("click", function() {
    alert();
});
console.log(svg);
var elem = svg;
if (elem.addEventListener) {
    if ('onwheel' in document) {
        // IE9+, FF17+, Ch31+
        elem.addEventListener("wheel", onWheel);
    } else if ('onmousewheel' in document) {
        // устаревший вариант события
        elem.addEventListener("mousewheel", onWheel);
    } else {
        // Firefox < 17
        elem.addEventListener("MozMousePixelScroll", onWheel);
    }
} else { // IE8-
    elem.attachEvent("onmousewheel", onWheel);
}

function onWheel(e) {
    e = e || window.event;
    var shiftX = 0;
    var shiftY = 0;
    var step = 1.5;
    var svgPosition = getSVGPosition(this);

    if (e.deltaY < 0) {
        var width = this.viewBox.animVal.width / step;
        var height = this.viewBox.animVal.height / step;

        shiftX = (e.clientX ) * (step - 1);
        shiftY = (e.clientY ) * (step - 1);
    } else {
        var width = this.viewBox.animVal.width * step;
        var height = this.viewBox.animVal.height * step;
        shiftX = (e.clientX + this.viewBox.animVal.x) * (1 / step - 1);
        shiftY = (e.clientY + this.viewBox.animVal.y) * (1 / step - 1);
    }
    var newX = (-this.viewBox.animVal.x  + shiftX);
    var newY = (-this.viewBox.animVal.y + shiftY);
    this.setAttribute("viewBox", "" + newX + " " + newY + " " + width + " " + height);


    console.log(this.viewBox.animVal);
    e.preventDefault ? e.preventDefault() : (e.returnValue = false);
}

function getSVGPosition (svg) {
    var target = svg;
    var boundingRect = target.getBoundingClientRect();
    var svgLeft = boundingRect.left;
    var svgTop = boundingRect.top;
    console.log(svgLeft + " " + svgTop);
    return {
        left: svgLeft,
        top: svgTop
    }
}