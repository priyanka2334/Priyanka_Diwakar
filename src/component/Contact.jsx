import React from 'react';
import './contact.css';

const Contact = () => {
  return (
    <section className="contact" id="contact">
      <div className="container">
        <div className="heading text-center">
          <h2>Contact <span> Us </span></h2>
          <p>Have questions or feedback? Reach out to us through the form below,
            <br /> and we’ll get back to you promptly.</p>
        </div>
        <div className="row">
          <div className="col-md-5">
            <div className="title">
              <h3>Contact detail</h3>
              <p>You can reach me via email or call me. I'm here to assist you!</p>
            </div>
            <div className="content">
              <div className="info">
                <i className="fas fa-mobile-alt"></i>
                <h4 className="d-inline-block">PHONE :
                  <span>+91 8470800542</span></h4>
              </div>
              <div className="info">
                <i className="far fa-envelope"></i>
                <h4 className="d-inline-block">EMAIL :
                  <span>priyankadiwakar2024@gmail.com</span></h4>
              </div>
              <div className="info">
                <i className="fas fa-map-marker-alt"></i>
                <h4 className="d-inline-block">ADDRESS :
                  <span> Kanpur (UP)</span></h4>
              </div>
            </div>
          </div>
          <div className="col-md-7">
            <form>
              <div className="row">
                <div className="col-sm-6">
                  <input type="text" className="form-control" placeholder="Name" />
                </div>
                <div className="col-sm-6">
                  <input type="email" className="form-control" placeholder="Email" />
                </div>
                <div className="col-sm-12">
                  <input type="text" className="form-control" placeholder="Subject" />
                </div>
              </div>
              <div className="form-group">
                <textarea className="form-control" rows="5" id="comment" placeholder="Message"></textarea>
              </div>
              <button className="btn btn-block" type="submit">Send Now!</button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;