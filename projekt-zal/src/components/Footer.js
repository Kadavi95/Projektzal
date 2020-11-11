import React from 'react';
import './Footer.css'

function Footer() {
    return (
        <>
            <div className='footer'>
                <i className='fas fa-dog'> </i>
                <p className='footer_text'>Przychodnia Vet</p>
                <ul className='footer_container_ico'>
                    <li key='1'><a href='www.google.pl' className='fab fa-facebook' target='_blank'> </a></li>
                    <li key='2'><a href='www.google.pl' className='fab fa-instagram-square'target='_blank'> </a></li>
                    <li key='3'><a href='www.gooogle.pl' className='fab fa-twitter'target='_blank'> </a></li>

                </ul>
            </div>
        </>
    )
}
export default Footer