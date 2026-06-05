/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Lightbulb, Wrench, Factory, ShieldCheck, BadgePlus } from 'lucide-react';
import { motion } from 'motion/react';
import { ServiceCapability } from '../types';

interface SolutionsViewProps {
  onContactClick: () => void;
}

export default function SolutionsView({ onContactClick }: SolutionsViewProps) {
  const services: ServiceCapability[] = [
    {
      id: '01',
      title: 'Design Consulting',
      description: "Translating your custom parameters into ready-for-tooling 3D CAD files.",
    },
    {
      id: '02',
      title: 'Prototyping Labs',
      description: 'Quick custom test batches in actual grade silicone or overmolded pins.',
    },
    {
      id: '03',
      title: 'Manufacturing Services',
      description: 'Scalable, high-precision production for cable assembly and silicone molding components.',
      isHighlighted: true, // Dark blue highlight as shown in Image 2!
    },
    {
      id: '04',
      title: 'Quality Testing',
      description: '', // Blank underneath the title as shown in Image 2!
    },
    {
      id: '05',
      title: 'Value Added Services',
      description: '', 
      bulletPoints: ['Plating & Painting', 'Secondary Manufacturing', 'Emergency Shipments'],
    },
  ];

  const getIcon = (id: string, isHighlighted?: boolean) => {
    const cls = isHighlighted ? 'text-teal-400 w-6 h-6' : 'text-[#008080] w-6 h-6';
    if (id === '01') return <Lightbulb className={cls} />;
    if (id === '02') return <Wrench className={cls} />;
    if (id === '03') return <Factory className={cls} />;
    if (id === '04') return <ShieldCheck className={cls} />;
    return <BadgePlus className={cls} />;
  };

  return (
    <div className="bg-[#f7f9ff] min-h-screen">
      {/* 03. Technical Solutions (Image 3) */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto border-b border-gray-200 text-left">
        <div className="space-y-3 mb-8">
          <h2 className="text-3xl font-extrabold font-sans text-[#0A2540]">
            Technical Solutions
          </h2>
          <p className="text-gray-500 font-sans text-sm max-w-2xl leading-relaxed">
            Comprehensive technical services from CAD concept design to validated high mix manufacturing.
          </p>
        </div>

        <div className="space-y-6">
          {/* Design Capabilities block */}
          <div className="space-y-6">
            <div className="border-l-2 border-[#008080] pl-4 space-y-1">
              <h3 className="font-sans font-bold text-xl text-[#0A2540]">
                Design & Prototyping Capabilities
              </h3>
              <p className="text-gray-500 font-sans text-sm">
                We turn complex design requirements into ultra-high-precision, manufacturing-ready industrial prototypes.
              </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              {[
                { title: 'CAD Modeling & Prototyping', desc: 'Precise 3D engineering files and functional simulations.' },
                { title: 'Custom Overmold Tooling', desc: 'Design optimized molds for superior product sealing.' },
                { title: 'Rapid Turnaround Verification', desc: 'Immediate physical validation and engineering iterations.' },
                { title: 'DFM Consultancy', desc: 'Optimizing designs for high-integrity mass production.' }
              ].map((item, idx) => (
                <div key={idx} className="bg-white border border-[#dde3ec]/70 rounded-lg p-4 shadow-xs hover:border-teal-500/50 hover:shadow-xs transition-all duration-300">
                  <h4 className="font-sans font-bold text-sm text-[#0A2540] mb-1 flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#008080]" />
                    {item.title}
                  </h4>
                  <p className="text-xs text-gray-500 leading-relaxed font-sans">
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 04. Integrated Services Grid Section (Image 2) */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto text-left">
        <div className="space-y-3 mb-12">
          <h2 className="text-3xl font-extrabold font-sans text-[#0A2540]">
            Integrated Services
          </h2>
          <p className="text-gray-500 font-sans text-sm max-w-2xl leading-relaxed">
            Providing engineering expertise across every stage of the medical device lifecycle.
          </p>
        </div>

        {/* 5 Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((item) => (
            <div
              key={item.id}
              className={`border border-[#dde3ec] p-8 rounded-lg flex flex-col justify-between ${
                item.isHighlighted 
                  ? 'bg-[#0A2540] text-white border-transparent shadow-lg' 
                  : 'bg-white text-gray-900 hover:border-teal-500 hover:shadow-md'
              } transition-all duration-300`}
            >
              <div className="space-y-4">
                <div className="flex justify-between items-start">
                  <div className={`p-3 rounded-md ${item.isHighlighted ? 'bg-white/10' : 'bg-teal-50'}`}>
                    {getIcon(item.id, item.isHighlighted)}
                  </div>
                  <span className={`font-mono text-xs font-semibold ${item.isHighlighted ? 'text-teal-400' : 'text-gray-400'}`}>
                    {item.id}
                  </span>
                </div>
                <h3 className={`text-lg font-bold font-sans ${item.isHighlighted ? 'text-white' : 'text-[#0A2540]'}`}>
                  {item.title}
                </h3>
                {item.description && (
                  <p className={`text-xs leading-relaxed font-sans ${item.isHighlighted ? 'text-gray-300' : 'text-gray-500'}`}>
                    {item.description}
                  </p>
                )}

                {/* Bullets specifically for value added services */}
                {item.bulletPoints && (
                  <ul className="list-disc pl-5 mt-4 space-y-1.5 text-xs font-sans text-gray-500">
                    {item.bulletPoints.map((point, pIdx) => (
                      <li key={pIdx}>
                        {point}
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
