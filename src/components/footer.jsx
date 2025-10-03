import React from "react";
import Container from "./container";
import Twitter from "../assets/twitter.png";
import Linkedin from "../assets/linkedin.png";
import Facebook from "../assets/facebook.png";
import Mail from "../assets/mail.png";

const Footer = () => {
  return (
    <footer className="bg-black text-gray-300 px-8 py-12 mt-20">
      <Container>
        <div className="grid md:grid-cols-5 gap-8">
          <div>
            <h3 className="text-white font-semibold mb-2">
              CS — Ticket System
            </h3>
            <p className="text-sm">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book.
            </p>
          </div>
          <div>
            <h4 className="text-white font-semibold mb-2">Company</h4>
            <ul className="space-y-1 text-sm">
              <li className="cursor-pointer hover:underline">About Us</li>
              <li className="cursor-pointer hover:underline">Our Mission</li>
              <li className="cursor-pointer hover:underline">Contact Saled</li>
            </ul>
          </div>
          <div>
            <h4 className="text-white font-semibold mb-2">Services</h4>
            <ul className="space-y-1 text-sm">
              <li className="cursor-pointer hover:underline">
                Products & Services
              </li>
              <li className="cursor-pointer hover:underline">
                Customer Stories
              </li>
              <li className="cursor-pointer hover:underline">Download Apps</li>
            </ul>
          </div>
          <div>
            <h4 className="text-white font-semibold mb-2">Information</h4>
            <ul className="space-y-1 text-sm">
              <li className="cursor-pointer hover:underline">Privacy Policy</li>
              <li className="cursor-pointer hover:underline">
                Terms & Conditions
              </li>
              <li className="cursor-pointer hover:underline">Join Us</li>
            </ul>
          </div>
          <div>
            <h4 className="text-white font-semibold mb-2">Social Links</h4>
            <ul className="space-y-1 text-sm">
              <li className="flex items-center gap-2 cursor-pointer hover:underline">
                <img src={Twitter} alt="Twitter" className="w-5 h-5" />
                @CS — Ticket System
              </li>
              <li className="flex items-center gap-2 cursor-pointer hover:underline">
                <img src={Linkedin} alt="Linkedin" className="w-5 h-5" />
                @CS — Ticket System
              </li>
              <li className="flex items-center gap-2 cursor-pointer hover:underline">
                <img src={Facebook} alt="Facebook" className="w-5 h-5" />
                @CS — Ticket System
              </li>
              <li className="flex items-center gap-2 cursor-pointer hover:underline">
                <img src={Mail} alt="E-mail" className="w-5 h-5" />
                support@cst.com
              </li>
            </ul>
          </div>
        </div>
        <div className="text-left md:text-center text-white text-lg mt-2">
          © 2025 CS — Ticket System.
          <br className="block md:hidden" /> All rights reserved.
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
