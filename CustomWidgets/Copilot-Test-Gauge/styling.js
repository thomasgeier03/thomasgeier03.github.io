function applyCustomStyling(shadowRoot) {
    const style = document.createElement('style');
    style.textContent = `
      .gauge-container {
        display: flex;
        justify-content: space-around;
      }
      .gauge-placeholder {
        text-align: center;
      }
      .gauge-placeholder-title {
        font-size: 20px;
      }
      .gauge-placeholder-value {
        font-size: 40px;
      }
    `;
    shadowRoot.appendChild(style);
  }