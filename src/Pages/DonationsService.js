export default function DonationsService() {
    return (
      <div>
        <h1>Service Donation Form</h1>
        <label htmlFor="name">Full name/Company name</label>
        <input
          id="name"
          type="text"
          required
          value=""
          placeholder="Enter Name here"
          onChange=""
        />
        <br></br>
        <label htmlFor="email">E-mail</label>
        <input
          id="email"
          type="text"
          required
          value=""
          placeholder="Enter Email Address"
          onChange=""
        />
        <br></br>
        <label htmlFor="phone">Phone Number</label>
        <input
          id="phone"
          type="number"
          required
          value=""
          placeholder="555-555-555"
          onChange=""
        />
        <br></br>
        <label htmlFor="taxEin">Sales tax/EIN</label>
        <input
          id="taxEin"
          type="number"
          value=""
          placeholder="Enter tax/EIN"
          onChange=""
        />
        <br></br>
        <label htmlFor="dba">DBA Number</label>
        <input
          id="dba"
          type="number"
          value=""
          placeholder="Enter DBA number here"
          onChange=""
        />
        <br></br>
               
        <br></br>
        <div>
        <label htmlFor="BusinessAddress">Business Address</label>
        <input
          id="businessAddress"
          type="text"
          required
          value=""
          placeholder="Enter business address here"
          onChange=""
        />
        <br></br>
        <label htmlFor="service">Services you provide</label>
        <input
          id="service"
          type="text"
          required
          value=""
          placeholder="Enter the service you provide"
          onChange=""
        />
        <br></br>
        </div>
        <br></br>
        <div>
        <p><input type="checkbox" id="checkId"/>Check box to have your 
company listed on our "Helpful Companies" page</p>
   
        </div>
        <br></br>
        <br></br>
        <div>
        <button className="servicedonation-submit">SUBMIT </button>
        </div>
      
      </div>

    );
  }