import { LitElement, html, css } from "lit";

class AppBar extends LitElement{
   static properties = {
    user: { type: Array },
  };
  createRenderRoot() {
    return this;
  }
  
  constructor(){
    super();
    this.user = {
      name: {
        first: "Guest",
      },
    };
  }

  connectedCallback() {
    super.connectedCallback();
  }

  render(){
    return html`
      <nav class="navbar navbar-expand-md navbar-dark bg-primary">
        <div class="container">
          <span class="navbar-brand fw-bold">${this.user?.name?.first}</span>
 
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
 
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav ms-auto mb-2 mb-md-0 d-flex align-items-center gap-3">
              <li class="nav-item">
                <a class="nav-link" href="#card=about">About</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#card-profile">Profile</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#card-contact">Contact</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>      
    `;
  }
}

customElements.define("app-bar", AppBar);