import React, { Component } from 'react';
import githubIcon from "./githubIcon.svg";
import twitterIcon from "./twitterIcon.svg";
import "./about.css";

export class AboutUs extends Component {
render() {
return (
<div className="about-us-section container">
<h1 className="text-center mb-4">About</h1>
<div className="row">
<div className="col-12 col-md-6 offset-md-3">
<div className="card p-4">
<h2 className="mb-3">Founder: Akshay Jagiasi</h2>
<div className="contacts-section d-flex flex-column align-items-start mt-4">
<a href="https://github.com/Akshay-Jagiasi" className="contact-link mb-4 d-flex align-items-center">
<img src={githubIcon} className="icon mr-2" style={{ width: '32px', height: '32px' }} alt="GitHub logo" />
<span>GitHub</span>
</a>
<a href="https://twitter.com/akshay_jagiasi" className="contact-link mb-4 d-flex align-items-center">
<img src={twitterIcon} className="icon mr-2" style={{ width: '32px', height: '32px' }} alt="Twitter logo" />
<span>Twitter</span>
</a>
</div>
<div className="email-section mt-4">
<h4>Gmail:</h4>
<a href="mailto:akshayjagiasi1804@gmail.com" className="contact-link">akshayjagiasi1804@gmail.com</a>
</div>
</div>
</div>
</div>
</div>
);
}
}

export default AboutUs;