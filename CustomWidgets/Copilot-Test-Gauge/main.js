(function() {
  let _shadowRoot;
  let _id;
  let _props;

  function render() {
      if (!_shadowRoot) {
          return;
      }

      const color = _props['color'] || "#FF0000";
      const value = _props['value'] || 0;

      const container = document.createElement('div');
      container.className = 'gauge-container';

      const arrow = document.createElement('div');
      arrow.className = 'gauge-arrow';
      arrow.style.transform = `rotate(${value * 1.8}deg)`; // Assuming value is between 0 and 100
      arrow.style.borderColor = color;

      container.appendChild(arrow);

      _shadowRoot.innerHTML = '';
      _shadowRoot.appendChild(container);

      // Load and apply styling
      loadStyling(_shadowRoot);
  }

  function loadStyling(shadowRoot) {
      applyCustomStyling(shadowRoot);
  }

  customElements.define('custom-gauge-widget', class extends HTMLElement {
      constructor() {
          super();
          _shadowRoot = this.attachShadow({ mode: 'open' });
      }

      set id(value) {
          _id = value;
      }

      set props(value) {
          _props = value;
          render();
      }
  });

  class Main extends HTMLElement {}

  customElements.define('custom-gauge-widget', Main);
})();