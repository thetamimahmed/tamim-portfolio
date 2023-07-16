import { useRef } from 'react';
import emailjs from '@emailjs/browser';
import Swal from 'sweetalert2';
import { AiOutlineMail } from "react-icons/ai";
import { PiMessengerLogo } from "react-icons/pi";

const Contact = () => {
    const form = useRef()

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_iu6lm8k', 'template_c4pt1vo', form.current, '580fyI3frliAnS_pD')
            .then((result) => {
                console.log(result.text);
                Swal.fire({
                    position: 'center',
                    icon: 'success',
                    title: 'Email Send Successfully',
                    showConfirmButton: false,
                    timer: 1500
                })
                e.target.reset()
            }, (error) => {
                console.log(error.text);
            });
    };
    return (
        <div className="py-20 bg-[#171717]" id="contact">
            <div className='lg:max-w-7xl mx-auto'>
                <h1 className='text-5xl text-[#f3004b] fancy text-center pt-5 pb-1 w-52 mx-auto'>Contact Me</h1>
                <div className="flex flex-col lg:flex-row justify-center h-full my-20">
                    <div className='text-white flex flex-col gap-5 lg:w-[30%]'>
                        <div className='bg-[#131313] text-center p-5 rounded text-lg w-3/4  mx-auto'>
                            <p className='inline-block text-3xl'><AiOutlineMail /></p>
                            <h4>Email</h4>
                            <p>thetamimahmed1@gmail.com</p>
                            <a href="mailto:thetamimahmed1@gmail.com" className='text-[#f3004b] font-bold'>Send a message</a>
                        </div>
                        <div className='bg-[#131313] text-center p-5 rounded text-lg w-3/4  mx-auto'>
                            <p className='inline-block text-3xl'><PiMessengerLogo /></p>
                            <h4>Messenger</h4>
                            <p>Tamim Ahmed</p>
                            <a href="https://m.me/itstamimahmed" target="_blank" rel="noreferrer" className='text-[#f3004b] font-bold'>Send a message</a>
                        </div>
                    </div>
                    <div  className='lg:w-[60%] mt-10 lg:mt-0'>
                        <form ref={form} onSubmit={sendEmail} className="flex flex-col gap-5 w-3/4 mx-auto">
                            <input className="p-3 text-xl bg-transparent border-2 rounded border-[#f3004b] text-white" type="text" name="name" id="name" placeholder="Your Name" required />
                            <input className="p-3 text-xl bg-transparent border-2 rounded border-[#f3004b] text-white" type="email" name="email" id="email" placeholder="Your Email" required />
                            <textarea className="p-3 text-xl bg-transparent border-2 rounded border-[#f3004b] text-white" name="message" id="message" cols="50" rows="5" placeholder="Your Message" required></textarea>
                            <div className='text-center'>
                                <button type="submit" className="w-3/4 px-3 py-1 text-xl transition ease-in-out delay-150 bg-[#f3004b] hover:-translate-y-1 hover:scale-110 hover:bg-white hover:text-[#f3004b] duration-300 mr-5 rounded-full text-white">Send</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;