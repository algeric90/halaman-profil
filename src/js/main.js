import { LitElement, html } from 'lit';
import fetchData from "./data/data.js";
import '../scss/main.scss';
import './components/index.js';
import * as bootstrap from 'bootstrap';

class App extends LitElement {
  createRenderRoot() {
    return this;
  }

  constructor() {
    super();
    this.user = [];
  }

  
  async connectedCallback() {
    super.connectedCallback();
    window.addEventListener('resize', this._adjustLayout);
    this.user = await fetchData(); 
    console.log(this.user);
    this.requestUpdate(); 
  }
  disconnectedCallback() {
    window.removeEventListener('resize', this._adjustLayout);
    super.disconnectedCallback();
  }

  firstUpdated() {
    this._adjustLayout();
  }
  
  _adjustLayout() {
    const header = document.querySelector('header');
    const main = document.querySelector('main');

    if (header && main) {
      main.style.minHeight = `calc(100vh -${header.clientHeight}px)`;
    }
  }
  
  render() {    
    return html`
      <header>
        <app-bar .user="${this.user}"></app-bar>
      </header>
      <main class="container py-3 py-md-5" .user="${this.user}">
        <div class="card p-0 shadow" id="card-container">
          <div class="card-header position-relative">
            <img 
              class="img-fluid rounded-circle position-absolute top-100 start-50 translate-middle" 
              src="${this.user?.picture?.large}" 
              alt="foto profil ${this.user?.name?.first}" 
            />
          </div>
          <div class="card-body container p-3 p-md-5">
            <div class="row g-2 g-md-3">
              <card-about class="col-12  col-lg-8 order-lg-1" .user="${this.user}"></card-about>
              <div class="col-12 col-md-12  col-lg-4 d-flex flex-column flex-md-row flex-lg-column gap-2 gap-md-3">
                <card-profile class="col-12 col-md-6 col-lg-12  order-lg-0" .user="${this.user}"></card-profile>
                <card-contact class="col-12 col-md-6 col-lg-12  order-lg-2" .user="${this.user}"></card-contact>
              </div>
             </div>
          </div>
        </div>
      </main>
    `;
  }
} 
customElements.define('app-root', App);