import { FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa";

const Footer = () => {
    return (
        <div>
            <div className="flex flex-col md:flex-row justify-evenly h-56 text-white">
                {/* Contact Us */}
                <div className="w-full text-center bg-slate-800 h-full flex justify-center flex-col text-sm">
                    <h3 className="text-lg font-semibold mb-2">CONTACT US</h3>
                    <p>Address</p>
                    <p>Number</p>
                    <p>Mon - Fri: 08:00 - 22:00</p>
                    <p>Sat - SUn: 10:00 - 23:00</p>

                </div>
                {/* Social */}
                <div className="w-full text-center bg-slate-900 h-full flex justify-center flex-col text-sm space-y-4">
                    <h3 className="text-lg font-semibold">Follow Us</h3>
                    <p>Join us on social media</p>
                    <div className="flex items-center justify-center text-lg gap-4">
                        <FaFacebookF />
                        <FaInstagram />
                        <FaTwitter />
                    </div>
                </div>
            </div>
            <div className="footer footer-center text-white text-xs p-4 bg-black">
                <div>
                    <p>Copyright © {new Date().getFullYear()} - All right reserved by king Chef Restaurant Ltd</p>
                </div>
            </div>
        </div>
    );
};

export default Footer;