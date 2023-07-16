import { Link } from "react-scroll";
import { BiLogoLinkedinSquare, BiLogoGithub } from "react-icons/bi";
import { FaVoicemail } from "react-icons/fa";

const Home = () => {
    return (
        <div className="lg:h-screen lg:pt-28 max-w-7xl mx-auto " id="home">
            <div className=" text-white flex flex-col lg:flex-row justify-between items-center mx-5 py-10 lg:py-0 lg:mx-24 relative">
                <div className="space-y-5">
                    <h3 className="text-3xl">Hello, I am <span className="text-[#f3004b]">Tamim Ahmed</span> </h3>
                    <h1 className="text-5xl lg:text-7xl">Front-End <br /> <span className="text-[#f3004b]">Web</span> Developer</h1>
                    <p className="text-xl">Building beautiful websites with skillful front-end development.</p>
                    <div className="space-x-5">
                        <button className="lg:px-5 lg:py-2 px-3 py-1 text-xl transition ease-in-out delay-150 bg-[#f3004b] hover:-translate-y-1 hover:scale-110 hover:bg-white hover:text-[#f3004b] duration-300"><Link to="contact" activeClass="active" smooth={true} spy={true}>Hire Me</Link></button>
                        <button className="lg:px-5 lg:py-2 px-3 py-1 text-xl transition ease-in-out delay-150 bg-[#f3004b] hover:-translate-y-1 hover:scale-110 hover:bg-white hover:text-[#f3004b] duration-300"><a href="https://drive.google.com/file/d/1my2Ch8R6M8lQWZVsfybhoEhsgFYzPZJL/view?usp=sharinghttps://drive.google.com/file/d/1my2Ch8R6M8lQWZVsfybhoEhsgFYzPZJL/view?usp=sharing" target="_blank" rel="noreferrer">Download Resume</a></button>
                        {/* social */}
                        <div className="mt-5 lg:mt-0 lg:absolute flex lg:flex-col justify-around lg:justify-center lg:items-center lg:-left-20 lg:bottom-10 after::content-[''] lg:after:w-[2px] lg:after:h-8 after:bg-[#f3004b]">
                            <p className="text-blue-600"><a href="https://www.linkedin.com/in/thetamimahmed/" target="_blank" rel="noreferrer"><BiLogoLinkedinSquare size={40} /></a></p>
                            <p className="text-white"><a href="https://github.com/thetamimahmed" target="_blank" rel="noreferrer"><BiLogoGithub size={40} /></a></p>
                            <p className="text-[#128C7E]"><a href="mailto:thetamimahmed1@gmail.com" target="_blank" rel="noreferrer"><FaVoicemail size={40} /></a></p>
                        </div>
                    </div>
                </div>
                <div className="mt-10 lg:mt-0">
                    <div className="w-[300px] h-[300px] lg:w-[390px] lg:h-[390px]">
                        <div className="w-full h-full bg-[#f3004b] rounded-full after:content-[''] after:absolute after:w-[270px] after:h-[270px]  lg:after:w-[360px] lg:after:h-[360px] after:bg-[#1F1F1F] after:rounded-full  flex justify-center items-center relative zoomIn-animation">
                            <span className=" absolute w-full h-full rounded-full bg-[#f3004b] blur-md"></span>
                            <div className="z-10 w-[270px] h-[270px] lg:w-[360px] lg:h-[360px] rounded-full overflow-hidden relative">
                                <img className="w-[250px] lg:w-[340px] object-cover absolute top-6 left-1" src="https://i.ibb.co/RC9VXBh/tamim-portfolio-img.png" alt="" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;