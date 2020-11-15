import React from 'react';
import './appointment.scss'
import {useForm} from 'react-hook-form'

export default function Appoint() {

  const { register, handleSubmit, errors } = useForm();
  const onSubmit = data => console.log(data);
  
  return (
    <div className='container'>
      <h1 className='formTitle'>Umów wizytę</h1>

      <form className='container_form'onSubmit={handleSubmit(onSubmit)}>
        <label> 
          Podaj swoje imię
          <input className='form_name' placeholder="name" type="text" name="name" ref={register({ required: true })}></input>
          <p>{errors.name && <span>To pole jest wymagane</span>}</p>
        </label>

        <label> 
          Podaj swoje nazwisko
          <input className='form_surname' placeholder="surname" type="text" name="surname" ref={register({ required: true })}></input>
          <p>{errors.surname && <span>To pole jest wymagane</span>}</p>
        </label>

        <label> 
          Podaj swój nr telefonu
          <input className='form_number'placeholder="lelephone number" type="number" name="phone" ref={register({ required: true })}></input>
          {errors.phone && <span>To pole jest wymagane</span>}
        </label>

        <label> 
          Wybierz lekarza
          <select className='form_select-doc'name="doctor" ref={register}>
            <option className='form_dec_-option'>Lek. wet. Predator</option>
            <option className='form_dec_-option'>Lek. wet. Kowalski</option>
            <option className='form_dec_-option'>Lek. wet. Nowak</option>
          </select>
        </label>

        <label> 
          Wybierz interesujący Cię dzień
          <select className='form_select-day' name="day" ref={register}>
            <option className='form_day-option'>Poniedziałek</option>
            <option className='form_day-option'>Wtorek</option>
            <option className='form_day-option'>Środa</option>
            <option className='form_day-option'> Czwartek</option>
            <option className='form_day-option'>Piątek</option>
          </select>
        </label>

        <label> 
          Wybierz interesującą Cię godzinę
          <select className='form_select-hour' name="hour" ref={register}>
            <option className='form_day-option'>8:00</option>
            <option className='form_day-option' >10:00</option>
            <option className='form_day-option' >9:00</option>
            <option className='form_day-option' >11:00</option>
            <option className='form_day-option' >12:00</option>
            <option className='form_day-option' >13:00</option>
            <option className='form_day-option' >14:00</option>
            <option className='form_day-option' >15:00</option>
            <option className='form_day-option' >16:00</option>
          </select>
        </label>
        <label>
          Zapoznałem się z klauzulą RODO
            <input className='form_checkbox' type='checkbox' name='rodo' ref={register({ required: true })}></input>
            {errors.rodo && <span>To pole jest wymagane</span>}
        </label>
      <input className='form_button'type="submit" />
      </form>
      <h1>Informujemy, że wszelkie wizyty potwierdzamy drogą telefoniczną</h1>
    </div>
  )
}

