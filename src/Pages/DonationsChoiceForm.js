export default function DonationsChoiceForm() {
    return (
      <div>
        <h1>Donation</h1>
        <p>Donate money or business services to fellow work-n-win taskers</p>
        <h2>Choose Donation Type...</h2>
            <div >
                <p className="donation-money">Money <button className="donation-pickone">pick one</button>Business Services<p></p>

                </p>
                <br></br>
                <button className="donation-submit">SUBMIT</button>
            </div>
      
      </div>

    );
  }
  