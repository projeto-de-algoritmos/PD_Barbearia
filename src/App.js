import { useState } from 'react';
import { weightedIntervalScheduling } from './algorithm/weightedIntervalScheduling';
import './App.css';
import AppointmentModal from './components/AppointmentModal/AppointmentModal';
import Navbar from './components/Navbar/Navbar';
import Table from './components/Table/Table';

const appointmentsData = require("./data/appointments.json");


function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  let [answer, setAnswer] = useState([]);


  const handleSearch = () => {
    setAnswer(weightedIntervalScheduling(appointmentsData));
    for(let i = 0; i < answer.length; i++){
      console.log(appointmentsData[answer[i]]);
    }
    setAnswer(weightedIntervalScheduling(appointmentsData));
  }

  const openAppointmentModal = () => {
    setIsModalOpen(true);
  }

  return (
    <div className='page'>
      <Navbar></Navbar>
      <div className="buttons">
        <button onClick={openAppointmentModal}>Realizar Agendamento</button>
        <button onClick={handleSearch}>Gerar Melhor Horário</button>
      </div>
      <Table appointmentsData={appointmentsData}></Table>
      {answer.length > 0 && <Table answer={answer} appointmentsData={appointmentsData}></Table>}
      {isModalOpen && <AppointmentModal setIsModalOpen={setIsModalOpen} appointmentsData={appointmentsData}/>}
    </div>
  );
}

export default App;
