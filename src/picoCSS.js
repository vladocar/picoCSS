var p = {

    select: function (selector) {
        this.value = Array.prototype.slice.call(document.querySelectorAll(selector));
        return this;
    },
    each: [].forEach,
    css: function (v) {
        this.value = this.each.call(this.value, function (i) {
            i.style.cssText = v;
        });
        return this;
    },
    att: function (a, v) {
        this.value = this.each.call(this.value, function (i) {
            i.setAttribute(a, v);
        });
        return this;
    },
    animate: function (time, scale, rotate, rotateX, rotateY, translateX, translateY, skewX, skewY) {
        this.value = [].forEach.call(this.value, function (i) {
            i.style.cssText = '-webkit-transition: all ' + time + 's ease-in-out; -webkit-transform: scale(' + scale + ') rotate(' + rotate + 'deg) rotateX(' + rotateX + 'deg) rotateY(' + rotateY + 'deg) translate(' + translateX + 'px, ' + translateY + 'px) skew(' + skewX + 'deg, ' + skewY + 'deg)';
        });
        return this;
    },

    on: function (type, fn) {
        this.value = this.each.call(this.value, function (i) {
            i.addEventListener(type, fn, false);
        });
        return this;
    }

};