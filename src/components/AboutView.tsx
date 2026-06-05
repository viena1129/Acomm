/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { ShieldCheck, Tags, Truck } from 'lucide-react';
import { motion } from 'motion/react';

export default function AboutView() {
  const commitments = [
    {
      icon: <ShieldCheck className="text-[#008080] w-6 h-6" />,
      title: 'High Quality',
      badge: 'HQ',
      text: 'A full range of products manufactured to the highest industry standards for clinical precision.',
    },
    {
      icon: <Tags className="text-[#008080] w-6 h-6" />,
      title: 'Reasonable Price',
      badge: 'PRICE',
      text: 'Cost-effective solutions leveraging our strategic Taiwan-based manufacturing facilities.',
    },
    {
      icon: <Truck className="text-[#008080] w-6 h-6" />,
      title: 'On-Time Delivery',
      badge: 'DELIVERY',
      text: 'Global logistics ensuring your assembly needs are met precisely when you need them.',
    },
  ];

  return (
    <div className="bg-[#f7f9ff] min-h-screen">
      {/* Hero / Overview Section */}
      <section className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto text-left">
        <div className="space-y-6">
          <div>
            <span className="inline-flex items-center px-3 py-1 rounded-[16px] text-xs font-bold font-sans bg-[#E6F2F2] text-[#008080] tracking-wider uppercase mb-4">
              Established 2002
            </span>
          </div>

          <div className="space-y-6 font-sans text-gray-700 text-lg leading-relaxed">
            <p className="font-semibold text-gray-900 text-xl">
              ACOMM Co., Ltd., a privately-owned company, was founded in 2002, specializes in manufacturing of cable assembly and related components.
            </p>
            <p>
              We maintaining our competitive edge by consist in providing you a full range of high quality products, reasonable price, on time delivery and excellent customer services.
            </p>
            <p>
              With manufacturing facilities in Taiwan, we offer cost effective solutions to meet your company's assembly needs. From molded cables to custom wire harnesses, Acomm has a broad spectrum of capabilities. We are one of the few manufacturers that can offer high mix/low volume offshore capabilities.
            </p>
          </div>
        </div>
      </section>

      {/* Our Commitment Section */}
      <section className="bg-gradient-to-b from-[#0A2540] to-[#020B14] text-white py-20 px-4 sm:px-6 lg:px-8 border-y border-gray-900 text-left">
        <div className="max-w-7xl mx-auto">
          <div className="max-w-3xl mb-16 space-y-3">
            <h2 className="text-3xl sm:text-4xl font-bold font-sans tracking-tight">
              Our Commitment
            </h2>
            <p className="text-gray-300 font-sans text-sm sm:text-base leading-relaxed">
              We maintain our competitive edge by delivering precision, reliability, and value to every client partnership.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {commitments.map((item, index) => (
              <div
                key={index}
                className="bg-[#0A2540]/60 backdrop-blur-xs border border-gray-700/50 p-8 rounded-lg shadow-md flex flex-col justify-between"
              >
                <div className="space-y-4">
                  <div className="flex justify-between items-start">
                    <div className="p-3 bg-white/10 rounded-md">
                      {item.icon}
                    </div>
                    <span className="font-mono text-[10px] text-teal-400 font-bold uppercase tracking-wider bg-teal-950/40 px-2 py-0.5 rounded-sm">
                      {item.badge}
                    </span>
                  </div>
                  <h3 className="text-xl font-bold font-sans text-white">{item.title}</h3>
                  <p className="text-gray-300 text-sm leading-relaxed font-sans">{item.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
