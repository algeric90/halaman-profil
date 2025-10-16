import { LitElement, html } from "lit";

class CardProfile extends LitElement {
  static properties = {
    user: { type: Object },
  };

  createRenderRoot () {
    return this;
  }

  constructor() {
    super();
    this.user = {
      name: {
        first: "",
        last: "",
      },
      gender: "",
      dob: {
        date: "",
      },
      location: {
        city: "",
        country: "",
        postcode: "",
        state: "",
        street: {
          name: "",
          number: "",
        },
      },
      nat: "",
    };
  }

  connectedCallback() {
    super.connectedCallback();
  }

  _formatedDate(date){
    const options = {
      year: "numeric",
      month: "long",
      day: "numeric"
    }
    return new Date(date).toLocaleDateString("en-EN", options)
  }
  render() {
    const name = `${this.user?.name?.first}  ${this.user?.name?.last}`;
    const gender = `${this.user?.gender}`;
    const dob =`${this.user?.dob?.date}`;
    const address = `${this.user?.location?.street?.name} ${this.user?.location?.street?.number}, ${this.user?.location?.city}, ${this.user?.location?.state}, ${this.user?.location?.postcode}, ${this.user?.location?.country}`;
    const nat = `${this.user?.nat}`;

    return html`   
        <div class="card p-3" id="card-profile">
          <h5 class="card-title mb-3">Profile</h5>
          ${this.user === 0
            ? html `<p class="card-text text-muted">No users available.</p>`
            : html `
              <div class="row">
                <div class="row py-2">
                  <div class="col-xl-4 col-md-12 fw-bold">Name</div>
                  <div class="col-xl-8 col-md-12">${name}</div>
                </div>

                <div class="row py-2">
                  <div class="col-xl-4 col-md-12 fw-bold">Gender</div>
                  <div class="col-xl-8 col-md-12">${gender}</div>
                </div>

                <div class="row py-2">
                  <div class="col-xl-4 col-md-12 fw-bold">Date of Birth</div>
                  <div class="col-xl-8 col-md-12">${this._formatedDate(dob)}</div>
                </div>

                <div class="row py-2">
                  <div class="col-xl-4 col-md-12 fw-bold">Address</div>
                  <div class="col-xl-8 col-md-12">${address}</div>
                </div>

                <div class="row py-2">
                  <div class="col-xl-4 col-md-12 fw-bold">Nationality</div>
                  <div class="col-xl-8 col-md-12">${nat}</div>
                </div>
              </div>
            `
          }
        </div}
       
      
    `;
  }
}
customElements.define('card-profile', CardProfile);