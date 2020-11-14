import React, {useState} from 'react';
import '../../App.css';
import {useForm} from 'react-hook-form'
import { firestore } from './firebase'


export default function ContactUs() {
  const { register, handleSubmit, errors } = useForm();
  const onSubmit = data => console.log(data);


  
  return (
    <div className='container'>
      <div className='date'>
        <h1>Przychodnia VET</h1>
        <p>Adres: ul. Pieskowa 13b, 10-001 Pieskowo Górne</p>
        <p>Numer tel: 11 333 222 11</p>
        <p>Adres mail: pieskigórą@pieski.pl</p>
        <p>Nr NIP: 313-1313-22-11</p>
        <p>KRS: 313- 222 222</p>
      </div>
      <div className='date-active'>
        <h1>Napisz do nas wiadomość</h1>
        <form onSubmit={handleSubmit(onSubmit)}>
          <label> 
            Podaj swój adres email:
            <input type="text" name="email" ref={register({ required: true })}></input>
            <p>{errors.email && <span>To pole jest wymagane</span>}</p>
          </label>
          <label> 
            Wpisz treść wiadmości:
            <textarea type='textarea' name='textarea'ref={register({ required: true })} ></textarea>
            <p>{errors.textarea && <span>To pole jest wymagane</span>}</p>
          </label>
          <label>
          Zapoznałem się z klauzulą RODO
            <input type='checkbox' name='rodo' ref={register({ required: true })}></input>
            {errors.rodo && <span>To pole jest wymagane</span>}
        </label>
        <input type="submit" />
      </form>
      </div>

    </div>
  )
}
