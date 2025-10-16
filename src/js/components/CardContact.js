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
            <table class="table">
              <tbody>
                <tr>
                  <th scope="row">Cell</th>
                  <td class="fs-6">${cell}</td>
                </tr>
                <tr>
                  <th scope="row">Phone</th>
                  <td class="fs-6">${phone}</td>
                </tr>
                <tr>
                  <th scope="row">Email</th>
                  <td class="fs-6 text-wrap">${email || `<span class="placeholder placeholder-glow col-6"></span>`}</td>
                </tr>
              </tbody>
            </table>
          `
        }
      </div>
    `;
  }
}

customElements.define('card-contact', CardContact)