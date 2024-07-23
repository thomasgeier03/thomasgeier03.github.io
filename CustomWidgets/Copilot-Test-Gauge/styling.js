function applyCustomStyling(shadowRoot) {
  const style = document.createElement('style');
  style.textContent = `
    .gauge-container {
      display: flex;
      justify-content: center;
      align-items: center;
      width: 100%;
      height: 100%;
      background-color: #f0f0f0;
    }
    .gauge-placeholder {
      text-align: center;
      padding: 10px;
      border: 1px solid #ccc;
      border-radius: 5px;
      background-color: #fff;
    }
    .gauge-placeholder-title {
      font-size: 24px;
      font-weight: bold;
      color: #333;
    }
    .gauge-placeholder-value {
      font-size: 48px;
      font-weight: bold;
      color: #007bff;
    }
  `;
  shadowRoot.appendChild("custom-gauge-widget-styling", style);
}