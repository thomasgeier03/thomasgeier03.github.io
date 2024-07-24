class AverageGauge extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
    this.data = [];
    this.width = 600;
    this.height = 320;
  }

  connectedCallback() {
    this.render();
  }

  setData(data) {
    this.data = data;
    this.updateGauge();
  }

  updateGauge() {
    const average = this.data.reduce((a, b) => a + b, 0) / this.data.length;
    const percentage = (average / 100) * 100;
    this.shadowRoot.querySelector('#gauge').innerText = `${percentage.toFixed(2)}%`;
  }

  render() {
    this.shadowRoot.innerHTML = `
      <style>
        #gauge {
          width: ${this.width}px;
          height: ${this.height}px;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 2em;
          border: 1px solid #000;
          border-radius: 50%;
        }
      </style>
      <div id="gauge">0%</div>
    `;
    this.updateDataBindings(this.data);
  }

  updateDataBindings(newBindings) {
    this.data = newBindings;
    this.updateGauge();
  }
}

customElements.define('com-yourvendor-averagegauge', AverageGauge);