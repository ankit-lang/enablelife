import React, { useState } from 'react';
import { Check, MessageSquare } from 'lucide-react';
 
export default function ContactAndReasons() {
  const [activeReason, setActiveReason] = useState(2); // 03 NDIS Expertise active by default
 
  const reasons = [
    { id: '01', title: 'Personalised', content: 'Tailored support for your unique needs.' },
    { id: '02', title: 'Efficiency', content: 'Streamlined processes to get you support faster.' },
    { 
      id: '03', 
      title: 'NDIS Expertise', 
      content: 'With our deep understanding of the NDIS sector, we have a team of experts who can provide support in comprehending your NDIS plan, maximizing your funding, and addressing any queries you may have. Count on us to navigate the complexities of the NDIS system and assist you every step of the way.' 
    },
    { id: '04', title: 'Flexibility', content: 'Adaptable services that grow and change with you.' },
    { id: '05', title: 'Fraud Safety', content: 'Rigorous checks to ensure your funding is protected.' }
  ];
 
  return (
    <div className="w-full  font-sans text-gray-800  mt-10  ">
      {/* Bilingual Banner */}
      <div className="bg-[#99c82c] text-white rounded-t-[40px] mb-4 p-8 max-w-4xl mx-auto flex flex-col md:flex-row items-start md:items-center justify-between gap-6 relative -mt-6 z-10">
        <div className="flex items-start gap-4">
          <MessageSquare className="w-10 h-10 mt-1 flex-shrink-0" />
          <h2 className="text-3xl md:text-4xl font-bold leading-tight">
            We have bilingual staff!
          </h2>
        </div>
        <div className="flex flex-col md:flex-row gap-6 w-full md:w-auto items-start md:items-center">
          <div className="grid grid-cols-2 gap-x-8 gap-y-2 text-sm font-medium">
            {['Portuguese', 'Filipino', 'Italian', 'Macedonian', 'Turkish', 'English'].map(lang => (
              <div key={lang} className="flex items-center gap-2">
                <Check className="w-4 h-4" /> {lang}
              </div>
            ))}
          </div>
          <button className="bg-white text-gray-800 px-6 py-2 rounded-full text-sm font-semibold hover:bg-gray-100 transition-colors whitespace-nowrap">
            Contact us today
          </button>
        </div>
      </div>
 
      {/* Contact Section */}
      <div className="bg-white px-6 py-16">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-[#2b303a]">Contact LifeFul today</h2>
          <p className="text-sm font-bold mb-2">
            Give us a call on <span className="text-[#99c82c]">1111 111 111</span> or fill out the form below
          </p>
          <p className="text-xs text-gray-500 mb-8">
            Have a question? Our admin team are available Monday to Friday, from 9am to 5pm.
          </p>
 
          <form className="grid grid-cols-1 md:grid-cols-4 gap-4 text-left">
            <div className="flex flex-col gap-1">
              <label className="text-xs font-semibold">First Name <span className="text-red-500">*</span></label>
              <input type="text" placeholder="First Name" className="border border-gray-200 rounded p-2 text-sm w-full outline-none focus:border-[#99c82c]" />
            </div>
            <div className="flex flex-col gap-1">
              <label className="text-xs font-semibold">Last Name <span className="text-red-500">*</span></label>
              <input type="text" placeholder="Last Name" className="border border-gray-200 rounded p-2 text-sm w-full outline-none focus:border-[#99c82c]" />
            </div>
            <div className="flex flex-col gap-1">
              <label className="text-xs font-semibold">Phone/Mobile <span className="text-red-500">*</span></label>
              <input type="tel" placeholder="Mobile Number" className="border border-gray-200 rounded p-2 text-sm w-full outline-none focus:border-[#99c82c]" />
            </div>
            <div className="flex flex-col gap-1">
              <label className="text-xs font-semibold">Email <span className="text-red-500">*</span></label>
              <input type="email" placeholder="Email Address" className="border border-gray-200 rounded p-2 text-sm w-full outline-none focus:border-[#99c82c]" />
            </div>
 
            <div className="flex flex-col gap-1">
              <label className="text-xs font-semibold">How would you like to be contacted? <span className="text-red-500">*</span></label>
              <select className="border border-gray-200 rounded p-2 text-sm w-full outline-none focus:border-[#99c82c] bg-white text-gray-500">
                <option>- Select -</option>
                <option>Email</option>
                <option>Phone</option>
              </select>
            </div>
            <div className="flex flex-col gap-1">
              <label className="text-xs font-semibold">Organisation name (for providers)</label>
              <input type="text" placeholder="Organisation name" className="border border-gray-200 rounded p-2 text-sm w-full outline-none focus:border-[#99c82c]" />
            </div>
            <div className="flex flex-col gap-1 md:col-span-1">
              <label className="text-xs font-semibold">What can we help with? <span className="text-red-500">*</span></label>
              <textarea placeholder="What can we help with?" rows="1" className="border border-gray-200 rounded p-2 text-sm w-full outline-none focus:border-[#99c82c] resize-none"></textarea>
            </div>
            <div className="flex items-end h-full">
              <button type="button" className="bg-[#ee1585] text-white font-semibold rounded p-2 text-sm w-full hover:bg-[#d11375] transition-colors h-[38px]">
                Submit Enquiry
              </button>
            </div>
          </form>
 
          {/* Divider */}
          <div className="flex items-center justify-center my-10 relative">
            <div className="absolute w-full border-t border-gray-200"></div>
            <span className="bg-white px-4 text-gray-400 font-medium relative z-10">or</span>
          </div>
 
          <h3 className="text-2xl md:text-3xl font-bold mb-6">Book a FREE 30-minute<br/>consultation.</h3>
          <button className="bg-[#2b303a] text-white px-6 py-3 rounded-full text-sm font-semibold hover:bg-gray-800 transition-colors">
            Contact us today
          </button>
        </div>
      </div>
 
      {/* 5 Reasons Section */}
      <div className="max-w-4xl mx-auto px-6 py-12">
        <h2 className="text-2xl md:text-3xl font-bold mb-8">
          <span className="text-[#ee1585]">5 top</span> reasons to choose LifeFul.
        </h2>
 
        <div className="flex flex-col md:flex-row gap-8">
          {/* List */}
          <div className="flex flex-col gap-4 md:w-1/3">
            {reasons.map((reason, idx) => (
              <button
                key={reason.id}
                onClick={() => setActiveReason(idx)}
                className={`text-left text-sm font-semibold pb-2 border-b-2 transition-colors ${
                  activeReason === idx 
                    ? 'text-[#ee1585] border-[#ee1585]' 
                    : 'text-gray-500 border-transparent hover:text-gray-800'
                }`}
              >
                {reason.title}
              </button>
            ))}
          </div>
 
          {/* Active Content Content */}
          <div className="md:w-2/3">
            <div className="relative mb-6">
              <div className="rounded-tl-[80px] rounded-br-[80px] overflow-hidden aspect-[2/1] md:aspect-[21/9] bg-gray-200">
                <img 
                  src="/banner1.png" 
                  alt="Team" 
                  className="w-full h-full object-cover grayscale opacity-80"
                />
              </div>
              <div className="absolute -top-4 -right-2 bg-[#ee1585] text-white w-16 h-16 rounded-full flex items-center justify-center text-2xl font-bold shadow-lg">
                {reasons[activeReason].id}
              </div>
            </div>
            <h3 className="text-xl font-bold mb-3">{reasons[activeReason].title}</h3>
            <p className="text-xs text-gray-600 leading-relaxed">
              {reasons[activeReason].content}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
 