import React from "react";

const Footer = () => {
  return (
    <footer className="bg-white text-black mt-10 py-8">
      <div className="container mx-auto px-6 grid grid-cols-4 gap-2">
        <p className="max-w-80">
          <img
            src="./png/logo2.png"
            alt="Rebel Rover"
            className="z-10 w-full h-25"
          />
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
          pharetra condimentum.
        </p>
        {/* Contact Information */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Contact Information</h3>
          <div className="flex items-center mb-2">
            <img
              src="./svg/place.svg"
              alt="Location"
              className="mr-2 w-5 h-5"
            />
            <span>732 Despard St, Atlanta</span>
          </div>
          <div className="flex items-center mb-2">
            <img src="./svg/call.svg" alt="Phone" className="mr-2 w-5 h-5" />
            <span>+97 888 8888</span>
          </div>
          <div className="flex items-center">
            <img src="./svg/Group.svg" alt="Email" className="mr-2 w-5 h-5" />
            <span>info@traveller.com</span>
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Quick Link</h3>
          <ul>
            <li className="mb-2">
              <a href="#" className="hover:text-gray-300">
                Home
              </a>
            </li>
            <li className="mb-2">
              <a href="#" className="hover:text-gray-300">
                About Us
              </a>
            </li>
            <li className="mb-2">
              <a href="#" className="hover:text-gray-300">
                Tours
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-gray-300">
                Contact
              </a>
            </li>
          </ul>
        </div>

        {/* Follow Us */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Follow Us</h3>
          <div className="flex space-x-4">
            <img src="./svg/face.svg" alt="Facebook" className="w-8 h-8" />
            <img src="./svg/twitter.svg" alt="Twitter" className="w-8 h-8" />
            <img src="./svg/ytube.svg" alt="YouTube" className="w-8 h-8" />
            <img src="/./svg/inst.svg" alt="Instagram" className="w-8 h-8" />
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="bg-black text-center mt-8 pt-6 text-sm text-white h-25">
        Copyright © All rights reserved (Website Developed & Managed by
        CREATIVECHROMA)
      </div>
    </footer>
  );
};

export default Footer;
