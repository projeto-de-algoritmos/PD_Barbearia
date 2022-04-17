import React from "react";
import { useState } from 'react';

import './AppointmentModal.css';
const hairData = require("../../data/hairData.json");



export default (props) => {
    const [clientName, setClientName] = useState('');
    const [appointmentStart, setAppointmentStart] = useState('');
    const [appointmentDuration, setAppointmentDuration] = useState('');
    const [appointmentPrice, setAppointmentPrice] = useState(0);
    const [appointmentJobs, setAppointmentJobs] = useState([]);

    const addJob = (job, price) => {
        const jobs = appointmentJobs;

        jobs.push(job);
        setAppointmentJobs(jobs);
        setAppointmentPrice(appointmentPrice + price);
    }

    const addAppointment = () => {
        props.appointmentsData.push({
            "client": clientName,
            "job": appointmentJobs,
            "price": appointmentPrice,
            "start": appointmentStart,
            "duration": appointmentDuration
        })

        props.setIsModalOpen(false)
        console.log(props.appointmentsData)
    }


    return (
        <div className="modal">
            <div className="main">
                <header>
                    <strong>Agendar</strong>
                    <button onClick={() => props.setIsModalOpen(false)}>
                        {/* <img src="/images/close.svg" alt="fechar" /> */}
                        <h1>X</h1>
                    </button>
                </header>
                <label htmlFor="clientName">Nome do Cliente</label>
                <input name="clientName" type="input"  onChange={(e) => setClientName(e.target.value)} />
                <label htmlFor="appointmentStart">Horário de Início</label>
                <input name="appointmentStart" type="input"  onChange={(e) => setAppointmentStart(e.target.value)} />
                <label htmlFor="appointmentDuration">Duração</label>
                <input name="appointmentDuration" type="input"  onChange={(e) => setAppointmentDuration(parseFloat(e.target.value))} />
                {hairData.map(data =>
                    <div key={data.id} onClick={() => addJob(data.job, data.price)}>
                        {data.job}
                        ...Valor: R$ {data.price}
                    </div>

                )}
                <button
                    onClick={addAppointment}
                >
                    Agendar
                </button>

            </div>
        </div>
    )
}