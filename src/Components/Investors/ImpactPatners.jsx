import React from 'react';

export default function ImpactPatners() {
  const logos = [
    ' L&T Finance', 'Mahindra Infra Fund', 'Tata Capital', 'ICICI Ventures' , 'SBI Capital', 'HDFC Infra Fund',
    'IDFC First', 'Aditya Birla Capital', 'JSW Investments', 'Shapoorji Pallonji Group',
    'Asian Infrastructure Investment Bank', ' Housing Development Finance Corp',
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
            Shivmala empowers development through strong partnerships
            We collaborate with leading investors, developers, and institutions to build future-ready infrastructure across Maharashtra. By aligning with visionaries in public and private sectors, Shivmala delivers impactful, scalable, and sustainable civil projects that transform communities.

          </h3>

          <p className="text-gray-700 text-[15px] sm:text-base leading-relaxed">
            Our stakeholders include top financial and development partners who trust our vision of quality-driven infrastructure.
            <br />
            <strong>Our valued collaborators include:
            </strong>
          </p>

          {/* Logos Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 mt-4">
            {logos.map((name, index) => (
              <div
                key={index}
                className="w-full h-[60px] flex text-center items-center justify-center border border-gray-200 rounded-md bg-white shadow-sm hover:shadow-md transition"
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
