import React from "react";

const Footer = () => {
  return (
    <footer className="bg-blue text-white py-8 px-4 md:px-16">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* About Section */}
        <div>
          <h4 className="text-xl font-semibold mb-4">About Us</h4>
          <p className="text-gray-400">
          At RR Ispat, a unit of Godawari Power and Ispat Limited, we specialize in innovative web and mobile app solutions for HR, logistics, sales, store management, and plant operations. Our services include cloud and server management, database services, IoT and API integration, and bug bounty expertise, ensuring comprehensive and customized client solutions.          </p>
        </div>

        {/* Links Section */}
        <div>
          <h4 className="text-xl font-semibold mb-4">Quick Links</h4>
          <ul className="space-y-2">
            <li>
              <a href="#home" className="text-gray-400 hover:text-white">
                Home
              </a>
            </li>
            <li>
              <a href="#about" className="text-gray-400 hover:text-white">
                About
              </a>
            </li>
            <li>
              <a href="#work" className="text-gray-400 hover:text-white">
                Work
              </a>
            </li>
            <li>
              <a href="#products" className="text-gray-400 hover:text-white">
                Products
              </a>
            </li>
            <li>
              <a href="#contact" className="text-gray-400 hover:text-white">
                Contact
              </a>
            </li>
          </ul>
        </div>

        {/* Contact Section */}
        <div>
          <h4 className="text-xl font-semibold mb-4">Contact Us</h4>
          <ul className="space-y-2">
            <li className="text-gray-400">
              R.R. Ispat (A Unit of Godawari Power & Ispat Limited) HIRA Group
              of Industries. 490/1 & 491/2, Urla Industrial Complex, Birgaon,
              Raipur – 492003, Chhattisgarh (India)
            </li>
            <li className="text-gray-400">Email: software@rrispat.com</li>
            <li className="text-gray-400">Phone: 9630044515 </li>
            <li className="text-gray-400">Website: rrispat.in </li>
          </ul>
        </div>
      </div>
      <div className="mt-8 text-center text-gray-400">
        &copy; 2024 RR Ispat A Unit of GPIL. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
