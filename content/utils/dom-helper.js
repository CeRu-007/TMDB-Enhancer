class DOMHelper {
  static waitForElement(selector, timeout = 5000) {
    return new Promise((resolve, reject) => {
      const element = document.querySelector(selector);
      if (element) {
        return resolve(element);
      }

      const observer = new MutationObserver((mutations, obs) => {
        const el = document.querySelector(selector);
        if (el) {
          obs.disconnect();
          resolve(el);
        }
      });

      observer.observe(document.body, {
        childList: true,
        subtree: true
      });

      setTimeout(() => {
        observer.disconnect();
        reject(new Error(`Element ${selector} not found within ${timeout}ms`));
      }, timeout);
    });
  }

  static createElement(tag, className, innerHTML = '') {
    const element = document.createElement(tag);
    if (className) {
      element.className = className;
    }
    if (innerHTML) {
      element.innerHTML = innerHTML;
    }
    return element;
  }

  static insertAfter(newNode, referenceNode) {
    referenceNode.parentNode.insertBefore(newNode, referenceNode.nextSibling);
  }

  static injectCSS(css) {
    const style = document.createElement('style');
    style.textContent = css;
    document.head.appendChild(style);
    return style;
  }

  static createIcon(src, alt = '', size = 16) {
    const img = document.createElement('img');
    img.src = src;
    img.alt = alt;
    img.width = size;
    img.height = size;
    img.style.cssText = 'display: inline-block; vertical-align: middle;';
    return img;
  }
}