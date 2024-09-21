import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

const Admin = () => {

  const [candidates, setCondidates] = useState([])

  useEffect(()=>{
    async function getData(){
      try {
        const res = await axios.get('http://13.60.236.4:8000/user/get_unverified/', {
          headers: {
            Authorization: `Bearer ${localStorage.getItem('access_token')}`
          }
        })
        setCondidates(res.data)
        console.log(res.data)
      } catch (error) {
        console.log(error)
      }
    }
    getData()
  },[])

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <h1 className="text-4xl font-bold mb-8">Admin Panel</h1>
      <div className="w-full max-w-4xl">
        {candidates.map((candidate, index) => (
          <Link to={`/verify/${candidate.id}`}>
          <div key={index} className="flex justify-between items-center bg-white rounded-lg shadow-lg p-4 mb-4">
            <div className="flex flex-col">
              <span className="font-semibold text-lg">{candidate.user.first_name} {candidate.user.last_name}</span>
              <span className="text-gray-500">{candidate.email}</span>
            </div>
            <div className="flex items-center space-x-4">
              <span className={`font-medium ${candidate.status === 'Verified' ? 'text-green-500' : 'text-yellow-500'}`}>
                {candidate.status}
              </span>
              <span className="text-gray-400">{candidate.appliedDate}</span>
            </div>
          </div>
          </Link>
        ))}
      </div>
    </div>
  )
}

export default Admin
