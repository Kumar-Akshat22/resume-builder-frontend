import React, { useState } from 'react'
import toast from 'react-hot-toast';
import Save from './Save';
import { MdDelete } from "react-icons/md";
import { MdEdit } from "react-icons/md";

function Certifications({ updateResumeDetails }) {

    const [certifications, setCertifications] = useState([]);
    const [certificateForm, setCertificateForm] = useState({

        title: '',
        certificationLink: '',
        certificateDescription: '',
    });

    const resetFields = () => {

        setCertificateForm({
            title: '',
            certificationLink: '',
            certificateDescription: '',
        })
    }

    const [editingMode, setEditingMode] = useState(false);
    const [selectedCertificationID, setSelectedCertificationID] = useState(null);

    const handleChange = (event) => {

        const { name, value } = event.target;

        setCertificateForm({ ...certificateForm, [name]: value })


    }

    const addCertification = () => {

        if (certificateForm.title && certificateForm.certificationLink) {

            setCertifications([...certifications, { id: Date.now(), data: certificateForm }]);
            resetFields();
            toast.success('Certification added');

        } else {

            toast.error('Please fill out some details')
        }
    }

    const deleteCertification = (id) => {

        const newCertification = certifications.filter((certification) => certification.id !== id);
        setCertifications(newCertification);
        toast.success('Certification removed successfully');
        console.log('Delete Icon is Clicked');
    }

    const editCertification = (id) => {

        const certificationToEdit = certifications.find((certification) => certification.id === id);

        setCertificateForm(certificationToEdit.data);
        setEditingMode(true);
        setSelectedCertificationID(id);
        console.log('Editing Mode turned ON');


    }

    const updateCertification = () => {

        console.log(`Updating the experience with the ID:${selectedCertificationID}`);

        if (selectedCertificationID !== null) {

            const updatedCertifications = certifications.map((certification) => {

                if (certification.id === selectedCertificationID) {

                    return { ...certification, data: certificateForm }
                }

                return certification;
            })

            setCertifications(updatedCertifications);
            resetFields();
            setEditingMode(false);
            setSelectedCertificationID(null);
            toast.success('Deatils updated successfully');
        }

    }

    const saveDetails = () => {



        updateResumeDetails("certificatons", certifications);
        toast.success('Certification Details successfully saved')

    }

    console.log('Printing the Certification Form Data:', certificateForm);
    console.log('Printing the Certification array Data:', certifications);

    return (
        <div className='w-full p-5 mt-6'>

            <div className='max-w-[1140px] mx-auto font-openSans'>

                <div className='w-full flex justify-between items-center'>
                    <div className='mb-4'>
                        <p className='uppercase text-xl'>Certifications</p>
                        <span className='text-sm'>Add about your Certifications</span>
                    </div>

                    <Save saveDetails={saveDetails} />
                </div>

                <div className='flex flex-col gap-4'>
                    <div className='flex gap-5 align-items-center justify-center mt-4'>
                        <label className='w-[50%]'>
                            <span className=''>Title</span>
                            <input type='text' name='title' onChange={handleChange} value={certificateForm.title} placeholder='e.g. John' className='w-full focus:outline-none focus:border-[#3983fa] focus:ring-1 focus:ring-[#3983fa] border p-[8px] rounded-[0.2rem] text-slate-400 mt-1'></input>
                        </label>

                        <label className='w-[50%]'>
                            <span>Link</span>
                            <input type='text' name='certificationLink' value={certificateForm.certificationLink} onChange={handleChange} placeholder='e.g. Williams' className='w-full focus:outline-none focus:border-[#3983fa] focus:ring-1 focus:ring-[#3983fa] border p-[8px] rounded-[0.2rem] mt-1'></input>
                        </label>
                    </div>

                    <label className=''>
                        <h1 className=''>Description <span>(Optional)</span></h1>
                        <input type='text' name='certificateDescription' onChange={handleChange} value={certificateForm.certificateDescription} placeholder='e.g. John' className='w-full focus:outline-none focus:border-[#3983fa] focus:ring-1 focus:ring-[#3983fa] border p-[8px] rounded-[0.2rem] text-slate-400 mt-1'></input>
                    </label>
                </div>

                {
                    editingMode
                        ?
                        <div className='mt-5'>
                            <button className='bg-[#3983fa] text-white px-3 py-2 rounded hover:bg-blue-600 transition duration-200' onClick={updateCertification}>Update Certification</button>
                        </div>
                        :
                        <div className='mt-5'>
                            <button className='bg-[#3983fa] text-white px-3 py-2 rounded hover:bg-blue-600 transition duration-200' onClick={addCertification}>Add Certification</button>
                        </div>
                }

                {
                    certifications.length > 0 && (<div className='w-full mt-8 flex flex-col gap-5'>

                        {
                            certifications.map((certification) => (
                                <div key={certification.id} className='w-full p-5 border rounded-[14px] flex items-center justify-between transition-all duration-300 hover:shadow-md'>

                                    <div>
                                        <h1 className='font-openSans font-semibold text-lg'>{certification.data.title}</h1>


                                        <a href={`${certification.data.certificationLink}`} className='font-openSans font-normal'>Link</a>

                                        <p>
                                            {certification.data.certificateDescription}
                                        </p>


                                    </div>



                                    <div className='flex justify-start gap-5' >
                                        <MdEdit size={19} className='cursor-pointer text-[#d2d2d2] hover:text-green-500 transition-all duration-200' onClick={() => editCertification(certification.id)} disabled={editingMode} />
                                        <MdDelete size={19} className='cursor-pointer text-[#d2d2d2] hover:text-red-500 transition-all duration-200' onClick={() => deleteCertification(certification.id)} disabled={editingMode} />
                                    </div>

                                </div>))
                        }

                    </div>)
                }
            </div>
        </div>
    )
}

export default Certifications