import { LitElement,html } from "lit";

class CardContact extends LitElement{
  createRenderRoot(){
    return this;
  }
  static properties = {
    user: {type: Object},
  }

  constructor(){
    super();
    this.user ={
      cell:"",
      email: "",
      phone: "",
    }
  }

  connectedCallback(){
    super.connectedCallback();
  }

  render(){
    const cell = `${this.user?.cell}`;
    const email = `${this.user?.email}`;
    const phone = `${this.user?.phone}`;
    return html`
      <div class="card p-3" id="card-contact">
        <h5 class="card-title mb-3">Contact</h5>
        ${this.user === 0
          ? html `<p class="card-text text-muted">No users available.</p>`
          : html `
            <div class="row">
              <div class="row py-1">
                <div class="col-xl-4 col-lg-12 fw-bold">Cell</div>
                <div class="col-xl-8 col-lg-12">${cell}</div>
              </div>
              <div class="row py-1">
                <div class="col-xl-4 col-lg-12 fw-bold">Phone</div>
                <div class="col-xl-8 col-lg-12">${phone}</div>
              </div>
              <div class="row py-1">
                <div class="col-xl-4 col-lg-12 fw-bold">Email</div>
                <div class="col-xl-8 col-lg-12 text-wrap">
                  ${email || `<span class="placeholder placeholder-glow col-6"></span>`}
                </div>
              </div>
            </div>

          `
        }
      </div>
    `;
  }
}

customElements.define('card-contact', CardContact)