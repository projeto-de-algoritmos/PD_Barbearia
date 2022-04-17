import React from "react";
import { useState } from 'react';
import Job from "../Job/Job";

import './AppointmentModal.css';
const jobsData = require("../../data/jobsData.json");



export default (props) => {
    const [clientName, setClientName] = useState('');
    const [appointmentStart, setAppointmentStart] = useState('');
    const [appointmentDuration, setAppointmentDuration] = useState('');
    const [appointmentPrice, setAppointmentPrice] = useState(0);
    const [appointmentJobs, setAppointmentJobs] = useState([]);

    const addJob = (job, price) => {
        const jobs = appointmentJobs;
        const index = jobs.indexOf(job);

        if (index > -1) {
            jobs.splice(index, 1);
            setAppointmentJobs(jobs);
            setAppointmentPrice(appointmentPrice - price); 
        }else{
            jobs.push(job);
            setAppointmentJobs(jobs);
            setAppointmentPrice(appointmentPrice + price);
        }
    }

    const addAppointment = () => {
        if(clientName === '' || appointmentStart === '' || appointmentDuration === '' || appointmentPrice === 0 || appointmentJobs.length === 0){
            window.alert("Preencha Todos os Campos!");
        }
        else{
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

    }


    return (
        <div className="modal">
            <div className="main">
                <header>
                    <strong>Agendamento</strong>
                    <button onClick={() => props.setIsModalOpen(false)}>
                        {/* <img src="/images/close.svg" alt="fechar" /> */}
                        <h1>X</h1>
                    </button>
                </header>
                <div className="bodyDiv">
                    <div className="leftDiv">
                        <label htmlFor="clientName">Nome do Cliente</label>
                        <input name="clientName" type="input"  onChange={(e) => setClientName(e.target.value)} />
                        <label htmlFor="appointmentStart">Horário de Início</label>
                        <input name="appointmentStart" type="input"  onChange={(e) => setAppointmentStart(e.target.value)} />
                        <label htmlFor="appointmentDuration">Duração</label>
                        <input name="appointmentDuration" type="input"  onChange={(e) => setAppointmentDuration(parseFloat(e.target.value))} />
                        <button
                            onClick={addAppointment}
                        >
                            Agendar
                        </button>
                    </div>
                    <div className="rightDiv">
                        {jobsData.map(data =>
                            // <div key={data.id} onClick={() => addJob(data.job, data.price)}>
                            //     {data.job}
                            //     ...Valor: R$ {data.price}
                            // </div>
                            <Job data={data} key={data.id} addJob={addJob} />

                        )}
                    </div>
                </div>

            </div>
        </div>
    )
}