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
                            Shivmala Infrastructure is shaping India’s future with forward-thinking construction solutions that uplift both urban and rural environments. Our strategic alliances with public and private entities help overcome infrastructure challenges through innovation, quality, and smart engineering.
                        </p>
                    </div>

                    {/* Feature Cards */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                        <FeatureCard
                            icon={<Calculator className="w-6 h-6" />}
                            title="Strategic Infrastructure Investment"
                            desc="Shivmala brings domain expertise and skilled execution to large-scale civil and industrial projects including transport, drainage, housing, and water systems. We help drive regional progress while supporting long-term sustainability."
                        />
                        <FeatureCard
                            icon={<ArrowUpDown className="w-6 h-6" />}
                            title="Operational Independence"
                            desc="We continually invest in technology, project leadership, and manpower development to ensure unmatched quality. From smart roads to urban design, we deliver solutions that stand the test of time."
                        />
                        <FeatureCard
                            icon={<Building2 className="w-6 h-6" />}
                            title="Capability Expansion"
                            desc="With a dedicated in-house team and a transparent process, Shivmala retains full control of execution. This ensures agile project delivery, zero compromise on safety, and complete accountability."
                        />
                        <FeatureCard
                            icon={<Scan className="w-6 h-6" />}
                            title="Scale of Impact"
                            desc="Operating in 30+ cities, Shivmala is on a mission to improve 100+ communities by 2030 through sustainable, efficient, and resilient infrastructure. We aim to enhance daily lives and unlock regional growth."
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
