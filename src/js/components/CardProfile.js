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
              <table class="table">
                <tbody>
                  <tr>
                    <th scope="row">Name</th>
                    <td class="fs-6">${name}</td>
                  </tr>
                  <tr>
                    <th scope="row">Gender</th>
                    <td class="fs-6">${gender}</td>
                  </tr>
                <tr>
                    <th scope="row">Date of Birth</th>
                    <td class="fs-6">${this._formatedDate(dob)}</td>
                  </tr>
                  <tr>
                    <th scope="row">Address</th>
                    <td class="fs-6">${address}</td>
                  </tr>
                  <tr>
                    <th scope="row">Nationality</th>
                    <td class="fs-6">${nat}</td>
                  </tr>
                </tbody>
              </table>`
          }
        </div}
       
      
    `;
  }
}
customElements.define('card-profile', CardProfile);