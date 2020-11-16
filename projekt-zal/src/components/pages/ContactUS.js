import React from 'react';
import './contact.scss'
import {useForm} from 'react-hook-form'
import { firestore } from "./firebase";

export default function ContactUs() {
  const { register, handleSubmit, errors } = useForm();
  const onSubmit = data => {
    const { email,textarea,rodo } = data;
    firestore.collection("messages").add({
      email,textarea,rodo
    }).then(() => {
      alert('Udało się wysłać formularz')
    }).catch(err => console.error(err))
  };

  return (
    <div className='container-contact'>
      <div className='date'>
        <h1 className="date_heading">Przychodnia VET</h1>
        <div className='adress_container'>
          <p className="date_text_adress">Adres: </p>
          <p className="date_text_adress-2">ul. Pieskowa 13b, </p>
        </div>
        <p className='date_text_adress-3'>
        10-001 Pieskowo Górne
        </p>
        <div className='number_container'>
          <p className="date_text_number">Numer tel:</p>
          <p className="date_text_number-2">11 333 222 119</p>
        </div>
        <div className='mail_container'>
          <p className="date_text_mail">Adres mail:</p>
          <p className="date_text_mail-2">pieskigórą@pieski.pl</p>
        </div>
        <div className='NIP_container'>
          <p className="date_text_nip-2">Nr NIP: </p>
          <p className="date_text_nip-2"> 313-1313-22-11</p>
        </div>
        <div className='KRS_container'>
        <p className="date_text">KRS:</p>
        <p className="date_text">313 222 222 7777</p>
        </div>
      
      </div>
      <div className='date_active'>
        <h1 className='date_active-heading'>Napisz do nas wiadomość</h1>
        <form className='data_active-form'onSubmit={handleSubmit(onSubmit)}>
          <div className='active_form-email'>
            <p className='form_email-text'>Wpisz swój adres email:</p>
            <input className='form_email_input' placeholder="Email"type="text" name="email" ref={register({ required: true })}></input>
          </div>
          <p className='active_warning'>{errors.email && <p>To pole jest wymagane</p>}</p>
          <div className='active_form-textarea'>
            <p>Napisz wiadomośc:</p>
            <textarea className='data_active-textarea' placeholder="Message"type='textarea' name='textarea'ref={register({ required: true })} ></textarea>
          </div>
          <p className='active_warning'>{errors.textarea && <p>To pole jest wymagane</p>}</p>

          <div className='active_form-checkbox'>
            <p>Zapoznałem się z RODO:</p>
            <input className='active_checkbox'type='checkbox' name='rodo' ref={register({ required: true })}></input>
          </div>
          <p className='active_warning'>{errors.rodo && <p>To pole jest wymagane</p>}</p>
        <div className='active_button-center'>
        <input className='active_button'type="submit"></input>
        </div>
      </form>
    
      </div>

    </div>
  )
}
