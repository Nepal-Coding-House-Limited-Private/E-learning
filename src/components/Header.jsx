import React from 'react'
import { PhoneIcon, EnvelopeIcon } from '@heroicons/react/24/solid'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF } from '@fortawesome/free-brands-svg-icons';

function Header() {
  return (
    <div className="bg-green-700 text-white text-sm md:text-base">
      <div className="max-w-7xl mx-auto flex justify-between items-center px-4 py-2">

        {/* Left Side */}
        <div className="flex items-center gap-2">
          {/* Phone: always visible */}
          <div className="flex items-center gap-1">
            <PhoneIcon className="w-4 h-4" />
            <span className='text-[#17px]'>+977 9812345678</span>
          </div>

          {/* Divider and email: visible only on desktop */}
          <div className="hidden md:flex items-center gap-1">
            <div>|</div>
            <div className="flex items-center gap-1">
              <EnvelopeIcon className="w-4 h-4" />
              <span className='text-[15px]'>abhayabikramshahiofficial@gmail.com</span>
            </div>
          </div>
        </div>

        {/* Right Side: Social icons, desktop only */}
        <div className="hidden md:flex items-center gap-3">
          <a
            href="#"
            className="rounded-full p-2 flex items-center justify-center transition-colors duration-300"
          >
            <FontAwesomeIcon icon={faFacebookF} className="w-4 h-4 " />
          </a>
          {/* Add more social icons if needed */}
        </div>
      </div>
    </div>
    
  )
}

export default Header
