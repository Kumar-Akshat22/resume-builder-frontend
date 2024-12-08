import React, { useState } from 'react';
import contactImage from '../../../assets/contact.png';
import { FaHeadphonesSimple } from 'react-icons/fa6';
import { useMutation } from 'react-query';
import { sendEmail } from '@/services/portfolioService';
import toast from 'react-hot-toast';
import { useParams } from 'react-router-dom';

const Contact = () => {
  // State for form fields
  const {link} = useParams();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  // Handle input change
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };
  const [sending, setSending] = useState(false)

  const sendMailMutation = useMutation({
    mutationFn: ()=> sendEmail(link.split('#')[0], formData),
    onError: err=> toast.error(`Error on sending email: ${err.message}`),
    onSuccess: ()=> {
        toast.success('Email sent successfully!'); 
        setFormData({
            name: '',
            email: '',
            subject: '',
            message: '',
        });
        setSending(false); 
    },
  })
  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    setSending(true) 
    console.log('Form Data Submitted:', formData);
    const {name, email, subject, message} = formData
    if (!name || !email || !subject || !message) {
        toast.error("Please fill out all fields.");
        return;
      }
      sendMailMutation.mutate()
    // Add API call or other logic here
    // Reset form after submission
    setFormData({
      name: '',
      email: '',
      subject: '',
      message: '',
    });
  };

  return (
    <div
      id="contact"
      className="scroll-mt-20 text-white flex flex-col justify-evenly items-center "
    >
      <h3 className="font-extrabold text-4xl font-poppins flex gap-3 pt-5">
        <FaHeadphonesSimple />
        Get in<span className="">Touch</span>
      </h3>
      <div className="mt-6 shadow-gray shadow-2xl max-w-6xl max-lg:max-w-3xl mx-auto  rounded-lg">
        <div className="grid lg:grid-cols-2 items-center gap-14 sm:p-8 p-4 font-[sans-serif]">
          <div>
            <img src={contactImage} alt="Contact" />
          </div>

          <div className=" p-6 rounded-lg">
            <form className="mt-8 space-y-4" onSubmit={handleSubmit}>
              <input
                type="text"
                name="name"
                placeholder="Name"
                value={formData.name}
                onChange={handleChange}
                className="bg-[#252525] w-full rounded-lg py-3 px-4 text-gray-800 text-sm outline-dark-primary"
              />
              <input
                type="email"
                name="email"
                placeholder="Email"
                value={formData.email}
                onChange={handleChange}
                className="bg-[#252525] w-full rounded-lg py-3 px-4 text-gray-800 text-sm outline-dark-primary"
              />
              <input
                type="text"
                name="subject"
                placeholder="Subject"
                value={formData.subject}
                onChange={handleChange}
                className="bg-[#252525] w-full rounded-lg py-3 px-4 text-gray-800 text-sm outline-dark-primary"
              />
              <textarea
                name="message"
                placeholder="Message"
                rows="6"
                value={formData.message}
                onChange={handleChange}
                className="bg-[#252525] w-full rounded-lg px-4 text-gray-800 text-sm pt-3 outline-dark-primary"
              ></textarea>
              <button
                type="submit"
                disabled={sending}
                className="text-white bg-dark-primary hover:bg-rose-600 tracking-wide rounded-lg text-sm px-4 py-3 flex items-center justify-center w-full !mt-6"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16px"
                  height="16px"
                  fill="#fff"
                  className="mr-2"
                  viewBox="0 0 548.244 548.244"
                >
                  <path
                    fillRule="evenodd"
                    d="M392.19 156.054 211.268 281.667 22.032 218.58C8.823 214.168-.076 201.775 0 187.852c.077-13.923 9.078-26.24 22.338-30.498L506.15 1.549c11.5-3.697 24.123-.663 32.666 7.88 8.542 8.543 11.577 21.165 7.879 32.666L390.89 525.906c-4.258 13.26-16.575 22.261-30.498 22.338-13.923.076-26.316-8.823-30.728-22.032l-63.393-190.153z"
                    clipRule="evenodd"
                    data-original="#000000"
                  />
                </svg>
                {sending?"Sending...":"Send Message"}
              </button>
            </form>
          </div>
        </div>
      </div>
      <div>&nbsp;</div>
    </div>
  );
};

export default Contact;
