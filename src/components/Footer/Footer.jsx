import React from 'react';
import '../Footer/Footer.scss';

const Footer = () => {
  return (
    <div className="footer">
      <div className="footerLeft">
        <div className="trademark">
          <h1>TMA</h1>
          <span>Get out there & discover your laptop!</span>
          <span>Copyright 2019 TMA inc. Term & Privacy</span>
        </div>
      </div>
      <div className="footerRight">
        <div className="tmaInfo">
          <h4>More on The Company</h4>
          <span>About TMA</span>
          <span>Contributions & Writers</span>
          <span>Write For Us</span>
          <span>Contact Us</span>
          <span>Privacy Policy</span>
        </div>
        <div className="tmaInfo">
          <h4>More on TMA</h4>
          <span>The Term</span>
          <span>Jobs</span>
          <span>Press</span>
        </div>
      </div>
    </div>
  );
};

export default Footer;
