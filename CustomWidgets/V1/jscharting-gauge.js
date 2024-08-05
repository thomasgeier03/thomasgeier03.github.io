// CONSTANTs
var SERIESNAME = "mainSeries";

var shadowRoot;

var gaugeLoader = document.createElement("div");
gaugeLoader.id = "gaugeLoader-external";
gaugeLoader.classList.add("gaugeLoader-external");
gaugeLoader.innerHTML = `<style type="text/css"> .loader-text{font-family: Arial, sans-serif; font-size: 1.5em; font-weight: bold; line-height: 20px; text-align: center; color: #47789f; background-color: #ffffff; padding: 0.6em; margin: 0;}.gaugeLoader-external{z-index: 9999; display: table; position: absolute; top: 0; left: 0; height: 100%; width: 100%; background-color: #ffffff;}.gaugeLoader-middle{display: table-cell; vertical-align: middle;}</style><div id="gaugeLoader" class="gaugeLoader-middle" style="width: 100%; height: 200px"> <div class="inner" style="width: 100%; height: auto"> <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" style="margin: auto; display: block" width="161px" height="161px" viewBox="0 0 100 100" preserveAspectRatio="xMidYMid" > <g transform="translate(50 50)"> <g transform="scale(1)"> <g transform="translate(-50 -50)"> <path fill="#85a2b6" d="M15.35898384862245 70 A40 40 0 0 1 70 15.358983848622458 L60.5 31.813466520526788 A21 21 0 0 0 31.813466520526788 60.5 Z" stroke="#85a2b6" stroke-width="2" ></path> <path fill="#bbcedd" d="M84.64101615137756 70 A40 40 0 0 0 70 15.358983848622458 L60.5 31.813466520526788 A21 21 0 0 1 68.18653347947321 60.5 Z" stroke="#bbcedd" stroke-width="2" ></path> <circle cx="50" cy="50" r="12" fill="#4877a0"></circle> <line x1="50" y1="50" x2="15" y2="50" stroke-linecap="round" stroke="#4877a0" stroke-width="6" > <animateTransform attributeName="transform" type="rotate" repeatCount="indefinite" dur="0.9900990099009901s" keyTimes="0;0.10;0.25;0.5;0.60;0.75;1" values="40 50 50; 50 50 50; 40 50 50; 140 50 50; 130 50 50; 140 50 50; 40 50 50" ></animateTransform> </line> </g> </g> </g> </svg> <h3 class="loader-text">Gauge is loading...</h3> </div></div>`;

var getScriptPromisify = (src) => {
	return new Promise((resolve) => {
		$.getScript(src, resolve);
	});
};

var setBusy = (busy) => {
	const chart = shadowRoot.getElementById("chartDiv"),
		loader = shadowRoot.getElementById("gaugeLoader-external");;

	if (busy) {
		// chart.style.display = "none";
		if (!loader) {
			shadowRoot.appendChild(gaugeLoader.cloneNode(true));
		}
	}
	else {
		// chart.style.display = null;
		loader?.remove();
	}
}

class LegendEntry {
	constructor(name, description) {
		this.name = name;
		this.description = description;
		this.value = (a) => {
			return `${parseFloat(a.marker.value()[1].toFixed(2)).toLocaleString() || 0.00}%`;
		}
	}
}

class Marker {
	constructor(label, value, color = "#5FB446") {
		/*
			{
				label: "Days",
				value: [0, 78.2],
				color: "#5FB446",
				legendEntry: {
					name: "Days",
					description: "Days",
					value: (a) => {
						return `${a.marker.value()[1]}%`;
					},
				},
			},
		*/
		this.label = label;
		this.value = [0, value];
		this.color = color;
		this.legendEntry = new LegendEntry(label, label);
	}
}

