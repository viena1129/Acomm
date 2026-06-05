/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */



export default function CapabilitiesView() {
  return (
    <div className="bg-[#f7f9ff] min-h-screen text-left">
      {/* Structured Capabilities Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="max-w-3xl mb-12 space-y-4">
          <h2 className="text-2xl sm:text-3xl font-extrabold font-sans text-[#0A2540]">
            Capabilities
          </h2>
          <p className="text-gray-650 font-sans text-base leading-relaxed">
            Our cables designed to address unique operational requirements, ensuring reliable performance under varying conditions.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            {
              num: '01',
              title: 'Power Cable Assemblies',
              desc: 'High-reliability power transfer solutions engineered for stable voltage delivery and daily clinical usage.'
            },
            {
              num: '02',
              title: 'Coaxial Cable Assemblies',
              desc: 'Optimized for high-frequency signal integrity, low attenuation, and electromagnetic interference shielding.'
            },
            {
              num: '03',
              title: 'Flat Ribbon Cable Assemblies',
              desc: 'Space-saving high-density packaging for internal system routing and simplified diagnostic board connections.'
            },
            {
              num: '04',
              title: 'Data Cable Assemblies',
              desc: 'Premium quality connections tailored for IT infrastructure, telecommunications, and audiovisual systems.'
            },
            {
              num: '05',
              title: 'Custom Cable Assemblies',
              desc: 'Tailor-made cable integrations for various critical applications such as Medical, Automotive, and Automation industries.'
            },
            {
              num: '06',
              title: 'Customized Silicone Molding',
              desc: 'Biocompatible material molding, overmolding, protective strain reliefs, and custom medical-grade interfaces.'
            }
          ].map((cap) => (
            <div 
              key={cap.num} 
              className="bg-white border border-[#dde3ec] rounded-lg p-6 shadow-xs hover:shadow-md hover:border-teal-500/30 transition-all duration-300 flex flex-col justify-between"
            >
              <div className="space-y-4">
                <span className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-teal-50 text-[#008080] font-mono text-xs font-bold border border-teal-200">
                  {cap.num}
                </span>
                <h3 className="text-lg font-bold font-sans text-[#0A2540]">
                  {cap.title}
                </h3>
                <p className="text-sm font-sans text-gray-500 leading-relaxed">
                  {cap.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
