import React, { Component } from 'react'
import Footer from '../components/Footer'
import Contact from '../components/Contact'
import Buycredits from '../components/Buycredits'
import Navbar from '../components/Navbar'

export class home extends Component {
  render() {
    return (
      <div>
        <Navbar/>
        <div className='mb-32'><Buycredits/></div>
        <div className="pl-24">
        <Contact/>
        </div>
        <Footer/>
      </div>
    )
  }
}

export default home
