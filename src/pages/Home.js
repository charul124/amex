import React, { Component } from 'react'
import Footer from '../components/Footer'
import Contact from '../components/Contact'

export class home extends Component {
  render() {
    return (
      <div>
        <h1 className="text-center">Hey There !</h1>
        <div className="pl-24">
        <Contact/>
        </div>
        <Footer/>
      </div>
    )
  }
}

export default home
