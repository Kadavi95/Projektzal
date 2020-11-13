import React from 'react';
import '../../App.css';
import {useForm} from 'react-hook-form'

export default function Appoint() {

  const { register, handleSubmit, errors } = useForm();
  const onSubmit = data => console.log(data);
  
  return (
    <div className='container'>
      <h1 className='formTitle'>Umów wizytę</h1>

      <form onSubmit={handleSubmit(onSubmit)}>
        <label> 
          Podaj swoje imię
          <input type="text" name="name" ref={register({ required: true })}></input>
          <p>{errors.name && <span>To pole jest wymagane</span>}</p>
        </label>

        <label> 
          Podaj swoje nazwisko
          <input type="text" name="surname" ref={register({ required: true })}></input>
          <p>{errors.surname && <span>To pole jest wymagane</span>}</p>
        </label>

        <label> 
          Podaj swój nr telefonu
          <input type="number" name="phone" ref={register({ required: true })}></input>
          {errors.phone && <span>To pole jest wymagane</span>}
        </label>

        <label> 
          Wybierz lekarza
          <select name="doctor" ref={register}>
            <option>Dr.Predator</option>
            <option>Dr.Kowalski</option>
            <option>Dr.Nowak</option>
          </select>
        </label>

        <label> 
          Wybierz interesujący Cię dzień
          <select name="day" ref={register}>
            <option>Poniedziałek</option>
            <option>Wtorek</option>
            <option>Środa</option>
            <option>Czwartek</option>
            <option>Piątek</option>
          </select>
        </label>

        <label> 
          Wybierz interesującą Cię godzinę
          <select name="hour" ref={register}>
            <option>8:00</option>
            <option>9:00</option>
            <option>10:00</option>
            <option>11:00</option>
            <option>12:00</option>
            <option>13:00</option>
            <option>14:00</option>
            <option>15:00</option>
            <option>16:00</option>
          </select>
        </label>
        <label>
          Zapoznałem się z klauzulą RODO
            <input type='checkbox' name='rodo' ref={register({ required: true })}></input>
            {errors.rodo && <span>To pole jest wymagane</span>}
        </label>
      <input type="submit" />
      </form>
      <h1>Informujemy, że wszelkie wizyty potwierdzamy drogą telefoniczną</h1>
    </div>
  )
}

