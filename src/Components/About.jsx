
const About = () => {
    return (
        <div className="py-10 bg-[#171717] text-white" id="about">
            <div className="lg:max-w-7xl mx-auto">
                <h1 className='text-5xl text-[#f3004b] fancy text-center pt-5 pb-1 w-48 mx-auto'>About Me</h1>
                <div className="flex flex-col lg:flex-row items-center justify-between lg:mx-16 mx-5 my-20">
                    <div className="lg:w-[30%]">
                        <div className="w-full bg-gradient-to-b from-[#f3004b] to-transparent  about-img-container overflow-hidden">
                            <img className="about-img" src="https://i.ibb.co/RC9VXBh/tamim-portfolio-img.png" alt="" />
                        </div>
                    </div>
                    <div className="lg:w-[60%]">
                        <p className="lg:text-lg text-justify leading-7"><span className="text-3xl text-[#f3004b]">M</span>y name is Tamim Ahmed, I am 21 years old fresher front-end developer. I am from Sylhet,  Bangladesh. Even though I am currently studying for a bachelor degree in management. Despite my educational background is not programming related but I am passionate about web development and want to create user-friendly websites and applications. I am always try to explore new technologies to further enhance my skills and contribute to the field of web development.As a passionate developer, I believe in hard work. Last one year I consistently learn MERN stack development. I learn a lot of technology in that time and did almost 15 projects. Also, I continuously seek out opportunities to enhance my skills and stay up-to-date with the latest trends in web development. Now I am seeking an opportunity to start my professional development career.
                            <br />
                            <span className="text-xl text-[#f3004b] font-bold my-5">My Skills</span>
                            <br />
                            Expertise: HTML | CSS | Bootstrap | Tailwind <br />
                            Comfortable: JavaScript | React | Firebase | ExpressJs | ReactRouter | REST Api <br />
                            Familiar: NodeJs | MongoDB | JWT <br />
                            Tools: GitHub | Netlify | Vercel | Figma | VsCode</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;