// CustomWidgets/Copilot-Test-Gauge/main.js

class CustomGaugeWidget extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
    this.color = '#FF0000'; // Default color
  }

  connectedCallback() {
    this.render();
  }

  setColor(color) {
    this.color = color;
    this.updateArrowColor();
  }

  updateArrowColor() {
    const arrow = this.shadowRoot.querySelector('.gauge-arrow');
    if (arrow) {
      arrow.style.borderBottomColor = this.color;
    }
  }

  render() {
    this.shadowRoot.innerHTML = `
      <div class="gauge-container">
        <div class="gauge-arrow"></div>
      </div>
    `;
    applyCustomStyling(this.shadowRoot);
    this.updateArrowColor();
  }
}

customElements.define('custom-gauge-widget', CustomGaugeWidget);