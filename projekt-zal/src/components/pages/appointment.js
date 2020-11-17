import React from "react";
import "./appointment.scss";
import { useForm } from "react-hook-form";
import { firestore } from "./firebase";

export default function Appoint() {
  const { register, handleSubmit, errors } = useForm();
  const onSubmit = (data) => {
    const { name, surname, phone, doctor, day, hour, rodo } = data;
    firestore.collection("appointments").add({
      name,
      surname,
      phone,
      doctor,
      day,
      hour,
      rodo,
    }).then(() => {
      alert('Udało się wysłać formularz')
    }).catch(err => console.error(err))
  };

  return (
    <div className="container">
      <h1 className="formTitle">Umów wizytę</h1>

      <form className="container_form" onSubmit={handleSubmit(onSubmit)}>
       <div className='name_container'>
          <p className='name_text' >Podaj swoje imię:</p>
          <div className='name_inner-container'>
            <input
            className="form_name"
            placeholder="name"
            type="text"
            name="name"
            ref={register({ required: true })}
            ></input>
            {errors.name && <p className="warning">To pole jest wymagane</p>
          }
          </div>
        </div>
      <div className='surname_container'>
        <p className='surname_text' >Podaj swoje nazwisko:</p>
        <div className='surname_inner-container'>
          <input
            className="form_surname"
            placeholder="surname"
            type="text"
            name="surname"
            ref={register({ required: true })}
          ></input>
          {errors.surname && <p className="warning">To pole jest wymagane</p>}
        </div>
      </div>
      <div className='phone_container'>
        <p className='phone_nr' >Podaj swój numer telefonu:</p>
        <div className='phone_inner-container'>
          <input
            className="form_number"
            placeholder="telephone number"
            type="number"
            name="phone"
            ref={register({ required: true })}
          ></input>
          {errors.phone && <p className="warning">To pole jest wymagane</p>}
          </div>
        </div>
    
        <div className='appoint_doctor'>
          <p>Wybierz lekarza:</p>
          <select className="form_select-doc" name="doctor" ref={register}>
            <option className="form_dec_-option">Lek. wet. Predator</option>
            <option className="form_dec_-option">Lek. wet. Kowalski</option>
            <option className="form_dec_-option">Lek. wet. Nowak</option>
            <option className="form_dec_-option">Lek. wet. Janusz</option>
          </select>
        </div>

        <div className='day_container'>
          <p>Wybierz dzień wizyty:</p>
          <select className="form_select-day" name="day" ref={register}>
            <option className="form_day-option">Poniedziałek</option>
            <option className="form_day-option">Wtorek</option>
            <option className="form_day-option">Środa</option>
            <option className="form_day-option"> Czwartek</option>
            <option className="form_day-option">Piątek</option>
          </select>
          </div>

        <div className='hour_container'>
          <p>Podaj godzinę wizyty</p>
          <select className="form_select-hour" name="hour" ref={register}>
            <option className="form_day-option">8:00</option>
            <option className="form_day-option">10:00</option>
            <option className="form_day-option">9:00</option>
            <option className="form_day-option">11:00</option>
            <option className="form_day-option">12:00</option>
            <option className="form_day-option">13:00</option>
            <option className="form_day-option">14:00</option>
            <option className="form_day-option">15:00</option>
            <option className="form_day-option">16:00</option>
          </select>
        </div>
        <div className='rodo_container'>
          <p className='rodo_text'>Zapoznałem sie z RODO</p>
          <div className='rodo_container-inner'>
          <input
            className="form_checkbox"
            type="checkbox"
            name="rodo"
            ref={register({ required: true })}
          ></input>
          {errors.rodo && <p className="warning">To pole jest wymagane</p>}
          </div>
        </div>
        <input className="form_button" type="submit" />
        <h1 className="form_approval">
          Informujemy, że wszelkie wizyty potwierdzamy drogą telefoniczną
        </h1>
      </form>
    </div>
  );
}
