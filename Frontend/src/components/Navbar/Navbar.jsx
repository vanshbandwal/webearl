import React from 'react'
import './Navbar.css'

const Navbar = () => {
  return (
    <div className='Main_Navbar_container'>
        <div className='Main_Navbar_container_part1'>
            <div className='MCR'>MCR</div>
            <div className='Construction'>Construction</div>
        </div>
        <div className='Main_Navbar_container_part2'>
            <div>Sevices</div>
            <div>Project</div>
            <div>About Us</div>
            <div>Career</div>
            <div>Contact</div>
            <div className='call-us'>Call Us!</div>
        </div>
    </div>
  )
}

export default Navbar