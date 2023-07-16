import { Link } from "react-scroll";
import { BiHomeAlt, BiBrain, BiUser } from "react-icons/bi"
import { BsBriefcase, BsChatSquare, } from "react-icons/bs"

const NavBar = () => {
    return (
        <nav className="z-50 fixed bottom-2 w-full overflow-hidden">
            <div className="container mx-auto">
                <div className="w-full bg-white/20 h-[70px] backdrop-blur-2xl rounded-full max-w-[480px] mx-auto px-5 flex justify-between items-center text-2xl text-white">
                    <Link
                     to="home"
                     activeClass="active"
                     smooth={true}
                     spy={true}
                    className="cursor-pointer w-[60px] h-[60px] flex items-center justify-center"><BiHomeAlt /></Link>
                    <Link
                     to="skills"
                     activeClass="active"
                     smooth={true}
                     spy={true}
                    className="cursor-pointer w-[60px] h-[60px] flex items-center justify-center"><BiBrain /></Link>
                    <Link
                     to="projects"
                     activeClass="active"
                     smooth={true}
                     spy={true}
                    className="cursor-pointer w-[60px] h-[60px] flex items-center justify-center"><BsBriefcase /></Link>
                    <Link
                     to="about"
                     activeClass="active"
                     smooth={true}
                     spy={true}
                    className="cursor-pointer w-[60px] h-[60px] flex items-center justify-center"><BiUser /></Link>
                    <Link
                     to="contact"
                     activeClass="active"
                     smooth={true}
                     spy={true}
                    className="cursor-pointer w-[60px] h-[60px] flex items-center justify-center"><BsChatSquare /></Link>
                </div>
            </div>
        </nav>
    );
};

export default NavBar;