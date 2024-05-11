import React from 'react';

function ContactPage() {
  return (
    <div>
      {/* <div className="badge" style={{ paddingLeft: '30px', paddingTop: '55px' }}>
        <span className="badge badge-pill badge-success">Contact Us</span>
      </div> */}
      <div style={{ display: 'flex', justifyContent: 'center', maxWidth: '1286px'}}>
        <div style={{ flex: '0 0 50%', paddingRight: '30px' }}>
          <h2 style={{ fontSize: '35px', fontWeight: 'bold'}}>Let's Stay Connected</h2>
          <p style={{ marginTop: '28px' }}>It's never been easier to get in touch with Flex.
            Call us, use our live chat widget or email and we'll get back to you as soon as possible!</p>
        </div>
        <div style={{ flex: '0 0 50%'}} className='mt-6'>
          <button style={{ width: '100%', padding: '5px', backgroundColor: 'transparent', border: '1px solid #2A3342', color: '#2A3342', borderRadius: '4px', marginLeft: '15px' }}>About Us</button>
        </div>
      </div>
      <div style={{ display: 'flex', justifyContent: 'center', maxWidth: '1286px', paddingTop: '50px' }}>
        <div style={{ flex: '0 0 50%', paddingRight: '15px' }}>
          <div style={{ marginBottom: '20px' }}>
            <div style={{ width: '100%', marginBottom: '15px' , border: '1px solid #e9ecef'}}>
              <div style={{ width: '100%', display: 'flex', alignItems: 'center' }}>
                <div style={{ paddingLeft: '10px', fontWeight: "bold"}}>Email : </div>
              </div>
              <div style={{ paddingLeft: '20px' }}>Aahaarfoodhelp2023@gmail.com</div>
            </div>
            <div style={{ width: '100%', marginBottom: '15px'  , border: '1px solid #e9ecef'}}>
              <div style={{ width: '100%', display: 'flex'}}>
                <div style={{ paddingLeft: '10px' , fontWeight: "bold"}}>Phone : </div>
              </div>
              <div style={{ paddingLeft: '20px' }}>Aahaarfoodhelp2023@gmail.com</div>
            </div>
          </div>
          <div>
            <div style={{ width: '100%', marginBottom: '15px'  , border: '1px solid #e9ecef'}}>
              <div style={{ width: '100%', display: 'flex', alignItems: 'center' }}>
                <div style={{ paddingLeft: '10px', fontWeight: "bold" }}>Office : </div>
              </div>
              <div style={{ paddingLeft: '20px' }}>1686, Geraldine Lane,<br /> New York, NY 10013</div>
            </div>
            <div style={{ width: '100%' , border: '1px solid #e9ecef' }}>
              <div style={{ width: '100%', display: 'flex', alignItems: 'center' }}>
                <div style={{ paddingLeft: '10px', fontWeight: "bold" }}>Socials : </div>
              </div>
              <div style={{ display: 'flex', paddingLeft: '20px' }}>
                <img src="/images/Instagram.svg" alt="insta-img" style={{ padding: '11px' }} />
                <img src="/images/Facebook.svg" alt="insta-img" style={{ padding: '11px' }} />
                <img src="/images/Twitter.svg" alt="insta-img" style={{ padding: '11px' }} />
                <img src="/images/post linkedin.png" alt="insta-img" style={{ padding: '11px' }} />
              </div>
            </div>
          </div>
        </div>
        <div style={{ flex: '0 0 50%', paddingLeft: '15px' }}>
          <form className='border rounded-md'>
            <div className="form-group ml-8 mt-4">
              <label>Email address</label>
              <input type="email" className="border-2 w-3/4 ml-3" id="exampleFormControlInput1" placeholder="name@example.com" />
            </div>
            <div className="form-group ml-8">
              <label>Message : </label>
              <textarea className="border-2 w-[94%] mt-4 mr-4" rows="4"></textarea>
            </div>
            <button type="submit" className="m-8 bg-gradient-to-r from-[#17D54D] to-[#076F32]" style={{ width: '90%', height: "40px", borderRadius: "4px", color: "white"}}>Send</button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default ContactPage;
