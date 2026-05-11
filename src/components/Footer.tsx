import React from "react";

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="container">
        <div className="footer-contact">
          <a href="tel:+919999999999" className="glass">📞 Call</a>
          <a href="https://wa.me/919999999999" className="glass">💬 WhatsApp</a>
          <span className="footer-hours">Available 9 AM – 7 PM</span>
        </div>
        <div className="footer-bottom">
          <p>&copy; {new Date().getFullYear()} Master G Consultancy. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
