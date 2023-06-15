var getScriptPromisify = (src) => {
  return new Promise((resolve) => {
    $.getScript(src, resolve);
  });
};

(function () {
  const parseMetadata = metadata => {
    const { dimensions: dimensionsMap, mainStructureMembers: measuresMap } = metadata;
    const dimensions = [];
    for (const key in dimensionsMap) {
      const dimension = dimensionsMap[key];
      dimensions.push({ key, ...dimension });
    }
    const measures = [];
    for (const key in measuresMap) {
      const measure = measuresMap[key];
      measures.push({ key, ...measure });
    }
    return { dimensions, measures, dimensionsMap, measuresMap };
  };

  const template = document.createElement('template');
  template.innerHTML = `
  <style>
  </style>
  <div id="root" style="width: 100%; height: 100%;"></div>
  `;

  class GrogressGauge extends HTMLElement {
    constructor () {
      super();

      this._shadowRoot = this.attachShadow({ mode: 'open' });
      this._shadowRoot.appendChild(template.content.cloneNode(true));

      this._root = this._shadowRoot.getElementById('root');

      this._props = {};

      this._echart = undefined;
      this.render();
    }

    onCustomWidgetResize (width, height) {
      this.render();
    }

    set myDataSource (dataBinding) {
      this._myDataSource = dataBinding;
      this.render();
    }

    async render () {
      await getScriptPromisify("https://cdn.staticfile.org/echarts/5.3.0/echarts.min.js");

      this.dispose();

      if (!this._myDataSource || this._myDataSource.state !== 'success') {
        return;
      }

      const { data, metadata } = this._myDataSource;
      const { dimensions, measures } = parseMetadata(metadata);

      this._echart = echarts.init(this._root, 'wight');
      const option = {
        series: [
          {
            type: 'gauge',
            startAngle: 180,
            endAngle: 0,
            min: 0,
            max: 100,
            splitNumber: 10,
            itemStyle: {
              color: '#008FD3',
              shadowColor: 'rgba(0,0,0,0)',
              shadowBlur: 0,
              shadowOffsetX: 0,
              shadowOffsetY: 0
            },
            progress: {
              show: true,
              roundCap: true,
              width: 18
            },
            axisLine: {
              roundCap: true,
              lineStyle: {
                width: 18
              }
            },
            axisTick: {
              splitNumber: 2,
              lineStyle: {
                width: 2,
                color: '#999'
              }
            },
            splitLine: {
              length: 6,
              lineStyle: {
                width: 4,
                color: '#999'
              }
            },
            axisLabel: {
              distance: 30,
              color: '#999',
              fontSize: 16
            },
            data: [{ value: 50 }]
          }
        ]
      };

      this._echart.setOption(option);
    }

    dispose () {
      if (this._echart) {
        this._echart.dispose();
        this._echart = undefined;
      }
    }
  }

  customElements.define('progress-gauge', GrogressGauge);
})();
