import React from "react";
import "./Contact.css"; // Import file CSS
import "bootstrap/dist/css/bootstrap.min.css"; // Import Bootstrap
import { useNavigate } from "react-router-dom";



const Contact = () => {
  const navigate = useNavigate();
  return (
    <div className="contact-page">
      {/* Section Header */}
      <div className="text-center mb-5">
        <h1 className="contact-title">Contact Us</h1>
        <nav>
          <a href="/" className="contact-nav">
            Home
          </a>{" "}
          / <span>Contact</span>
        </nav>
      </div>

      <div className="container">
        <div className="row">
          {/* Contact Form */}
          <div className="col-md-6 mb-4">
            <div className="contact-form">
              <h2>hubungi Kami:</h2>
              <form>
                <div className="form-group">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Nama..."
                  />
                </div>
                <div className="form-group">
                  <input
                    type="email"
                    className="form-control"
                    placeholder="Email..."
                  />
                </div>
                <div className="form-group">
                  <textarea
                    className="form-control"
                    rows="4"
                    placeholder="Pesan..."
                  ></textarea>
                </div>
                <button type="submit" className="btn btn-primary w-100">
                  Kirim
                </button>
              </form>
            </div>
          </div>

          {/* Contact Info */}
          <div className="col-md-6">
            <div className="contact-info">
              <p>
                Disini kami memberikan informasi kontak yang bisa kamu hubungi:
              </p>
              <div className="info-item">
                <i className="bi bi-telephone"></i>
                <p>
                  <strong>Nomor Telepon:</strong> +6278-9449-0079
                </p>
              </div>
              <div className="info-item">
                <i className="bi bi-envelope"></i>
                <p>
                  <strong>Alamat Email:</strong> Rumapibisa@gmail.com
                </p>
              </div>
              <div className="info-item">
                <i className="bi bi-whatsapp"></i>
                <p>
                  <strong>Whatsapp:</strong> 0878-9449-0079
                </p>
              </div>
              <div className="info-item">
                <i className="bi bi-geo-alt"></i>
                <p>
                  <strong>Alamat:</strong> Institut Teknologi Del
                </p>
              </div>
            </div>
            <div className="map mt-4">
              <iframe
                title="Google Map"
                src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d22394.514971166434!2d99.15456209131467!3d2.384460090658448!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sid!4v1732241069387!5m2!1sen!2sid"
                width="100%"
                height="250"
                allowFullScreen=""
                loading="lazy"
              ></iframe>
            </div>
          </div>
        </div>
      </div>


      <div className="hire-us-section text-center mt-5">
        <h3>Cari Kami!</h3>
        <p>Kami siap memberi Anda solusi terbaik untuk kebutuhan Anda.</p>
        <button className="btn btn-outline-light"
        onClick={() => navigate ("/Home")}>Mulai</button>
      </div>
    </div>
  );
};

export default Contact;
