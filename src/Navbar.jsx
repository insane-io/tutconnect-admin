import React, { useContext } from 'react'
import { NavLink } from 'react-router-dom'
import { MyContext } from './Context/MyContext'

const Navbar = () => {

  const { login } = useContext(MyContext)
  console.log(login)

  const { verified } = useContext(MyContext)
  return (
    <>
      <nav className="bg-[#EDAFFF] fixed w-full  top-0 start-0  rounded-b-lg"> {/* Added rounded-b-lg here */}
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-3">
          <NavLink href="https://flowbite.com/" className="flex items-center space-x-3 rtl:space-x-reverse">
            <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-black">TuTcoNNecT - Admin</span>
          </NavLink>
          <div className="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
            {
              login ? (<><NavLink to="/freelancerprofile" className='text-white'>Logged In</NavLink></>) : (
                <NavLink to="/login" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Get started</NavLink>
              )
            }
            <button data-collapse-toggle="navbar-sticky" type="button" className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-sticky" aria-expanded="false">
              <span className="sr-only">Open main menu</span>
              <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                <path stroke="currentColor" stroke-linecap="round" stroke-width="2" d="M1 1h15M1 7h15M1 13h15" />
              </svg>
            </button>
          </div>
          <div>
            <ul className="flex gap-8 text-xl">
              <li>
                <NavLink to="/" className={({ isActive }) => isActive ? "text-[#61007E] font-bold" : "text-black"}>Home</NavLink>
              </li>
              {
                verified ? (
                  <>
                    <li>
                      <NavLink to="/stats" className={({ isActive }) => isActive ? "text-[#61007E] font-bold" : "text-black"}>Stats</NavLink>
                    </li>
                    <li>
                      <NavLink to="/upload" className={({ isActive }) => isActive ? "text-[#61007E] font-bold" : "text-black"}>Upload</NavLink>
                    </li>
                  </>
                ) : !verified ? (
                  <><li>
                    <NavLink to="/verify" className={({ isActive }) => isActive ? "text-[#61007E] font-bold" : "text-black"}>Verify</NavLink>
                  </li>
                  </>
                ) : null
              }

            </ul>
          </div>
        </div>
      </nav>

    </>
  )
}

export default Navbar
