import React from 'react';

export default function Footer() {
  return (
    <footer className="w-full bg-black border-t border-white/10 text-gray-400 py-16 font-sans">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-12">

        {/* Left: Branding */}
        <div className="space-y-6">
          <h2 className="text-3xl font-bold text-white tracking-widest">UNDERPIN</h2>
          <p className="text-sm uppercase tracking-wider opacity-60">
            The Operating System of the Digital Earth
          </p>
        </div>

        {/* Right: Contact Info */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 text-sm leading-relaxed">
          <div className="space-y-4">
            <div>
              <span className="block text-white/50 text-xs uppercase mb-1">Address</span>
              <p>83 Uisadang-daero, Yeongdeungpo-gu,<br />Seoul, Republic of Korea</p>
            </div>
            <div>
              <span className="block text-white/50 text-xs uppercase mb-1">Company</span>
              <p>UNDERPIN Co., Ltd.</p>
            </div>
          </div>
          <div className="space-y-4">
            <div>
              <span className="block text-white/50 text-xs uppercase mb-1">Contact</span>
              <p>070-7537-2017</p>
            </div>
            <div>
              <span className="block text-white/50 text-xs uppercase mb-1">Email</span>
              <a href="mailto:cs@underpin.kr" className="hover:text-[#00F0FF] transition-colors">cs@underpin.kr</a>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 mt-16 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center text-xs opacity-40">
        <p>&copy; {new Date().getFullYear()} UNDERPIN. All rights reserved.</p>
        <div className="space-x-6 mt-4 md:mt-0">
          <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
          <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
        </div>
      </div>
    </footer>
  );
}