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
      {errors.surname && <span>To pole jest wymagane</span>}
      </label>
      <label> 
        Podaj swój nr telefonu
      <input type="text" name="phone" ref={register({ required: true })}></input>
      {errors.phone && <span>To pole jest wymagane</span>}
      </label>
      <input type="submit" />
    
      {/* <label>
            <p>Wpisz swoje imię</p>
            <input name="name"/>
      </label>
      <label>
            <p>Wpisz swoje nazwisko</p>
            <input name="name"/>
      </label>
      <label>
            <p>Podaj swój numer telefonu</p>
            <input name="name"/>
      </label>
      <label>
      <p className='docText'>Wybierz lekarza</p>
        <select>
          <option>Lek.Kowalski</option>
          <option>Lek.Magnuszewski</option>
          <option>
            Lek.Predator
          </option>
        </select>
      </label>
      <p className='dateText'>Wybierz interesujący Cię dzień</p>
      <label>
        <select>
          <option>Poniedziałek</option>
          <option>Wtorek</option>
          <option>
            Środa
          </option>
          <option>
            Czwarek
          </option>
          <option>
            Piątek
          </option>
        </select>
      </label>
      <p>Wybierz interesującą się godzinę</p>
      <label>
        <select>
          <option>8:00</option>
          <option>9:00</option>
          <option>
            10:00
          </option>
          <option>
            11:00
          </option>
          <option>
            12:00
          </option>
          <option>
            13:00
          </option>
          <option>
            14:00
          </option>
          <option>
            15:00
          </option>
        </select>
      </label>
      <p>zapoznałem się z treścią klauzuli RODO</p>
      <input type="checkbox"/>
      <button type="submit">Submit</button>
      <h3>Informujemy, że potwierdzenie wizyty przyjdzie do Państwa drogą telefoniczną </h3> */}
      </form>
    </div>
  )
}

