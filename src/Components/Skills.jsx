
const Skills = () => {
    const techs = [
        {
            id: 1,
            src: 'https://i.ibb.co/whwSzCz/html.png',
            title: 'HTML',
            style: 'shadow-orange-500'
        },
        {
            id: 2,
            src: 'https://i.ibb.co/92tfsbD/css-3.png',
            title: 'CSS',
            style: 'shadow-blue-500'
        },
        {
            id: 3,
            src: 'https://i.ibb.co/dPDrMvL/bootstrap.png',
            title: 'Bootstrap',
            style: 'shadow-purple-500'
        },
        {
            id: 4,
            src: 'https://i.ibb.co/mCQK7w8/tailwind-css-icon.png',
            title: 'Tailwind',
            style: 'shadow-sky-500'
        },
        {
            id: 5,
            src: 'https://i.ibb.co/BfgZfmv/js.png',
            title: 'JavaScript',
            style: 'shadow-yellow-500'
        },
        {
            id: 6,
            src: 'https://i.ibb.co/DrVRyYH/science.png',
            title: 'ReactJs',
            style: 'shadow-blue-500'
        },
        {
            id: 7,
            src: 'https://i.ibb.co/K20BxBp/icons8-node-js-512-1.png',
            title: 'NodeJs',
            style: 'shadow-lime-500'
        },
        {
            id: 8,
            src: 'https://i.ibb.co/GCC774Y/icons8-express-js-512.png',
            title: 'ExpressJs',
            style: 'shadow-gray-500'
        },
        {
            id: 9,
            src: 'https://i.ibb.co/ftrdFWN/icons8-mongodb-512.png',
            title: 'MongoDB',
            style: 'shadow-green-500'
        },
        {
            id: 10,
            src: 'https://i.ibb.co/rGrXd8c/icons8-github-512-1.png',
            title: 'GitHub',
            style: 'shadow-gray-500'
        },
    ]
    return (
        <div className="bg-[#171717] text-white" id="skills">
            <div className="lg:max-w-7xl mx-auto">
                <h1 className='text-5xl text-[#f3004b] fancy text-center pt-5 pb-1 w-48 mx-auto'>Skills</h1>
                <p className="text-center text-xl mt-3">This are the technologies I have worked with</p>
                <div data-aos="fadeInUp" data-aos-easing="linear"
                    data-aos-duration="1000" className="grid grid-cols-2 lg:grid-cols-3 gap-10 mx-5 lg:mx-16 py-10">
                    {
                        techs.map(tech => <div className={`shadow-md hover:scale-105 duration-500 py-2 rounded-lg ${tech.style} flex flex-col items-center`} key={tech.id}>
                            <img className="w-20" src={tech.src} alt="" />
                            <p className="text-xl mt-2">{tech.title}</p>
                        </div>)
                    }
                </div>
            </div>
        </div>
    );
};

export default Skills;