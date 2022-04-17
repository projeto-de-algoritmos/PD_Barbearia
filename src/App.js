import { useState } from 'react';
import { weightedIntervalScheduling } from './algorithm/weightedIntervalScheduling';
import './App.css';
import AppointmentModal from './components/AppointmentModal/AppointmentModal';
import Navbar from './components/Navbar';
import Table from './components/table/Table';

const appointmentsData = require("./data/appointments.json");


function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  let [answer, setAnswer] = useState([]);


  const handleSearch = () => {
    setAnswer(weightedIntervalScheduling(appointmentsData));
    for(let i = 0; i < answer.length; i++){
      console.log(appointmentsData[answer[i]]);
    }
  }

  const openAppointmentModal = () => {
    setIsModalOpen(true);
  }

  return (
    <div className='Page'>
      <Navbar></Navbar>
      {answer.length > 0 ? <Table answer={answer} appointmentsData={appointmentsData}></Table>: ''}
      <button onClick={openAppointmentModal}>Realizar Agendamento</button>
      <Table appointmentsData={appointmentsData}></Table>
      <button onClick={handleSearch}>Gerar Melhor Horário</button>
      {isModalOpen && <AppointmentModal setIsModalOpen={setIsModalOpen} appointmentsData={appointmentsData}/>}
    </div>
  );
}

export default App;
