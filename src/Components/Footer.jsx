import React from 'react';
import { Twitter, Linkedin, Youtube, Instagram, Facebook } from 'lucide-react';
import { useNavigate } from 'react-router';

export default function Footer() {
    const navigate = useNavigate();

    const SocialData = [
        {
            Icon: Facebook,
            link: "https://www.facebook.com/share/16g8D51S4D/"
        },
        {
            Icon: Twitter,
        },
        {
            Icon: Youtube,
        },
        {
            Icon: Instagram,
        },
        {
            Icon: Linkedin,
        }
    ]

    return (
        <footer className="w-full bg-plainGrey px-6 sm:px-10 py-12">
            <div className="flex flex-col md:flex-row justify-between w-full gap-12">

                {/* Navigation Lists */}
                <div className="flex flex-col sm:flex-row items-start sm:items-center justify-center gap-12 w-full md:w-1/2">
                    <ul className="font-emphasis-heavy space-y-3 text-left">
                        <li onClick={() => { window.scrollTo(0, 0); navigate("/") }} className="text-lg cursor-pointer hover:text-primaryblue duration-200">Home</li>
                        <li onClick={() => { window.scrollTo(0, 0); navigate("/aboutus") }} className="text-lg cursor-pointer hover:text-primaryblue duration-200">About us</li>
                        <li onClick={() => { window.scrollTo(0, 0); navigate("/services") }} className="text-lg cursor-pointer hover:text-primaryblue duration-200">Services</li>
                        <li className="text-lg cursor-pointer hover:text-primaryblue duration-200">For media Inquiries</li>
                        <li className="text-lg cursor-pointer hover:text-primaryblue duration-200">Help</li>
                    </ul>

                    <ul className="font-emphasis-heavy space-y-3 text-left">
                        <li onClick={() => { window.scrollTo(0, 0); navigate("/contactus") }} className="text-lg cursor-pointer hover:text-primaryblue duration-200">Contact us</li>
                        <li onClick={() => { window.scrollTo(0, 0); navigate("/projects") }} className="text-lg cursor-pointer hover:text-primaryblue duration-200">Projects</li>
                        <li onClick={() => { window.scrollTo(0, 0); navigate("/career") }} className="text-lg cursor-pointer hover:text-primaryblue duration-200">Career & Growth</li>
                        <li onClick={() => { window.scrollTo(0, 0); navigate("/news") }} className="text-lg cursor-pointer hover:text-primaryblue duration-200">News & Media</li>
                        <li onClick={() => { window.scrollTo(0, 0); navigate("/investors") }} className="text-lg cursor-pointer hover:text-primaryblue duration-200">Investors</li>
                    </ul>
                </div>

             
                <div className="flex flex-col justify-between w-full md:w-1/2 gap-6">

         
                    <div className="flex flex-col sm:flex-row flex-wrap items-start sm:items-center gap-4 text-sm text-gray-700">
                        <p className="hover:text-primaryblue cursor-pointer">+91 8421217140</p>
                        <div className="hidden sm:block w-[1.5px] h-[24px] bg-gray-300" />
                        <p className="hover:text-primaryblue cursor-pointer">Info@shivmalainfra.com</p>
                    </div>


                    <div className="flex flex-col gap-4">
                        <div className="flex gap-4 flex-wrap">
                            {SocialData.map(({ Icon, link }, idx) => (
                                <a
                                    key={idx}
                                    href={link || "#"}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="group flex justify-center items-center w-[40px] h-[40px] border-[2px] border-primaryblue rounded-full hover:bg-primaryblue transition duration-200 cursor-pointer"
                                >
                                    <Icon size={20} className="text-primaryblue group-hover:text-white transition duration-200" />
                                </a>
                            ))}
                        </div>

                        <div className="w-fit px-4 py-2 rounded-2xl border-[2px] border-primaryblue cursor-pointer hover:bg-primaryblue hover:text-white transition text-sm font-emphasis">
                            <a href="https://wa.me/8421217140">Chat on WhatsApp</a>
                        </div>
                    </div>

               
                    <div className="flex flex-col gap-4 pt-2">
                        <div className="w-full h-[1px] bg-gray-300"></div>
                        <p className="text-sm text-gray-600">© 2025 Shivmala</p>
                        <div className="flex flex-wrap items-center gap-4 text-sm text-gray-600">
                            <p onClick={() => navigate("/legal/CodeofConduct")} className="hover:text-primaryblue cursor-pointer">Code of Conduct</p>
                            <div className="w-[1.5px] h-[20px] bg-gray-300" />
                            <p onClick={() => navigate("/legal/privacy")} className="hover:text-primaryblue cursor-pointer">Privacy</p>
                            <div className="w-[1.5px] h-[20px] bg-gray-300" />
                            <p onClick={() => navigate("/legal/TermsConditions")} className="hover:text-primaryblue cursor-pointer">Terms & Conditions</p>
                        </div>
                    </div>

                </div>
            </div>
        </footer>
    );
}
