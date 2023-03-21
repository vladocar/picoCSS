const p = {
  select(selector) {
    const elements = Array.from(document.querySelectorAll(selector));
    return {
      each: function(fn) {
        for (let i = 0; i < elements.length; i++) {
          fn(elements[i], i);
        }
        return this;
      },
      css: function(v) {
        for (let i = 0; i < elements.length; i++) {
          elements[i].style.cssText = v;
        }
        return this;
      },
      att: function(a, v) {
        for (let i = 0; i < elements.length; i++) {
          elements[i].setAttribute(a, v);
        }
        return this;
      },
      animate: function(time, scale, rotate, rotateX, rotateY, translateX, translateY, skewX, skewY) {
        const animationCssText = `
          transition: all ${time}s ease-in-out;
          transform: scale(${scale}) rotate(${rotate}deg) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translate(${translateX}px, ${translateY}px) skew(${skewX}deg, ${skewY}deg)
        `;
        for (let i = 0; i < elements.length; i++) {
          elements[i].style.cssText = animationCssText;
        }
        return this;
      },
      on: function(type, fn) {
        for (let i = 0; i < elements.length; i++) {
          elements[i].addEventListener(type, fn, false);
        }
        return this;
      },
      end: function() {
        return elements;
      }
    };
  }
};
