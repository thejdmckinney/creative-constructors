'use client';

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
        
        {/* PASTE HUBSPOT EMBED CODE HERE */}
        <div className="bg-gray-50 border-2 border-dashed border-gray-300 rounded-lg p-8 text-center">
          <p className="text-gray-500 text-sm font-mono">
            ⚠️ HubSpot signup form will be embedded here
          </p>
          <p className="text-gray-400 text-xs mt-2">
            Replace this placeholder with your HubSpot form embed code
          </p>
        </div>
        {/* END HUBSPOT EMBED CODE */}
      </div>
    </div>
  );
}
