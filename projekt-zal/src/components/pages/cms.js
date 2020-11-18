import React, { useState, useEffect } from "react";
import "./cms.scss";
import { firestore } from "./firebase";

export default function CMS() {
  const [appointments, setAppointments] = useState([]);
  const [messeges, setMesseges] = useState([]);

  useEffect(() => {
    firestore
      .collection("appointments")
      .get()
      .then((querySnapshot) => {
        const arr = [];
        querySnapshot.forEach((doc) => {
          const obj = {
            id: doc.id,
            ...doc.data(),
          };
          arr.push(obj);
        });

        setAppointments(arr);
      });

    firestore
      .collection("messages")
      .get()
      .then((querySnapshot) => {
        const arr = [];
        querySnapshot.forEach((doc) => {
          const obj = {
            id: doc.id,
            ...doc.data(),
          };
          arr.push(obj);
        });
        setMesseges(arr);
      });
  }, []);

  return (
    <div className="container-cms">
      <p className="cms-title-section">Umówione wizyty</p>
      <div className="cms-lists">
        <ul>
          {appointments.map((el, i) => (
            <li key={`appointments_${i}`}>
              <span>{el.name}</span>
              <span>{el.surname}</span>
              <span>{el.phone}</span>
              <span>{el.doctor}</span>
              <span>{el.day}</span>
              <span>{el.hour}</span>
            </li>
          ))}
        </ul>
      </div>
      <p className="cms-title-section">Wiadomości od użytkowników</p>
      <div className="cms-lists">
        {messeges.map((el, i) => (
          <li key={`message_${i}`}>
            <span>{el.email}</span>
            <span>{el.textarea}</span>
          </li>
        ))}
      </div>
    </div>
  );
}
