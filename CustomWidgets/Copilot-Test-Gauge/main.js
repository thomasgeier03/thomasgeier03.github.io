(function() {
    let _shadowRoot;
    let _id;
    let _props;
  
    function render() {
      if (!_shadowRoot) {
        return;
      }
  
      const placeholders = _props['placeholders'] || ["Placeholder 1", "Placeholder 2", "Placeholder 3"];
      const colors = _props['colors'] || ["#FF0000", "#00FF00", "#0000FF"];
  
      const container = document.createElement('div');
      container.className = 'gauge-container';
      container.innerHTML = placeholders.map((placeholder, index) => `
        <div class="gauge-placeholder" style="color: ${colors[index] || '#000'};">
          <div class="gauge-placeholder-title">${placeholder}</div>
          <div class="gauge-placeholder-value">0%</div>
        </div>
      `).join('');
  
      _shadowRoot.innerHTML = '';
      _shadowRoot.appendChild(container);
  
      // Load and apply styling
      loadStyling(_shadowRoot);
    }
  
    function loadStyling(shadowRoot) {
      const styleScript = document.createElement('script');
      styleScript.src = 'styling.js';
      styleScript.onload = () => {
          if (typeof applyCustomStyling === 'function') {
              applyCustomStyling(shadowRoot);
          }
      };
      document.head.appendChild(styleScript);
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
    });

    class Main extends HTMLElement {
      constructor () {
        super()
  
        this._shadowRoot = this.attachShadow({ mode: 'open' })
        this._shadowRoot.appendChild(template.content.cloneNode(true))
        this._root = this._shadowRoot.getElementById('root')
        this._renderer = new Renderer(this._root)
      }
    // ------------------
    // LifecycleCallbacks
    // ------------------
    async onCustomWidgetBeforeUpdate (changedProps) {
    }

    async onCustomWidgetAfterUpdate (changedProps) {
      this.render()
    }

    async onCustomWidgetResize (width, height) {
      this.render()
    }

    async onCustomWidgetDestroy () {
      this.dispose()
    }
    // ------------------
    //
    // ------------------
    render () {
      if (!document.contains(this)) {
        // Delay the render to assure the custom widget is appended on dom
        setTimeout(this.render.bind(this), 0)
        return
      }

      this._renderer.render(this.dataBinding, this.stops, this.reverse)
    }

    dispose () {
      this._renderer.dispose()
    }
  }
  
    customElements.define('custom-gauge-widget', Main);
  })();