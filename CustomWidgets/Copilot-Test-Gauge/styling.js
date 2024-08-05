function applyCustomStyling(shadowRoot) {
  const style = document.createElement('style');
  style.textContent = `
      .gauge-container {
          position: relative;
          width: 100%;
          height: 100%;
          background-color: #f0f0f0;
          border-radius: 50%;
          display: flex;
          justify-content: center;
          align-items: center;
      }
      .gauge-arrow {
          position: absolute;
          width: 0;
          height: 0;
          border-left: 10px solid transparent;
          border-right: 10px solid transparent;
          border-bottom: 50px solid;
          transform-origin: bottom center;
      }
  `;
  shadowRoot.appendChild(style, "averagegauge-styling");
}