import React from 'react';

export default function ImpactPatners() {
  const logos = [
    'Prudential', 'Nuveen', 'IFC', 'European Investment Bank', 'Zurich',
    'PineBridge', 'Triodos Bank', 'Rockefeller Foundation', 'Morgan Stanley',
    'FnLock', 'HESTA', 'JP Morgan', 'Ford Foundation'
  ];

  return (
    <section className="w-full px-6 sm:px-10 lg:px-20 py-14 bg-white text-black">
      <div className="flex flex-col lg:flex-row justify-between gap-10">
        
        <div className="w-full  lg:w-1/3 flex flex-col gap-2">
          <h2 className="text-2xl lg:sticky top-0  sm:text-4xl font-bold leading-tight">Partners in Impact</h2>
          <p className="text-sm text-gray-600">learn more abt our investors</p>
        </div>

        {/* Right Side Content */}
        <div className="w-full lg:w-2/3 flex flex-col gap-6">
          <h3 className="text-xl sm:text-2xl font-semibold leading-snug">
            Shivmala connects investors to high-growth companies delivering essential services
            to four billion emerging consumers on the rise.
          </h3>

          <p className="text-gray-700 text-[15px] sm:text-base leading-relaxed">
            Leading insurers and reinsurers spanning the US, Europe and Asia-Pacific, like the world’s
            largest Insurer and Life Insurer, large institutional investors from the US, Europe and
            Asia-Pacific, eight of the world’s largest Development Finance Institutions, and three of
            the top four Investment Banks, and the world’s leading sustainability bank, trust Shivmala
            to deliver returns and impact. <br />
            <strong>Our 100+ investors include:</strong>
          </p>

          {/* Logos Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 mt-4">
            {logos.map((name, index) => (
              <div
                key={index}
                className="w-full h-[60px] flex items-center justify-center border border-gray-200 rounded-md bg-white shadow-sm hover:shadow-md transition"
              >
                <span className="text-sm text-gray-500">{name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
