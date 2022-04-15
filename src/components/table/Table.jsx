import React from "react";
import Appointment from "./Appointment";

import './Table.css'
import * as data from '../../data/appointments.json'


export default props => {
    const appointmentsData = Object.values(JSON.parse(JSON.stringify(data)))
    return (
        <table>
            <thead>
                <tr className="TableHead">
                    <th className="th">08:00</th>
                    <th className="th">08:30</th>
                    <th className="th">09:00</th>
                    <th className="th">09:30</th>
                    <th className="th">10:00</th>
                    <th className="th">10:30</th>
                    <th className="th">11:00</th>
                    <th className="th">11:30</th>
                    <th className="th">12:00</th>
                    <th className="th">12:30</th>
                    <th className="th">13:00</th>
                    <th className="th">13:30</th>
                    <th className="th">14:00</th>
                    <th className="th">14:30</th>
                    <th className="th">15:00</th>
                    <th className="th">15:30</th>
                    <th className="th">16:00</th>
                    <th className="th">16:30</th>
                    <th className="th">17:00</th>
                    <th className="th">17:30</th>
                    <th className="th">18:00</th>
                    <th className="th">18:30</th>
                    <th className="th">19:00</th>
                    <th className="th">19:30</th>
                    <th>20:00</th>
                </tr>
            </thead>
            <tbody>
                <Appointment appointments={appointmentsData}/>
            </tbody>
        </table>
    )
}