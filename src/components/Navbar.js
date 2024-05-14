import React, { Component } from 'react'
import { FaSearch } from 'react-icons/fa';

export class Navbar extends Component {
  render() {
    return (
      <>
      <div className="bg-white bg-opacity-90 p-8 shadow-md">
      <div className="flex justify-between items-center w-full max-w-screen-xl mx-auto">
        <div className="flex items-center space-x-24">
          <div className="text-green-600 font-bold text-3xl">ECOVerve</div>
          <nav className="flex space-x-16 text-green-700 text-lg">
            <a href="#home">Home</a>
            <a href="#cards">Cards</a>
            <a href="#rewards">Rewards & Benefits</a>
            <a href="#projects">Projects</a>
            <a href="#business">Business</a>
          </nav>
        </div>
        <div className="flex items-center space-x-4">
          <div className="relative rounded-full bg-gray-100 max-w-lg flex items-center px-4 py-2">
            <input 
              type="text" 
              placeholder="Search..." 
              className="bg-transparent outline-none w-full"
            />
            <FaSearch className="text-green-600" />
          </div>
          <div className="bg-gray-100 rounded-full px-6 py-2 text-green-600 font-semibold flex items-center justify-center">
            LOGIN
          </div>
        </div>
      </div>
    </div>
      </>
    )
  }
}

export default Navbar
