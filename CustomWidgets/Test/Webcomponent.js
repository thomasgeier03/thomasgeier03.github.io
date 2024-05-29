(function () {
    let tmpl = document.createElement('template');
    tmpl.innerHTML = 
    `<button type="button" id="myBtn"></button>` ; 
  
    class PerformanceHelp extends HTMLElement {
        constructor() {
            super();
            this._shadowRoot = this.attachShadow({mode: "open"});
            this._shadowRoot.appendChild(tmpl.content.cloneNode(true));
            this._button = this._shadowRoot.querySelector("#myBtn");
            this._button.addEventListener("click", event => {
                var event = new Event("onClick");        
                this.dispatchEvent(event);
            });
        }

        static get observedAttributes() {
            return ['button-text'];
        }

        attributeChangedCallback(name, oldValue, newValue) {
            switch(name) {
                case 'button-text':
                    this._button.textContent = newValue;
                    break;
            }
        }
    }

    customElements.define('custom-button', PerformanceHelp);
})();