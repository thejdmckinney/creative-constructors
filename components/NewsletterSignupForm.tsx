'use client';

import { useEffect } from 'react';
import Script from 'next/script';

export default function NewsletterSignupForm() {
  return (
    <div className="bg-white border-2 border-navy rounded-xl p-8 shadow-lg">
      <div className="max-w-2xl mx-auto">
        <h3 className="text-2xl font-black font-barlow-condensed text-navy mb-3 text-center">
          Get The Home Watch Delivered Weekly
        </h3>
        <p className="text-gray-600 mb-6 text-center">
          Practical home maintenance tips, DIY guides, and contractor insights straight to your inbox every week.
        </p>
        
        {/* HubSpot Form */}
        <Script 
          src="https://js-na2.hsforms.net/forms/embed/244310039.js" 
          strategy="lazyOnload"
        />
        <div 
          className="hs-form-frame" 
          data-region="na2" 
          data-form-id="89f12dbf-2a33-4f4e-a584-fc8e236487c7" 
          data-portal-id="244310039"
        />
      </div>
    </div>
  );
}
