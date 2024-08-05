class JSChartingGauge extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
        this.shadowRoot.innerHTML = `
            <style>
                :host {
                    display: block;
                    width: 100%;
                    height: 100%;
                }
                #gaugeContainer {
                    width: 100%;
                    height: 100%;
                }
            </style>
            <div id="gaugeContainer"></div>
        `;
    }

    connectedCallback() {
        this.renderGauge();
    }

    renderGauge() {
        const data = this.getAttribute('data') ? JSON.parse(this.getAttribute('data')) : [50];
        JSC.chart(this.shadowRoot.getElementById('gaugeContainer'), {
            type: 'gauge',
            series: [{
                points: data
            }]
        });
    }

    static get observedAttributes() {
        return ['data'];
    }

    attributeChangedCallback(name, oldValue, newValue) {
        if (name === 'data') {
            this.renderGauge();
        }
    }
}

customElements.define('jscharting-gauge', JSChartingGauge);