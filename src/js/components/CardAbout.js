import { LitElement, html } from "lit";

class CardAbout extends LitElement {
  static properties = {
    user: { type: Object },
  };

  createRenderRoot() {
    return this;
  }

  constructor() {
    super();
    this.user = {
      name: {
        first: "",
        last: "",
      },
      location: {
        city: "",
        state: "",
        country: "",
      },
    };
  }

  connectedCallback() {
    super.connectedCallback();
  }

  render() {
    const name = `${this.user?.name?.first} ${this.user?.name?.last}`;
    const loc = `${this.user?.location?.city} ${this.user?.location?.state} ${this.user?.location?.country}`;
    return html`
      <div class="card p-3 h-100" id="card-about">
        <h5 class="card-title mb-3">About</h5>
        ${this.user === 0
          ? html `<p class="card-text fs-6 text-muted">No users available.</p>`
          : html `
            <p class="card-text fs-6">
              Hello, my name is ${name}, a software engineer specializing in modern web development and interactive user interfaces.
              I curently live in ${loc},
              where I’m passionate about crafting elegant, user-friendly digital experiences.
            </p>
          `
        }
      </div>
    `;
  }
}
customElements.define('card-about', CardAbout);