class SeriesPoint {
	constructor(x, y, name, color, series = SERIESNAME) {
		/*
			{
				series: "mainSeries",
				x: "Orders",
				y: 77.2,
				name: "Orders",
				color: "#6D7F95",
				legendEntry: {
					value: (a) => {
						return `${a.y}%`;
					},
				},
			}
		*/
		this.series = series;
		this.x = x;
		this.y = y;
		this.name = name;
		this.color = color;
		this.legendEntry = {
			value: (a) => {
				return `${parseFloat(a.y.toFixed(2)).toLocaleString() || "0.00"}%`;
			}
		}
	}
}

class FormattedDataFromDS {
	constructor(key, label, rawValue, formattedValue) {
		this.key = key;
		this.label = label;
		this.rawValue = rawValue;
		this.formattedValue = formattedValue;
	}
}

(function () {
	const prepared = document.createElement("template");
	prepared.innerHTML = `<div id="chartDiv" style="min-height: 450px !important; height: 50vh; margin: 0px auto;"></div>`;
	class JSChartingGauge extends HTMLElement {
		constructor() {
			super();

			this._shadowRoot = this.attachShadow({ mode: "open" });
			shadowRoot = this._shadowRoot;

			this._shadowRoot.appendChild(prepared.content.cloneNode(true));

			setBusy(true);

			this._root = this._shadowRoot.getElementById("root");

			// Contenitore delle proprietà locali del widget
			this._export_settings = {};
			this._export_settings.title = "";

			this._firstTimeLoad = true;

			this.render();
		}

		onCustomWidgetResize(width, height) {
			this._chart?.redraw();
		}

		onCustomWidgetAfterUpdate() {
			if (!this._firstTimeLoad) {
				setBusy(true);
				this.render();
			}
			else {
				console.log("First time")
			}
		}

		connectedCallback() {
			this._firstTimeLoad = false;
		}

		//proprietà del widget soggette a modifica di valore
		static get observedAttributes() {
			return [
				"title"
			];
		}

		attributeChangedCallback(name, oldValue, newValue) {
			if (oldValue != newValue) {
				this[name] = newValue;
			}
		}

		set myDataSource(dataBinding) {
			this._myDataSource = dataBinding;
			this.render();
		}

		_populateChartData(data, options) {
			const marker = data.splice(0, 1)[0], // Il primo elemento è il marked del Gauge		
				{ label, rawValue } = marker;

			// Inserisco il marker (percentuale numero giorni nel mese)
			options.yAxis.markers = [
				new Marker(label, rawValue)
			];

			// Inserisco i dati delle misure
			const colors = ["#6D7F95", "#07294C"];
			for (let index in data) {
				const item = data[index],
					{ label, rawValue } = item;
				options.series[0].points.push(
					new SeriesPoint(label, rawValue, label, colors[index])
				);
			}
		}

		getDataSource(){
			return this.dataBindings.getDataBinding('myDataSource').getDataSource();
		}

		getDataBinding(){
			return this.dataBindings.getDataBinding('myDataSource');
		}

		getDimensions(){
			return this.dataBindings.getDataBinding('myDataSource').getDataSource().getDimensions();
		}

		getMeasures(){
			return this.dataBindings.getDataBinding('myDataSource').getDataSource().getMeasures();
		}

		addMeasure(){
			this.dataBindings.getDataBinding('myDataSource').addMemberToFeed('measures', measureId);
		}

		addDimension(){
			this.dataBindings.getDataBinding('myDataSource').addDimensionToFeed('dimensions', dimensionId);
		}

		removeAllMeasures(){
			this.dataBindings.getDataBinding('myDataSource').removeAllMembers('measures');
		}

		removeAllDimensions(){
			this.dataBindings.getDataBinding('myDataSource').removeAllDimensions('dimensions');
		}

		async render() {
			if (!this._libLoaded) {
				// Carico le librerie
				await getScriptPromisify(
					//"/jscharting.js"
					 "https://code.jscharting.com/latest/jscharting.js"
					);
					await getScriptPromisify(
					//"/types.js"
					 "https://code.jscharting.com/latest/modules/types.js"
					);
					await getScriptPromisify(
					//"/debug.js"
					 "https://code.jscharting.com/latest/modules/debug.js"
				);
				this._libLoaded = true;
			}

			if (!this._myDataSource || this._myDataSource.state !== "success") {
				return;
			}

			const { metadata } = this._myDataSource;
			const { measures } = parseMetadata(metadata);
			const dataForChart = []
			this._myDataSource.data.map((data) => {
				for (let measure of measures) {
					const { key, label } = measure,
						rawValue = data[key].raw,
						formattedValue = rawValue?.toFixed(2) || "0.00";
					dataForChart.push(new FormattedDataFromDS(key, label, rawValue, formattedValue));
				}
				return data;
			});

			const options = {
				// debug: true,
				title: {
					position: 'center',
					padding: 7,
					boxVisible: false,
					label: {
						text: this.title,
						style: {
							color: '#000',
							fontSize: '20px',
							fontStyle: 'normal',
							fontWeight: 'bold'
						},
						align: 'right'
					}
				},
				legend: {
					visible: true,
					position: "bottom"
				},
				xAxis: {
					defaultTick: {
						padding: 20,
						gridLine: { width: 1, dashStyle: "dash" },

						/*Defining label will make it appear.*/
						label: {
							text: ""
						},
					},
					scale_invert: true,
					spacingPercentage: 0.3,
				},
				yAxis: {
					scale: {
						beginAtZero: true,
					},

					// ANCHOR Questo è l'indicatore della percentuale di giorni
					markers: [
						new Marker("Days", 78.2, "#5FB446")
					],

					/*If defined, breaks will be used at tick positions.*/
					line_breaks: {},
				},
				defaultSeries: {
					type: "gauge column",
					defaultPoint_tooltip: "<b>%name</b> {%yRange:n1}%",
					angle: { start: -180, sweep: 180 },
					shape_label: {
						text: "%name",
						style_fontSize: 24,
						verticalAlign: "top",
					},

					/*Default point marker options. Markers are not visible by default on columns.*/
					defaultPoint_marker: {
						fill: "#00c45c",
						type: { path: "M 0 0 L 3 5  0 10 Z" },
						rotate: "auto",
						size: 28,
					},
				},
				series: [
					{
						id: SERIESNAME,
						palette: 'fiveColor1',
						points: [
							// ANCHOR queste sono le linee che popolano il gauge
							// {
							// 	series: "mainSeries",
							// 	x: "Orders",
							// 	y: 77.2,
							// 	name: "Orders",
							// 	color: "#6D7F95",
							// 	legendEntry: {
							// 		value: (a) => {
							// 			return `${a.y}%`;
							// 		},
							// 	},
							// },
							// {
							// 	series: "mainSeries",
							// 	x: "Invoiced",
							// 	y: 55.8,
							// 	name: "Invoiced",
							// 	color: "#07294C",
							// 	legendEntry: {
							// 		value: (a) => {
							// 			return `${a.y}%`;
							// 		},
							// 	},
							// },
						],
					},
				],
				events: {/* Populated below */ }
			};

			var that = this;

			// Metto i dati dentro al chart
			this._populateChartData(dataForChart, options);

			// Evento lanciato quando il caricamento del Chart è terminato
			options.events.load = function () {
				console.log("Chart Loaded!");
				setBusy(false);
			}.bind(this);
			options.events.redraw = function () {
				console.log("Chart Redraw!");
			}.bind(this);

			const chartDivElementInShadowRoot = this._shadowRoot.getElementById("chartDiv");
			this._chart = JSC.chart(
				chartDivElementInShadowRoot,
				options
			);
		}
	}

	customElements.define("it-presales-sac-cw-jscharting-gauge", JSChartingGauge);

	const parseMetadata = metadata => {
		const { dimensions: dimensionsMap, mainStructureMembers: measuresMap } = metadata
		const dimensions = []
		for (const key in dimensionsMap) {
			const dimension = dimensionsMap[key]
			dimension.label = dimension.description;
			delete dimension.description;
			dimensions.push({ key, ...dimension })
		}
		const measures = []
		for (const key in measuresMap) {
			const measure = measuresMap[key]
			measures.push({ key, ...measure })
		}
		return { dimensions, measures, dimensionsMap, measuresMap }
	}
})();
