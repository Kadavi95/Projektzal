import React from 'react';
import '../../sass/aboutUs.scss'
import Pruszka from './images/pic_1.jpg';
import Luka from './images/pic_2.jpg';
import Random from './images/pic_3.png';
import Pyziol from './images/pic_4.jpg';
export default function aboutUs() {
  return (
    <>
      <div className='aboutus_container'>

        <div className='aboutus_container-first'>

          <div className='doctor_container-first'>

              <img src={Pruszka} alt='luka' className='first_doctor-photo'></img>

              <div className='text_container-first'>
                  <h1 className='name_surname'>Lek. wet. Janusz</h1>
                  <p className='doctor_desription'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean eu aliquet tortor. Nunc gravida augue sit amet varius tristique. Aliquam erat volutpat. In fermentum sagittis tellus.</p>
              </div>

          </div>
          <div className='doctor_container-second'>
              
              <img src={Luka} alt='luka' className='second_doctor-photo'></img>
              

              <div className='text_container-second'>
                  <h1 className='name_surname'>Lek. wet. Predator</h1>
                  <p className='doctor_desription'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean eu aliquet tortor. Nunc gravida augue sit amet varius tristique. Aliquam erat volutpat. In fermentum sagittis tellus.</p>
              </div>
          </div>
          
        </div>

        <div className='aboutus_container-second'>

          <div className='doctor_container-third'>

          <img src={Random} alt='Random' className='third_doctor-photo'></img>
          

              <div className='text_container-third'>
                  <h1 className='name_surname'>Lek. wet. Nowak</h1>
                  <p className='doctor_desription'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean eu aliquet tortor. Nunc gravida augue sit amet varius tristique. Aliquam erat volutpat. In fermentum sagittis tellus.</p>
              </div>

          </div>
          <div className='doctor_container-fourth'>
          
          <img src={Pyziol} alt='Pyziol' className='fourth_doctor-photo'></img>

              <div className='text_container-fourth'>
                  <h1 className='name_surname'>Lek. wet Kowalski</h1>
                  <p className='doctor_desription'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean eu aliquet tortor. Nunc gravida augue sit amet varius tristique. Aliquam erat volutpat. In fermentum sagittis tellus.</p>
              </div>
          </div>
        </div>

      </div>
    </>
  );
}
