import React from 'react'
import './Footer.css'

const Footer = () => {
    return (
        <div className='Footer'>
            <div className='Footer_head'>
                <div>
                    <div className='Mcr'>MCR</div>
                    <div>Construction</div>
                </div>
                <div>
                    <div className='Mcr'>Head Office</div>
                    <div className='one'>500 Terry Francine Street</div>
                    <div>San Francisco, CA 94158</div>
                    <div className='one'>123-456-7890</div>
                    <div>nfo@mysite.com</div>
                </div>
                <div>
                    <div className='Mcr'>Socials</div>
                    <div className='one'>Facebook</div>
                    <div>Instagram</div>
                    <div>LinkedIn</div>
                </div>
                <div>
                    <div className='Mcr'>Inquiries</div>
                    <div className='one'>For any inquiries, questions <br/> or commendations, please <br/> call: 123-456-7890</div>

                </div>
                <div>
                    <button className='call-us-Footer'>Contact Us</button>
                </div>
            </div>
            <div className='Footer2'>
                © 2035 by MCR Construction. Powered and secured by Wix
            </div>
        </div>
    )
}

export default Footer