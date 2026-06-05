/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from 'motion/react';

export default function ProductsView() {
  const cableAssemblyImg1 = '/src/assets/images/regenerated_image_1780629994083.jpg';
  const cableAssemblyImg2 = '/src/assets/images/regenerated_image_1780629994690.jpg';
  const siliconeMoldingImg = '/src/assets/images/silicone_molding_product_1780628552069.png';
  const siliconeElectrodesImg = '/src/assets/images/regenerated_image_1780635281824.jpg';

  const products = [
    {
      id: 'prod-1',
      name: '01. Cable Assembly',
      description: 'Acomm specializes in OEM/ODM customized cable assemblies designed for patient monitoring and diagnostic equipment. Our assemblies prioritize signal integrity and durability in clinical environments.',
      badge: 'OEM/ODM CUSTOM',
      image: cableAssemblyImg1,
      images: [cableAssemblyImg1, cableAssemblyImg2],
      specs: [
        { label: 'Application', value: 'Patient monitoring, ECG, diagnostics, clinical instrumentation' },
        { label: 'Leadwires', value: 'Custom termination, overmolded connectors, gold/silver contacts' },
        { label: 'Shielding', value: 'Ultra-low noise, high-density Al-Mylar shield + braided wire' },
        { label: 'Standards', value: 'FDA Registered, ISO Class compatibility' }
      ]
    },
    {
      id: 'prod-2',
      name: '02. Neutral Electrode',
      description: 'Our proprietary silicone molding process creates ultra-durable, biocompatible components designed for repeated sterilization. Ideal for grounding pads and surgical interface surfaces.',
      badge: 'ISO 13485 CERTIFIED',
      image: siliconeMoldingImg,
      specs: [
        { label: 'Application', value: 'Electrosurgical patient return plates, grounding pads, therapeutic electrotherapy' },
        { label: 'Material', value: 'Biocompatible Class VI medical-grade conductive silicone rubber' },
        { label: 'Sterilization', value: 'Autoclave compatible, chemical resistant, high-temperature stability' },
        { label: 'Features', value: 'Uniform current distribution, low impedance, flexible skin contact' }
      ]
    },
    {
      id: 'prod-3',
      name: '03. Silicone Electrodes',
      description: 'High-durability medical-grade silicone electrodes for therapeutic applications.',
      badge: 'BIO-COMPATIBLE',
      image: siliconeElectrodesImg,
      specs: [
        { label: 'Application', value: 'Transcutaneous electrical nerve stimulation (TENS), muscle stimulation (EMS)' },
        { label: 'Material', value: 'Class VI pure medical carbon-silicone conductive compound' },
        { label: 'Sterilization', value: 'Alcohol wipe sanitizable, multiple-session durability, waterproof' },
        { label: 'Features', value: 'High flexibility, 2.0mm pin receptacle, uniform current coverage' }
      ]
    },
    {
      id: 'prod-4',
      name: '04. Precision Harness',
      description: 'Multi-point signal cable for diagnostic equipment.',
      badge: 'HIGH QUALITY',
      image: '/src/assets/images/precision_harness_1780585702245.png',
      specs: [
        { label: 'Application', value: 'Multi-point signaling, medical imaging hardware, ECG monitors' },
        { label: 'Connector', value: 'Rugged circular steel multi-pin socket with integrated spring latch' },
        { label: 'Wire harness', value: 'Reinforced dual strain-relief, polyurethane chemical-resistant jacket' },
        { label: 'Shielding', value: 'Individually shielded twisted pairs for cross-talk prevention' }
      ]
    }
  ];

  return (
    <div className="bg-[#f7f9ff] min-h-screen py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      {/* Page Header */}
      <div id="product-header-container" className="flex flex-col sm:flex-row items-start sm:items-end justify-between gap-6 mb-12 border-b border-gray-200 pb-8">
        <div className="space-y-3 text-left">
          <h1 className="text-3xl sm:text-4xl font-extrabold font-sans text-[#0A2540]">
            Product Showcase
          </h1>
          <p className="text-gray-650 font-sans text-sm sm:text-base max-w-xl">
            Precision clinical components certified for high-stakes medical and diagnostic applications.
          </p>
        </div>
      </div>

      {/* Product Display Cards - Clean grid layout style replicating Image 4 */}
      <motion.div
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.35, ease: 'easeOut' }}
        className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-5xl mx-auto"
      >
        {products.map((product) => (
          <div
            key={product.id}
            className="bg-white border border-[#dde3ec] rounded-lg overflow-hidden flex flex-col justify-between shadow-xs hover:shadow-md hover:border-teal-500/30 transition-all duration-300"
          >
            {/* Image display */}
            {product.images && product.images.length > 1 ? (
              <div className="bg-[#e8eef7]/20 p-6 border-b border-[#dde3ec] grid grid-cols-2 gap-4 min-h-[260px] items-center">
                {product.images.map((imgUrl, idx) => (
                  <div key={idx} className="bg-white border border-[#dde3ec] rounded-md p-3 flex flex-col items-center justify-center relative shadow-xs group h-full">
                    <img
                      src={imgUrl}
                      alt={`${product.name} Style ${idx + 1}`}
                      className="max-h-40 object-contain rounded-sm transition-transform duration-300 group-hover:scale-105"
                      referrerPolicy="no-referrer"
                    />
                  </div>
                ))}
              </div>
            ) : (
              <div className="bg-[#e8eef7]/20 p-8 border-b border-[#dde3ec] flex items-center justify-center min-h-[260px]">
                <img
                  src={product.image}
                  alt={product.name}
                  className="max-h-56 object-contain rounded-md transition-transform duration-300 hover:scale-105"
                  referrerPolicy="no-referrer"
                />
              </div>
            )}

            {/* Title, Badge and Subtext */}
            <div className="p-6 sm:p-8 space-y-6 text-left flex-grow flex flex-col justify-between">
              <div className="space-y-4">
                <div className="flex flex-wrap justify-between items-start gap-2">
                  <h3 className="font-sans text-lg font-bold text-[#0A2540]">
                    {product.name}
                  </h3>
                </div>
                <p className="text-gray-600 font-sans text-xs sm:text-sm leading-relaxed">
                  {product.description}
                </p>
              </div>
            </div>
          </div>
        ))}
      </motion.div>
    </div>
  );
}
