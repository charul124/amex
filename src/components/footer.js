import React, { Component } from 'react'

export class footer extends Component {
  render() {
    return (
      <>
      <div className="wave" style={{marginBottom: "-9px"}}>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#2A3342" fill-opacity="1" d="M0,160L40,181.3C80,203,160,245,240,256C320,267,400,245,480,224C560,203,640,181,720,197.3C800,213,880,267,960,256C1040,245,1120,171,1200,154.7C1280,139,1360,181,1400,202.7L1440,224L1440,320L1400,320C1360,320,1280,320,1200,320C1120,320,1040,320,960,320C880,320,800,320,720,320C640,320,560,320,480,320C400,320,320,320,240,320C160,320,80,320,40,320L0,320Z"></path></svg>
    </div>

    <footer style={{background: "#2A3342"}}>
    <div className="container flex flex-col justify-between py-10 mx-auto space-y-8 lg:flex-row lg:space-y-0">
		<div className="lg:w-1/3">
			<a rel="noopener noreferrer" href="#" className="flex justify-center space-x-3 lg:justify-start">
				<div className="flex items-center justify-center w-12 h-12 rounded-full">
					<img src="\images\Group.svg" alt="" />
				</div>
				<span className="self-center text-2xl font-semibold text-[35px] text-[#34A853]">ECO-Verve</span>
			</a>
            <span><div className="text-sm mt-4 ml-12 text-[#a5a5a5]">© 1968 Company Co. All rights reserved.</div></span>
		</div>
		<div className="grid grid-cols-2 text-sm gap-x-3 gap-y-8 lg:w-2/3 sm:grid-cols-4 mb-4">
			<div className="space-y-3">
				<h3 className="tracki uppercase font-semibold text-[white] my-4">Explore</h3>
				<ul className="space-y-1 text-[white]">
					<li>
						<a rel="noopener noreferrer" href="#">Home</a>
					</li>
					<li>
						<a rel="noopener noreferrer" href="#">About Us</a>
					</li>
					<li>
						<a rel="noopener noreferrer" href="#">Our Support</a>
					</li>
					<li>
						<a rel="noopener noreferrer" href="#">Blog</a>
					</li>
				</ul>
			</div>
			<div className="space-y-3">
				<h3 className="tracki uppercase dark:text-gray-50 my-4">Get Involved</h3>
				<ul className="space-y-1 text-[white]">
					<li>
						<a rel="noopener noreferrer" href="#">Donate</a>
					</li>
					<li>
						<a rel="noopener noreferrer" href="#">Volunteer</a>
					</li>
				</ul>
			</div>
			<div className="space-y-3">
				<h3 className="uppercase dark:text-gray-50 my-4">Connect</h3>
				<ul className="space-y-1 text-[white]">
					<li>
						<a rel="noopener noreferrer" href="#">Conatct Us</a>
					</li>
					<li>
						<a rel="noopener noreferrer" href="#">Support Us</a>
					</li>
					<li>
						<a rel="noopener noreferrer" href="#">FAQ</a>
					</li>
				</ul>
			</div>
			<div className="space-y-3">
			<button type="submit" className="bg-[#00A82D]" style={{ width: '80%', height: "40px", borderRadius: "4px", color: "white"}}>Subscribe</button>
			</div>
		</div>
	</div>
    </footer>
      </>
    )
  }
}

export default footer
