import React from "react";

import './Appointment.css'
const ROWS = ["08:00", "08:30", "09:00", "09:30", "10:00", "10:30", "11:00",
              "11:30", "12:00", "12:30", "13:00", "13:30", "14:00", "14:30",
              "15:00", "15:30", "16:00", "16:30", "17:00", "17:30", "18:00",
              "18:30", "19:00", "19:30", "20:00",]

export default props => {

    function setSchedule() {
        let times = [];
        let durations = [];
        let columns = 0;
        for (let i = 0; i < props.answer.length; i++){
            let y = props.answer[i]
            let j = ROWS.indexOf(props.appointments[y].start, 0);

            times.push(ROWS[j]);
            durations.push(props.appointments[y].duration * 2);
        }

        return ROWS.map((row, i) => {
            let pos = times.indexOf(row, 0)
            if (pos != -1) {
                columns = durations[pos] - 1;
                pos = -1;
                return (
                    <td key={i} colSpan={columns + 1}>
                        <div className="AppointmentBlock">{props.appointments[columns + 1].job}</div>
                    </td>
                );
            }
            else if (columns) {
                columns--;
                return;
            }
            else {
                return (
                    <td key={i}></td>
                );
            }
        });
    };

    function getLines(job, start, duration) {
        let columns = 0;
        return ROWS.map((_, i) => {
            if (start === ROWS[i]) {
                columns = duration*2;
                return (
                    <td key={i} colSpan={duration*2}>
                        <div className="AppointmentBlock">{job}</div>
                    </td>
                );
            }
            else if (columns) {
                columns--;
                return;
            }
            else {
                return (
                    <td key={i}></td>
                );
            }
        });
    };

    if (props.answer == undefined) {
        return props.appointments.map((element, i) => {
                return (
                    <tr key={i}>
                        { getLines(element.job, element.start, element.duration) }
                    </tr>
                )
        });
    }
    else {
        return (
            <tr>
                { setSchedule() }
            </tr>
        )
    };
};