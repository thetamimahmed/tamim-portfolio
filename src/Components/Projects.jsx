
const Projects = () => {
    return (
        <div className="py-10 bg-[#171717] text-white " id="projects">
            <div className="lg:max-w-7xl mx-auto">
                <h1 className='text-5xl text-[#f3004b] fancy text-center pt-5 pb-1 w-48 mx-auto'>Projects</h1>
                <div className="lg:mx-16 mx-5 my-20">
                    {/* PROJECT1  */}
                    <div className="flex flex-col lg:flex-row justify-between gap-10 my-10">
                        <div className="space-y-5 lg:w-[50%]">
                            <div className="flex items-center">
                                <hr className="inline-block w-6 mr-1 border-[#f3004b]" />
                                <p className="text-lg text-[#bebebe]">Full Stack</p>
                            </div>
                            <h1 className="text-5xl">Language Learning School</h1>
                            <p className="text-xl font-light">I built a full stack language learning school site. There users can enroll different languages</p>
                            <div className="flex gap-3 flex-wrap">
                                <p className="bg-[#383838] py-1 px-6 rounded-full">HTML</p>
                                <p className="bg-[#383838] py-1 px-6 rounded-full">CSS</p>
                                <p className="bg-[#383838] py-1 px-6 rounded-full">Tailwind</p>
                                <p className="bg-[#383838] py-1 px-6 rounded-full">JavaScript</p>
                                <p className="bg-[#383838] py-1 px-6 rounded-full">ReactJs</p>
                                <p className="bg-[#383838] py-1 px-6 rounded-full">NodeJs</p>
                                <p className="bg-[#383838] py-1 px-6 rounded-full">ExpressJs</p>
                                <p className="bg-[#383838] py-1 px-6 rounded-full">MongoDB</p>
                            </div>
                            <button className="px-3 py-1 text-xl transition ease-in-out delay-150 bg-[#f3004b] hover:-translate-y-1 hover:scale-110 hover:bg-white hover:text-[#f3004b] duration-300 mr-5 rounded-full"><a href="https://github.com/thetamimahmed/languager-learning-school-server" target="_blank" rel="noreferrer">Server Link</a> </button>
                            <button className="px-3 py-1 text-xl transition ease-in-out delay-150 bg-[#f3004b] hover:-translate-y-1 hover:scale-110 hover:bg-white hover:text-[#f3004b] duration-300 rounded-full"><a href="https://github.com/thetamimahmed/language-learning-school-client" target="_blank" rel="noreferrer">Client Link</a></button>
                        </div>
                        <div className="lg:w-[40%] relative ">
                            <div className="w-full h-[300px] lg:h-[400px] overflow-hidden img-container">
                                <a href="https://language-learning-school-b4bcf.web.app/" target="_blank" rel="noreferrer">
                                    <img className="block w-full h-full object-cover object-top rounded" src="https://i.ibb.co/ncyQPyP/language-school.png" alt="" />
                                </a>

                            </div>
                        </div>
                    </div>
                    {/* PROJECT2  */}
                    <div className="flex flex-col-reverse lg:flex-row justify-between gap-10 my-20">
                        <div className="lg:w-[40%] relative ">
                            <div className="w-full h-[300px] lg:h-[400px] overflow-hidden img-container">
                                <a href="https://toy-car-zone-e0cb9.web.app/" target="_blank" rel="noreferrer">
                                    <img className="block w-full h-full object-cover object-top rounded" src="https://i.ibb.co/C6jgXZ4/toy-car-zone.png" alt="" />
                                </a>
                            </div>
                        </div>
                        <div className="space-y-5 lg:w-[50%]">
                            <div className="flex items-center">
                                <hr className="inline-block w-6 mr-1 border-[#f3004b]" />
                                <p className="text-lg text-[#bebebe]">Full Stack</p>
                            </div>
                            <h1 className="text-5xl">Toy Car Zone</h1>
                            <p className="text-xl font-light">I built a full stack sports toy car marketplace site. There users can buy toys</p>
                            <div className="flex gap-3 flex-wrap">
                                <p className="bg-[#383838] py-1 px-6 rounded-full">HTML</p>
                                <p className="bg-[#383838] py-1 px-6 rounded-full">CSS</p>
                                <p className="bg-[#383838] py-1 px-6 rounded-full">Tailwind</p>
                                <p className="bg-[#383838] py-1 px-6 rounded-full">JavaScript</p>
                                <p className="bg-[#383838] py-1 px-6 rounded-full">ReactJs</p>
                                <p className="bg-[#383838] py-1 px-6 rounded-full">NodeJs</p>
                                <p className="bg-[#383838] py-1 px-6 rounded-full">ExpressJs</p>
                                <p className="bg-[#383838] py-1 px-6 rounded-full">MongoDB</p>
                            </div>
                            <button className="px-3 py-1 text-xl transition ease-in-out delay-150 bg-[#f3004b] hover:-translate-y-1 hover:scale-110 hover:bg-white hover:text-[#f3004b] duration-300 mr-5 rounded-full"><a href="https://github.com/thetamimahmed/toycar-zone-server" target="_blank" rel="noreferrer">Server Link</a> </button>
                            <button className="px-3 py-1 text-xl transition ease-in-out delay-150 bg-[#f3004b] hover:-translate-y-1 hover:scale-110 hover:bg-white hover:text-[#f3004b] duration-300 rounded-full"><a href="https://github.com/thetamimahmed/toycar-zone-client" target="_blank" rel="noreferrer">Client Link</a></button>
                        </div>

                    </div>
                    {/* PROJECT3  */}
                    <div  className="flex flex-col lg:flex-row justify-between gap-10 my-10">
                        <div className="space-y-5 lg:w-[50%]">
                            <div className="flex items-center">
                                <hr className="inline-block w-6 mr-1 border-[#f3004b]" />
                                <p className="text-lg text-[#bebebe]">Front-End</p>
                            </div>
                            <h1 className="text-5xl">Italian Chef Hunt</h1>
                            <p className="text-xl font-light">I built a site on italian chefs. Where user can see chefs recipes.</p>
                            <div className="flex gap-3 flex-wrap">
                                <p className="bg-[#383838] py-1 px-6 rounded-full">HTML</p>
                                <p className="bg-[#383838] py-1 px-6 rounded-full">CSS</p>
                                <p className="bg-[#383838] py-1 px-6 rounded-full">Tailwind</p>
                                <p className="bg-[#383838] py-1 px-6 rounded-full">JavaScript</p>
                                <p className="bg-[#383838] py-1 px-6 rounded-full">ReactJs</p>
                                <p className="bg-[#383838] py-1 px-6 rounded-full">NodeJs</p>
                                <p className="bg-[#383838] py-1 px-6 rounded-full">ExpressJs</p>
                            </div>
                            <button className="px-3 py-1 text-xl transition ease-in-out delay-150 bg-[#f3004b] hover:-translate-y-1 hover:scale-110 hover:bg-white hover:text-[#f3004b] duration-300 mr-5 rounded-full"><a href="https://github.com/thetamimahmed/chef-hunter-server" target="_blank" rel="noreferrer">Server Link</a> </button>
                            <button className="px-3 py-1 text-xl transition ease-in-out delay-150 bg-[#f3004b] hover:-translate-y-1 hover:scale-110 hover:bg-white hover:text-[#f3004b] duration-300 rounded-full"><a href="https://github.com/thetamimahmed/chef-hunter-client" target="_blank" rel="noreferrer">Client Link</a></button>
                        </div>
                        <div className="lg:w-[40%] relative ">
                            <div className="w-full h-[300px] lg:h-[400px] overflow-hidden img-container">
                                <a href="https://chef-recipe-hunter-clien-59e1d.web.app/" target="_blank" rel="noreferrer">
                                    <img className="block w-full h-full object-cover object-top rounded" src="https://i.ibb.co/vc5sM1G/italian-chefs.png" alt="" />
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="text-center">
                        <button className="px-5 py-2 my-3 text-xl transition ease-in-out delay-150 bg-[#f3004b] hover:-translate-y-1 hover:scale-110 hover:bg-white hover:text-[#f3004b] duration-300 rounded-full"><a href="https://github.com/thetamimahmed?tab=repositories" target="_blank" rel="noreferrer">See More</a></button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Projects;