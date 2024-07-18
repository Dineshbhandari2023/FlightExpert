import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faInstagram, faTwitter, faLinkedinIn, faPinterestP } from '@fortawesome/free-brands-svg-icons';
import basis from '../assets/basis.png';
import iata from '../assets/iata.png';
import google from '../assets/google.png';
import ecab from '../assets/ecab.png';
import duns from '../assets/duns.png';
import dss from '../assets/dss.png';
import banklogo from '../assets/banklogo.png';

const Footer = () => {
  return (
    <footer className=" text-gray-800 font-sans py-5 w-full">
      <div className="max-w-6xl mx-auto px-5">
        <div className="flex flex-wrap justify-between mb-5">
          <div className="w-full md:w-1/5 mb-5 md:mb-0">
            <img src="https://flightexpert.com/_next/static/media/fe-logo.712b9c71.svg" alt="Flight Expert Logo" className="h-10 mb-2" />
            <p className="text-red-500 font-thin">Trip Expert Dhaka </p>
            <p className="text-red-500 font-thin">90/1 Motijheel City Centre Level 25-B-1, Lift 26 Dhaka 1000, Bangladesh</p>
            <div className="flex space-x-3 text-red-500 text-lg mt-2">
              <a href="#"><FontAwesomeIcon icon={faFacebookF} /></a>
              <a href="#"><FontAwesomeIcon icon={faInstagram} /></a>
              <a href="#"><FontAwesomeIcon icon={faTwitter} /></a>
              <a href="#"><FontAwesomeIcon icon={faLinkedinIn} /></a>
              <a href="#"><FontAwesomeIcon icon={faPinterestP} /></a>
            </div>
          </div>
          <div className="w-full md:w-1/5 mb-5 md:mb-0">
            <h3 className="mb-2 text-lg text-gray-700">About</h3>
            <ul className="list-none p-0">
              <li className="mb-2"><a href="#" className="text-gray-500 hover:text-black">About Flight Expert</a></li>
              <li className="mb-2"><a href="#" className="text-gray-500 hover:text-black">Best Price Guarantee</a></li>
              <li className="mb-2"><a href="#" className="text-gray-500 hover:text-black">Terms and Conditions</a></li>
              <li className="mb-2"><a href="#" className="text-gray-500 hover:text-black">Privacy Policy</a></li>
              <li className="mb-2"><a href="#" className="text-gray-500 hover:text-black">Cookie Policy</a></li>
              <li className="mb-2"><a href="#" className="text-gray-500 hover:text-black">Blog</a></li>
            </ul>
          </div>
          <div className="w-full md:w-1/5 mb-5 md:mb-0">
            <h3 className="mb-2 text-lg text-gray-700">Help</h3>
            <ul className="list-none p-0">
              <li className="mb-2"><a href="#" className="text-gray-500 hover:text-black">FAQS</a></li>
              <li className="mb-2"><a href="#" className="text-gray-500 hover:text-black">Easy EMI</a></li>
              <li className="mb-2"><a href="#" className="text-gray-500 hover:text-black">Payment Methods</a></li>
              <li className="mb-2"><a href="#" className="text-gray-500 hover:text-black">Contact Us</a></li>
            </ul>
          </div>
          <div className="w-full md:w-1/5 mb-5 md:mb-0">
            <h3 className="mb-2 text-lg text-gray-700">Have Questions?</h3>
            <p className="text-red-500 font-sans">+88-09617-111-888</p>
            <p className="text-red-500">sales@flightexpert.com</p>
            <p className="text-black font-sans font-extralight ">Dedicated Customer Support</p>
            <p className="text-black  font-thin">Sat-Thurs: 9AM-9PM</p>
            <p className="text-black   font-thin ">Friday/Govt. Holidays: 10AM-6PM</p>
          </div>
          <div className="w-[390px] h-[180px] md:w-1/5 mb-5 md:mb-0">
            <h3 className="mb-2 text-lg text-gray-700">Accepted Payments</h3>
              <img src={banklogo} alt="Payments" className="my-4 h-32 w-full cursor-pointer" />
          </div>
        </div>

        <div className="border-t border-gray-300 py-6">
          <div className="flex flex-wrap justify-between">
            <div className="w-1/5 text-center mb-1">
              <h4 className="mb-2 text-md font-bold text-gray-400">Accredited Member</h4>
              <img src={basis} alt="BASIS" className="h-10 mb-2 cursor-pointer" />
              <img src={ecab} alt="e-CAB" className="h-10 mb-2" />
            </div>
            <div className="w-1/5 text-center mb-5">
              <h4 className="mb-2 text-md font-bold text-gray-400">Registered at</h4>
              <img src={duns} alt="DUNS Registered" className="h-10 mb-2 pl-10 ml-9" />
            </div>
            <div className="w-1/5 text-center mb-5">
              <h4 className="mb-2 text-md font-bold text-gray-400">Authorised by</h4>
              <img src={iata} alt="IATA" className="h-10 mb-2 pl-10 ml-9" />
            </div>
            <div className="w-1/5 text-center mb-5">
              <h4 className="mb-2 text-md font-bold text-gray-400">Our Partners</h4>
              <img src={google} alt="Google" className="h-12  mb-2 pl-10 ml-9" />
            </div>
            <div className="w-1/5 text-center mb-5">
              <h4 className="mb-2 text-md font-bold text-gray-400">Verified By</h4>
              <img src={dss} alt="PCI DSS Compliant" className="h-10 mb-2 pl-9 ml-9" />
            </div>
          </div>
          <div className="text-center mt-5 text-gray-500 border-t border-gray-300 pt-5">
            <p>Copyright @2024 FEBD Ltd. All rights reserved by Flight Expert.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
