import React, { useEffect, useState } from 'react';
// import home1 from '../Assets/home1.png';
import axios from "axios";
import { useParams } from 'react-router-dom';

const Adminverify = () => {
  const [candidate, setCandidate] = useState([]);
  const [adhaar, setadhaar] = useState()
  const [photo, setphoto] = useState()
  const [degree_certificate, setdegree_certificate] = useState()


  const params = useParams()

  const { id } = params

  console.log(id)

  const [data, setData] = useState()

  useEffect(() => {
    async function getData() {
      try {
        const res = await axios.get(`http://13.60.236.4:8000/user/get_unverified_docs/?id=${id}`, {
          headers: {
            Authorization: `Bearer ${localStorage.getItem('access_token')}`
          }
        })
        setData(res.data.teacher.user)
        setadhaar(res.data.adhaar_card)
        setphoto(res.data.photo)
        setdegree_certificate(res.data.degree_certificate)
      } catch (error) {
        console.log(error)
      }
    }
    getData()
  }, [])

  const [isModalOpen, setModalOpen] = useState(false);
  const [selectedDocument, setSelectedDocument] = useState(null);

  const handleOpenModal = (document) => {
    setSelectedDocument(document);
    setModalOpen(true);
  };

  const handleCloseModal = () => {
    setModalOpen(false);
    setSelectedDocument(null);
  };

  const handleSave = () => {

  }



  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <h1 className="text-3xl font-bold mb-6">Candidate: {data?.first_name} {data?.last_name}</h1>
      <p className="text-xl mb-8">Email: {data?.email}</p>

      <h2 className="text-2xl font-semibold mb-4">Documents</h2>
      <div className='grid grid-cols-3 gap-6'>
        <img src={adhaar} alt="" className='size-40'/>
        <img src={photo} alt="" className='size-40'/>
        <img src={degree_certificate} alt="" className='size-40'/>
      </div>


      <div className="mt-8 flex space-x-4">
        <button onClick={handleSave} className="px-6 py-3 bg-green-500 text-white rounded-lg">
          Approve
        </button>
        <button className="px-6 py-3 bg-red-500 text-white rounded-lg">
          Disapprove
        </button>
      </div>
    </div>

  );
};

export default Adminverify;
