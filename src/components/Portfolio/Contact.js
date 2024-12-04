import React from 'react'
import contactImage from '../../assets/contact.png'
import { FaHeadphones } from 'react-icons/fa'
import { FaHeadphonesSimple } from 'react-icons/fa6'

const Contact = () => {
  return (
    <div id='contact' className=' scroll-mt-20  min-h-screen flex flex-col justify-evenly items-center  bg-cyan-100/50'>
                    <h3 className='font-extrabold text-4xl font-poppins flex gap-3 pt-5'><FaHeadphonesSimple/>Get in<span className='text-[#a833cf]'>Touch</span></h3>
        <div class="mt-6 shadow-gray shadow-2xl max-w-6xl max-lg:max-w-3xl mx-auto bg-[#ffffff] rounded-lg">
            <div class="grid lg:grid-cols-2 items-center gap-14 sm:p-8 p-4 font-[sans-serif]">
                <div>
                    <img src={contactImage} />
                </div>

                <div class="bg-gray-100 p-6 rounded-lg">
                    <form class="mt-8 space-y-4">
                        <input type='text' placeholder='Name'
                            class="w-full rounded-lg py-3 px-4 text-gray-800 text-sm outline-[#a91079]" />
                        <input type='email' placeholder='Email'
                            class="w-full rounded-lg py-3 px-4 text-gray-800 text-sm outline-[#a91079]" />
                        <input type='text' placeholder='Subject'
                            class="w-full rounded-lg py-3 px-4 text-gray-800 text-sm outline-[#a91079]" />
                        <textarea placeholder='Message' rows="6"
                            class="w-full rounded-lg px-4 text-gray-800 text-sm pt-3 outline-[#a91079]"></textarea>
                        <button type='button'
                            class="text-white bg-[#a91079] hover:bg-[#a91079e2] tracking-wide rounded-lg text-sm px-4 py-3 flex items-center justify-center w-full !mt-6">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16px" height="16px" fill='#fff' class="mr-2" viewBox="0 0 548.244 548.244">
                                <path fill-rule="evenodd" d="M392.19 156.054 211.268 281.667 22.032 218.58C8.823 214.168-.076 201.775 0 187.852c.077-13.923 9.078-26.24 22.338-30.498L506.15 1.549c11.5-3.697 24.123-.663 32.666 7.88 8.542 8.543 11.577 21.165 7.879 32.666L390.89 525.906c-4.258 13.26-16.575 22.261-30.498 22.338-13.923.076-26.316-8.823-30.728-22.032l-63.393-190.153z" clip-rule="evenodd" data-original="#000000" />
                            </svg>
                            Send Message
                        </button>
                    </form>
                </div>
            </div>
        </div>
        <div>&nbsp;</div>
    </div>
  )
}

export default Contact