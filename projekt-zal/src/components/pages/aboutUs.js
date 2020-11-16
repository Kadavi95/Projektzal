import React from 'react';
import './aboutUs.scss'
export default function aboutUs() {
  return (
    <>
      <div className='aboutus_container'>

        <div className='aboutus_container-first'>

          <div className='doctor_container-first'>

              <div className='first_doctor-photo'>
                  
              </div>

              <div className='text_container-first'>
                  <h1 className='name_surname'>Lek. wet. Janusz</h1>
                  <p className='doctor_desription'></p>
              </div>

          </div>
          <div className='doctor_container second_doctor'>
              <div className='first_doctor-photo'>
                adadasd
              </div>

              <div className='text_container'>
                  <h1 className='name_surname'>Lek. wet. Predator</h1>
                  <p className='doctor_desription'></p>
              </div>
          </div>
          
        </div>

        <div className='aboutus_container-second'>

          <div className='doctor_container third_doctor'>

              <div className='third_doctor-photo'>
                 
              </div>

              <div className='text_container'>
                  <h1 className='name_surname'>Lek. wet. Nowak</h1>
                  <p className='doctor_desription'></p>
              </div>

          </div>
          <div className='doctor_container fourth_doctor'>
              <div className='first_doctor-photo'>
                 
              </div>

              <div className='text_container'>
                  <h1 className='name_surname'>Lek. wet Kowalski</h1>
                  <p className='doctor_desription'></p>
              </div>
          </div>
        </div>

      </div>
    </>
  );
}
