import React from "react";
import { useState } from 'react';
import Job from "../Job/Job";

import './AppointmentModal.css';
const jobsData = require("../../data/jobsData.json");

const startTimes = ["08:00", "08:30", "09:00", "09:30", "10:00", "10:30", "11:00",
              "11:30", "12:00", "12:30", "13:00", "13:30", "14:00", "14:30",
              "15:00", "15:30", "16:00", "16:30", "17:00", "17:30", "18:00",
              "18:30", "19:00", "19:30"];

const jobDurations = ["00:30", "01:00", "01:30", "02:00", "02:30", "03:00", "03:30",
            "04:00","04:30", "05:00", "05:30", "06:00", "06:30", "07:00", "07:30", "08:00"];




export default (props) => {
    const [clientName, setClientName] = useState('');
    const [appointmentStart, setAppointmentStart] = useState(startTimes[0]);
    const [appointmentDuration, setAppointmentDuration] = useState(0);
    const [appointmentPrice, setAppointmentPrice] = useState(0);
    const [appointmentJobs, setAppointmentJobs] = useState([]);

    const timeToNumber = (time) => {
        time = time.split(':');
        return parseFloat(time[0]) + parseFloat(time[1])/60
    }


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
        else if(appointmentDuration + timeToNumber(appointmentStart)  > 20){
            window.alert("Soma de horário de início e duração de serviço ultrapassaram horário de fechamento da loja!");
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
                        <h1>X</h1>
                    </button>
                </header>
                <div className="bodyDiv">
                    <div className="leftDiv">
                        <label htmlFor="clientName">Nome do Cliente</label>
                        <input name="clientName" type="input"  onChange={(e) => setClientName(e.target.value)} />
                        <label>
                            Horário de Início:
                            <select onChange={(e) => setAppointmentStart(e.target.value)}>
                                {startTimes.map(time => <option value={time}>{time}</option>)}
                            </select>
                        </label>
                        <label>
                            Duração:
                            <select onChange={(e) => setAppointmentDuration(timeToNumber(e.target.value))}>
                                {jobDurations.map(duration => <option value={duration}>{duration}</option>)}
                            </select>
                        </label>
                        {/* <label htmlFor="appointmentStart">Horário de Início</label>
                        <input name="appointmentStart" type="input"  onChange={(e) => setAppointmentStart(e.target.value)} />
                        <label htmlFor="appointmentDuration">Duração</label>
                        <input name="appointmentDuration" type="input"  onChange={(e) => setAppointmentDuration(parseFloat(e.target.value))} /> */}
                        <button
                            onClick={addAppointment}
                        >
                            Agendar
                        </button>
                    </div>
                    <div className="rightDiv">
                        {jobsData.map(data =>
                            <Job data={data} key={data.id} addJob={addJob} />

                        )}
                    </div>
                </div>

            </div>
        </div>
    )
}