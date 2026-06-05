/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { PageType } from '../types';

interface FooterProps {
  setActiveTab: (tab: PageType) => void;
}

export default function Footer({ setActiveTab }: FooterProps) {
  return (
    <footer className="bg-[#020B14] text-white py-16 px-4 sm:px-6 lg:px-8 border-t border-gray-900">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
          {/* Brand Left */}
          <div>
            <h2 
              onClick={() => {
                setActiveTab('about');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className="font-sans text-2xl font-bold tracking-tight text-white hover:opacity-90 cursor-pointer inline-block mb-6"
            >
              Acomm
            </h2>
            <div className="space-y-2 text-sm text-gray-400 font-sans tracking-wide">
              <p>4F-5, NO 98, GUO JI 1ST STREET,</p>
              <p>SANXIA DISTRICT, NEW TAIPEI CITY</p>
              <p>TAIWAN ROC</p>
              <p className="pt-2 font-semibold text-white">TEL: +886-2-2673-8380</p>
            </div>
          </div>

          {/* Quick Links Right */}
          <div className="md:text-right">
            <h3 className="text-xs font-semibold uppercase tracking-wider text-teal-400 mb-6 font-mono">
              Quick Navigation
            </h3>
            <ul className="space-y-3">
              {[
                { label: 'About Us', value: 'about' },
                { label: 'Capabilities', value: 'capabilities' },
                { label: 'Products', value: 'products' },
                { label: 'Solutions', value: 'solutions' },
                { label: 'Contact Us', value: 'contact' },
              ].map((link) => (
                <li key={link.value}>
                  <button
                    onClick={() => {
                      setActiveTab(link.value as PageType);
                      window.scrollTo({ top: 0, behavior: 'smooth' });
                    }}
                    className="text-sm text-gray-400 hover:text-white transition-colors duration-200 cursor-pointer"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom border & disclaimer */}
        <div className="mt-12 pt-8 border-t border-gray-800 flex flex-col sm:flex-row justify-between items-center text-xs text-gray-500 font-sans">
          <p>© {new Date().getFullYear()} Acomm Co., Ltd. All rights reserved.</p>
          <p className="mt-2 sm:mt-0 font-mono text-[10px] tracking-widest text-[#008080]">
            PRECISION MEDTECH MANUFACTURING SECURED
          </p>
        </div>
      </div>
    </footer>
  );
}
