import { FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa";

const Footer = () => {
    return (
        <div>
            <div className="flex flex-col md:flex-row justify-evenly border h-56 ">
                {/* Contact Us */}
                <div className="w-full text-center bg-slate-700 h-full flex justify-center flex-col text-sm">
                    <h3 className="text-lg font-semibold mb-2">CONTACT US</h3>
                    <p>Address</p>
                    <p>Number</p>
                    <p>Mon - Fri: 08:00 - 22:00</p>
                    <p>Sat - SUn: 10:00 - 23:00</p>

                </div>
                {/* Social */}
                <div className="w-full text-center bg-slate-900 h-full flex justify-center flex-col border text-sm space-y-4">
                    <h3 className="text-lg font-semibold">Follow Us</h3>
                    <p>Join us on social media</p>
                    <div className="flex items-center justify-center text-lg gap-2">
                        <FaFacebookF />
                        <FaInstagram />
                        <FaTwitter />
                    </div>
                </div>
            </div>
            <div className="footer footer-center bg-base-300 text-xs p-4 ">
                <div>
                    <p>Copyright © {new Date().getFullYear()} - All right reserved by king Chef Restaurant Ltd</p>
                </div>
            </div>
        </div>
    );
};

export default Footer;