import React from 'react';
import { Calculator, ArrowUpDown, Building2, Scan } from 'lucide-react';

export default function PartnershipSection() {
    return (
        <section className="w-full px-6 sm:px-10 lg:px-20 py-14 bg-white text-black">
            <div className="flex flex-col lg:flex-row gap-10 justify-between">

                {/* Left Section */}
                <div className="w-full lg:w-1/3 space-y-2">
                    <h2 className="text-2xl lg:sticky top-0 sm:text-3xl font-bold">Partnership for a New Era</h2>
                    <p className="text-sm text-gray-600 font-semibold">Read the announcements</p>
                </div>

                {/* Right Section */}
                <div className="w-full lg:w-2/3 space-y-6">
                    <div>
                        <h3 className="text-2xl sm:text-3xl font-bold">TEEGAAT</h3>
                        <p className="text-gray-700 mt-3 text-[15px] sm:text-base leading-relaxed">
                            Shivmala is committed to shaping the future of infrastructure by delivering sustainable, high-impact solutions that drive progress across urban and rural landscapes. With a strong foundation in engineering excellence, our partnerships focus on scalable growth, smart technologies, and lasting social value. We collaborate with global and regional stakeholders to transform infrastructure challenges into opportunities, empowering communities and enabling economic development at scale.
                        </p>
                    </div>

                    {/* Feature Cards */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                        <FeatureCard
                            icon={<Calculator className="w-6 h-6" />}
                            title="Strategic Infrastructure Investment"
                            desc="Shivmala mobilizes capital and expertise to execute large-scale civil and industrial projects across transport, water, and energy sectors. These investments support long-term development goals while generating tangible public value."
                        />
                        <FeatureCard
                            icon={<ArrowUpDown className="w-6 h-6" />}
                            title="Operational Independence"
                            desc="As an independently managed enterprise, Shivmala retains full control over operations and project execution. This allows us to remain agile, uphold accountability, and maintain high standards across all our initiatives."
                        />
                        <FeatureCard
                            icon={<Building2 className="w-6 h-6" />}
                            title="Capability Expansion"
                            desc="We continually invest in our talent, technology, and project management capacity to ensure we deliver innovative, high-quality infrastructure. From smart highways to sustainable housing, Shivmala builds for the future."
                        />
                        <FeatureCard
                            icon={<Scan className="w-6 h-6" />}
                            title="Scale of Impact"
                            desc="With operations expanding across 30+ cities, Shivmala is on a mission to positively impact 100+ communities by 2030 through safe, efficient, and resilient infrastructure that improves quality of life and unlocks growth."
                        />
                    </div>
                </div>
            </div>
        </section>
    );
}

// Reusable Feature Card
function FeatureCard({ icon, title, desc }) {
    return (
        <div className="flex items-start gap-4">
            <div className="text-black mt-1">{icon}</div>
            <div>
                <h4 className="font-semibold text-lg mb-1">{title}</h4>
                <p className="text-sm text-gray-700 leading-relaxed">{desc}</p>
            </div>
        </div>
    );
}
