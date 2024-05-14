import React, { Component } from 'react'

export class Buycredits extends Component {
  render() {
    return (
      <>
      {/* <div className='relative'>
      <div className='absolute inset-y-0 right-0 h-[500px] w-96 bg-gradient-to-r from-green-500 to-green-800'>
      
      </div>
      </div> */}
      <div className="py-20 flex w-full h-96 mx-auto rounded-lg">
      <div className="w-1/2 shadow-lg h-80">
        <img
          src="images\imgcard.png"
          alt="Payment process"
          className="object-cover w-full h-full"
        />
      </div>
      <div className="h-80 bg-gradient-to-r from-green-500 to-green-800 text-white p-4">
          Earn rewards for every daily payment you make !
      </div>
      
      <div className="w-1/2 bg-white ml-12 mt-10">
        
        <div className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-800">ECOVerve is Friendly Sustainable Partner</h2>
          <h3 className="text-xl text-green-500">Start with our company first</h3>
        </div>
        <p className="text-gray-600">Sed ut perspiciatis unde omnis iste natus error sit voluptat accusantium doloremque laudantium. Sed ut perspiciatis.
</p>
        <button className="mt-8 bg-green-500 hover:bg-green-600 text-white font-bold py-3 px-4 w-96 rounded">
          Purchase Our ECO-Cards
        </button>
      </div>
    </div>
    </>
    )
  }
}

export default Buycredits
