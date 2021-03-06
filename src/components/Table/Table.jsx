import React from "react";
import Appointment from "../Appointment/Appointment";
import { HiCurrencyDollar } from 'react-icons/hi';

import './Table.css'



export default props => {

    const getTotal = () => {
        let total = 0;
        for(let i = 0; i < props.answer.length; i++){
            total += props.appointmentsData[props.answer[i]].price;
        }
        return total;
    }

    return (
        <table>
            <thead>
                {props.answer != undefined ?
                    <tr><th colSpan={25} style={{backgroundColor: "rgb(89, 89, 89)"}}>Agenda do dia
                    <span className="ValorArrecadado">Arrecadação total: <HiCurrencyDollar/>{getTotal()}</span></th></tr> :
                    ''
                }
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
                {props.answer == undefined ?
                    <Appointment appointments={props.appointmentsData}/> :
                    <Appointment answer={props.answer} appointments={props.appointmentsData}></Appointment>}
            </tbody>
        </table>
    )
}