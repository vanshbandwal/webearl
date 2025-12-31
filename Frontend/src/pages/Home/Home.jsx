import React from 'react'
import "./Home.css"
import Navbar from '../../components/Navbar/Navbar'

const Home = () => {
  return (
    <div className='Main_container_Home'>
        <Navbar/>
        <div className='Container_Home'>
          <div className='Container_Home_part1'>
            <div>Building a </div>
            <div>Concrete Future</div>
          </div>
          <div className='Container_Home_part2'>
            Honest, Reliable Builders since 1968
          </div>
          <div className='Container_Home_part3'>
            <button className='button1'>Veiw Project</button>
            <button className='button2'> Contact-Us</button>
          </div>
        </div>
    </div>
  )
}

export default Home