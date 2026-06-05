/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, FormEvent } from 'react';
import { Mail, MapPin, Phone, Send, CheckCircle2 } from 'lucide-react';

export default function ContactView() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    companyName: '',
    email: '',
    phone: '',
    message: ''
  });
  const [submittedData, setSubmittedData] = useState<any>(null);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [copied, setCopied] = useState(false);

  const getEmailSubject = (company: string) => `Acomm Website Inquiry - ${company}`;
  
  const getEmailBody = (data: typeof formData) => {
    return `Inquiry Details:\n----------------------------------------\nName: ${data.firstName} ${data.lastName}\nCompany: ${data.companyName}\nEmail: ${data.email}\nPhone: ${data.phone}\n\nMessage:\n${data.message}\n----------------------------------------\n`;
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (!formData.firstName || !formData.lastName || !formData.companyName || !formData.email || !formData.phone || !formData.message) {
      alert('Please fill out all required fields.');
      return;
    }

    setIsSubmitting(true);

    const payload = {
      access_key: "73d950e5-5491-4f71-8f8a-8a5cba0cb7b9",
      name: `${formData.firstName} ${formData.lastName}`,
      email: formData.email,
      phone: formData.phone,
      company_name: formData.companyName,
      message: formData.message,
      subject: getEmailSubject(formData.companyName)
    };

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json"
        },
        body: JSON.stringify(payload)
      });

      const result = await response.json();

      if (result.success) {
        setSubmittedData({ ...formData });
        setIsSubmitted(true);
      } else {
        alert(result.message || 'Submission failed. Please check your details or try again later.');
      }
    } catch (err) {
      console.error(err);
      alert('An error occurred while submitting. Please check your internet connection.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const copyToClipboard = () => {
    if (!submittedData) return;
    const bodyText = getEmailBody(submittedData);
    navigator.clipboard.writeText(bodyText).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    });
  };

  const handleResetForm = () => {
    setIsSubmitted(false);
    setSubmittedData(null);
    setFormData({
      firstName: '',
      lastName: '',
      companyName: '',
      email: '',
      phone: '',
      message: ''
    });
  };

  return (
    <div className="bg-[#f7f9ff] min-h-screen">
      {/* Background Banner Hero section */}
      <section className="bg-gradient-to-r from-[#031424] via-[#0A2540] to-[#020B14] text-white py-16 px-4 sm:px-6 lg:px-8 text-center border-b border-gray-950">
        <div className="max-w-4xl mx-auto space-y-4">
          <span className="font-mono text-xs uppercase tracking-widest text-teal-400 font-bold block">
            PRECISION PARTNERSHIP
          </span>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-sans tracking-tight text-white mb-2">
            Connect with our engineering experts
          </h1>
          <p className="text-gray-300 font-sans text-sm sm:text-base max-w-2xl mx-auto leading-relaxed">
            From initial design to full-scale production, our team is ready to accelerate your innovation.
          </p>
        </div>
      </section>

      {/* Main Contact Grid layout */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start text-left">
          {/* Left Column: Direct contact info & location */}
          <div className="lg:col-span-5 space-y-8">
            <div className="space-y-6">
              <h2 className="text-2xl sm:text-3xl font-extrabold font-sans text-[#0A2540] tracking-tight">
                Reach Out Directly
              </h2>

              <div className="space-y-4">
                {/* Email card details */}
                <div className="bg-white border border-[#dde3ec] rounded-lg p-6 flex gap-4 items-center shadow-xs">
                  <div className="p-3 bg-teal-50 rounded-md border border-teal-100 flex-shrink-0">
                    <Mail className="text-[#008080] w-6 h-6" />
                  </div>
                  <div className="space-y-1">
                    <p className="font-mono text-[9px] uppercase font-bold tracking-widest text-[#008080]">
                      INQUIRIES & RFQ
                    </p>
                    <a 
                      href="mailto:sales@acommtw.com" 
                      className="font-sans text-lg sm:text-xl font-bold text-[#0A2540] hover:text-[#008080] transition-colors break-all block"
                    >
                      sales@acommtw.com
                    </a>
                  </div>
                </div>

                {/* Phone card details */}
                <div className="bg-white border border-[#dde3ec] rounded-lg p-6 flex gap-4 items-center shadow-xs">
                  <div className="p-3 bg-teal-50 rounded-md border border-teal-100 flex-shrink-0">
                    <Phone className="text-[#008080] w-6 h-6" />
                  </div>
                  <div className="space-y-1">
                    <p className="font-mono text-[9px] uppercase font-bold tracking-widest text-[#008080]">
                      TELEPHONE
                    </p>
                    <a 
                      href="tel:+886-2-2673-8380" 
                      className="font-sans text-lg sm:text-xl font-bold text-[#0A2540] hover:text-[#008080] transition-colors block"
                    >
                      +886-2-2673-8380
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div className="space-y-6 pt-4 border-t border-gray-200">
              <h2 className="text-2xl sm:text-3xl font-extrabold font-sans text-[#0A2540] tracking-tight">
                Headquarters location
              </h2>

              {/* Address card */}
              <div className="bg-white border border-[#dde3ec] rounded-lg p-6 flex gap-4 items-start shadow-xs">
                <div className="p-3 bg-teal-50 rounded-md border border-teal-100 flex-shrink-0">
                  <MapPin className="text-[#008080] w-6 h-6" />
                </div>
                <div className="space-y-1 mt-1">
                  <p className="font-mono text-[9px] uppercase font-bold tracking-widest text-[#008080]">
                    OFFICE ADDRESS
                  </p>
                  <div className="font-sans text-sm sm:text-base text-gray-700 font-medium leading-relaxed">
                    <p>4F-5, NO 98, GUO JI 1ST STREET,</p>
                    <p>SANXIA DISTRICT, NEW TAIPEI CITY</p>
                    <p className="font-bold text-[#0A2540]">TAIWAN ROC</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Contact Inquiry Form matching requested layout */}
          <div className="lg:col-span-7 bg-white border border-[#dde3ec] rounded-xl p-6 sm:p-10 shadow-sm">

            {isSubmitted ? (
              <div className="py-16 flex flex-col items-center justify-center text-center space-y-4">
                <div className="w-16 h-16 bg-emerald-50 flex items-center justify-center rounded-full text-emerald-600 border border-emerald-100">
                  <CheckCircle2 size={32} />
                </div>
                <h3 className="font-sans font-extrabold text-emerald-600 text-2xl tracking-tight">
                  sent successfully
                </h3>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6 font-sans">
                {/* Name fields */}
                <div className="space-y-2">
                  <label className="block text-sm font-bold text-gray-700 flex items-center gap-1">
                    Name <span className="text-red-500 font-bold">*</span>
                  </label>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <input 
                        type="text" 
                        required
                        disabled={isSubmitting}
                        value={formData.firstName}
                        onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
                        placeholder="First Name"
                        className="w-full bg-white border border-gray-300 rounded-[4px] px-3.5 py-2.5 text-sm font-normal text-gray-800 placeholder-gray-400 focus:border-[#008080] focus:ring-1 focus:ring-[#008080] focus:outline-none transition-colors disabled:bg-gray-50"
                      />
                    </div>
                    <div>
                      <input 
                        type="text" 
                        required
                        disabled={isSubmitting}
                        value={formData.lastName}
                        onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
                        placeholder="Last Name"
                        className="w-full bg-white border border-gray-300 rounded-[4px] px-3.5 py-2.5 text-sm font-normal text-gray-800 placeholder-gray-400 focus:border-[#008080] focus:ring-1 focus:ring-[#008080] focus:outline-none transition-colors disabled:bg-gray-50"
                      />
                    </div>
                  </div>
                </div>

                {/* Company Name field */}
                <div className="space-y-2">
                  <label className="block text-sm font-bold text-gray-700 flex items-center gap-1">
                    Company Name <span className="text-red-500 font-bold">*</span>
                  </label>
                  <input 
                    type="text" 
                    required
                    disabled={isSubmitting}
                    value={formData.companyName}
                    onChange={(e) => setFormData({ ...formData, companyName: e.target.value })}
                    placeholder="Company Name"
                    className="w-full bg-white border border-gray-300 rounded-[4px] px-3.5 py-2.5 text-sm font-normal text-gray-800 placeholder-gray-400 focus:border-[#008080] focus:ring-1 focus:ring-[#008080] focus:outline-none transition-colors disabled:bg-gray-50"
                  />
                </div>

                {/* Email field */}
                <div className="space-y-2">
                  <label className="block text-sm font-bold text-gray-700 flex items-center gap-1">
                    Email <span className="text-red-500 font-bold">*</span>
                  </label>
                  <input 
                    type="email" 
                    required
                    disabled={isSubmitting}
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="Email"
                    className="w-full bg-white border border-gray-300 rounded-[4px] px-3.5 py-2.5 text-sm font-normal text-gray-800 placeholder-gray-400 focus:border-[#008080] focus:ring-1 focus:ring-[#008080] focus:outline-none transition-colors disabled:bg-gray-50"
                  />
                </div>

                {/* Phone field */}
                <div className="space-y-2">
                  <label className="block text-sm font-bold text-gray-700 flex items-center gap-1">
                    Phone <span className="text-red-500 font-bold">*</span>
                  </label>
                  <input 
                    type="tel" 
                    required
                    disabled={isSubmitting}
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    placeholder="(555) 555-5555"
                    className="w-full bg-white border border-gray-300 rounded-[4px] px-3.5 py-2.5 text-sm font-normal text-gray-800 placeholder-gray-400 focus:border-[#008080] focus:ring-1 focus:ring-[#008080] focus:outline-none transition-colors disabled:bg-gray-50"
                  />
                </div>

                {/* Message field */}
                <div className="space-y-2">
                  <label className="block text-sm font-bold text-gray-700 flex items-center gap-1">
                    Message <span className="text-red-500 font-bold">*</span>
                  </label>
                  <textarea 
                    rows={5}
                    required
                    disabled={isSubmitting}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Your message."
                    className="w-full bg-white border border-gray-300 rounded-[4px] px-3.5 py-2.5 text-sm font-normal text-gray-800 placeholder-gray-400 focus:border-[#008080] focus:ring-1 focus:ring-[#008080] focus:outline-none transition-colors resize-none disabled:bg-gray-50"
                  />
                </div>

                {/* Submit Button */}
                <div className="pt-2">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full sm:w-auto bg-[#008080] hover:bg-teal-700 text-white font-bold px-8 py-3 rounded-[4px] shadow-xs cursor-pointer flex items-center justify-center gap-2 transition-all duration-300 text-sm tracking-wide disabled:bg-teal-300 disabled:cursor-not-allowed"
                  >
                    <Send size={15} className={isSubmitting ? "animate-pulse" : ""} />
                    {isSubmitting ? "Sending / 傳送中..." : "Submit Inquiry"}
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      </section>
    </div>
  );
}
