import { FaFacebookSquare, FaLinkedinIn, FaTwitter } from "react-icons/fa";

const ContactUs = () => {
    return (
        <div className="pt-20">
            <div className="h-[500px] relative">
                <img className="object-contain h-full w-full" src="https://i.ibb.co/z8zTs7B/Girl-Traveling-Illustration-1.jpg" alt="" />
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                    <h1 className="text-center text-3xl pb-5">Contact us on</h1>
                    <div className="lg:flex grid gap-8">
                        <div className="h-40 w-40 ">
                            <h1 className="pb-5">Social media</h1>
                            <div className="flex gap-3"><FaFacebookSquare className="text-3xl"></FaFacebookSquare>
                                <FaLinkedinIn className="text-3xl"></FaLinkedinIn>
                                <FaTwitter className="text-3xl"></FaTwitter></div>
                        </div>
                        <div className="h-40 w-40 "> 
                        <h1 className="pb-5">LandLine</h1>
                        <p className=" font-bold">+910002515662</p>
                        <p className="font-bold">+910002515515</p>
                        </div>
                        <div className="h-40 w-40 ">
                            <h1 className="pb-5">Our office loaction</h1>
                            <p>bonane mar street,</p>
                            <p>road-1004, sk-avu</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ContactUs;