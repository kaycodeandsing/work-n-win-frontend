export default function DonationsMoney() {
    return (
      <div>
        <h1>Money Donation Form</h1>
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
               
        <br></br>
        <div>
            <h3 className="donation-onetime">One-time</h3>
            <button>$25</button><button>$50</button><button>$100</button>
            <br></br>
            <button>$ Custom Amount</button>
        </div>
        <br></br>
        <div>
        <button className="moneydonation-next">Next </button>
        </div>
      
      </div>

    );
  }