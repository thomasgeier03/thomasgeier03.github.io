(function() {
  let _shadowRoot;
  let _id;
  let _props = {};
  let _dataBinding = {};

  function render() {
      if (!_shadowRoot) {
          return;
      }

      const placeholders = _props['placeholders'] || ["Placeholder 1", "Placeholder 2", "Placeholder 3"];
      const colors = _props['colors'] || ["#FF0000", "#00FF00", "#0000FF"];
      const measures = _dataBinding['measures'] || [0, 0, 0];

      const container = document.createElement('div');
      container.className = 'gauge-container';
      container.innerHTML = placeholders.map((placeholder, index) => `
          <div class="gauge-placeholder" style="color: ${colors[index] || '#000'};">
              <div class="gauge-placeholder-title">${placeholder}</div>
              <div class="gauge-placeholder-value">${measures[index] || 0}%</div>
          </div>
      `).join('');

      _shadowRoot.innerHTML = '';
      _shadowRoot.appendChild(container);

      // Load and apply styling
      applyCustomStyling(_shadowRoot);
  }

  customElements.define('custom-gauge-widget', class extends HTMLElement {
      constructor() {
          super();
          _shadowRoot = this.attachShadow({mode: 'open'});
      }

      set id(value) {
          _id = value;
      }

      set props(value) {
          _props = value;
          render();
      }

      set dataBinding(value) {
          _dataBinding = value;
          render();
      }
  });
})();