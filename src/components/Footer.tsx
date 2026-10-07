import React from "react";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className=" text-white mt-10">
      <div className=" px-4 py-10">

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

          {/* Logo / About */}
          <div>
            <h2 className="text-2xl font-bold text-red-500">
              BBC Bangla
            </h2>

            <p className="mt-3 text-gray-400 text-sm leading-6">
              দেশ ও বিশ্বের সর্বশেষ খবর, গুরুত্বপূর্ণ সংবাদ
              এবং নানা বিষয়ের আপডেট জানতে আমাদের সঙ্গে থাকুন।
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-bold text-lg mb-3">
              গুরুত্বপূর্ণ লিংক
            </h3>

            <div className="flex flex-col gap-2 text-sm text-gray-400">
              <Link href="/" className="hover:text-white">
                হোম
              </Link>

              <Link href="/latest" className="hover:text-white">
                সর্বশেষ
              </Link>

              <Link href="/contact" className="hover:text-white">
                যোগাযোগ
              </Link>
            </div>
          </div>

          {/* Follow */}
          <div>
            <h3 className="font-bold text-lg mb-3">
              আমাদের সঙ্গে থাকুন
            </h3>

            <p className="text-gray-400 text-sm mb-4">
              সর্বশেষ খবর পেতে আমাদের অনুসরণ করুন।
            </p>

            <button className="bg-red-600 hover:bg-red-700 px-5 py-2 rounded-md text-sm font-medium">
              Follow Us
            </button>
          </div>

        </div>

        {/* Bottom */}
        <div className="border-t border-gray-700 mt-8 pt-5 text-center">
          <p className="text-gray-500 text-sm">
            © 2026 BBC Bangla. All rights reserved.
          </p>
        </div>

      </div>
    </footer>
  );
};

export default Footer;