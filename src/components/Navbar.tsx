/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { PageType } from '../types';
import { Menu, X } from 'lucide-react';
import { useState } from 'react';

interface NavbarProps {
  activeTab: PageType;
  setActiveTab: (tab: PageType) => void;
}

export default function Navbar({ activeTab, setActiveTab }: NavbarProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems: { label: string; value: PageType }[] = [
    { label: 'About Us', value: 'about' },
    { label: 'Capabilities', value: 'capabilities' },
    { label: 'Products', value: 'products' },
    { label: 'Solutions', value: 'solutions' },
    { label: 'Contact Us', value: 'contact' },
  ];

  return (
    <nav className="sticky top-0 z-50 bg-white border-b border-gray-200 shadow-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20 relative">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center">
            <button 
              onClick={() => setActiveTab('about')}
              className="font-sans text-2xl font-bold tracking-tight text-[#0A2540] hover:opacity-90 cursor-pointer"
            >
              Acomm
            </button>
          </div>

          {/* Centered Desktop Nav Items */}
          <div className="hidden md:flex absolute left-1/2 -translate-x-1/2 space-x-8 items-center h-full">
            {navItems.map((item) => (
              <button
                key={item.value}
                onClick={() => setActiveTab(item.value)}
                className={`relative px-1 py-2 font-sans text-sm font-medium transition-colors duration-200 cursor-pointer ${
                  activeTab === item.value
                    ? 'text-[#008080] font-semibold'
                    : 'text-gray-650 hover:text-[#0A2540]'
                }`}
              >
                {item.label}
                {activeTab === item.value && (
                  <span className="absolute bottom-0 left-0 w-full h-0.5 bg-[#008080] rounded-full transition-all" />
                )}
              </button>
            ))}
          </div>

          {/* Right spacer for desktop / Mobile Menu Button for mobile */}
          <div className="flex items-center">
            <div className="md:hidden">
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="text-gray-600 hover:text-[#0A2540] p-2 focus:outline-none"
              >
                {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Menu dropdown */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white border-b border-gray-200 px-4 pt-2 pb-6 space-y-3 shadow-inner">
          {navItems.map((item) => (
            <button
              key={item.value}
              onClick={() => {
                setActiveTab(item.value);
                setMobileMenuOpen(false);
              }}
              className={`block w-full text-left px-3 py-2.5 rounded-md font-sans text-base font-medium transition-colors ${
                activeTab === item.value
                  ? 'bg-teal-50 text-[#008080]'
                  : 'text-gray-600 hover:bg-gray-50'
              }`}
            >
              {item.label}
            </button>
          ))}
        </div>
      )}
    </nav>
  );
}
