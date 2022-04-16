import { weightedIntervalScheduling } from './algorithm/weightedIntervalScheduling';
import './App.css';
import Navbar from './components/Navbar';
import Table from './components/table/Table';
const appointmentsData = require("./data/appointments.json");


function App() {

  const handleSearch = () => {
    const answer = weightedIntervalScheduling(appointmentsData);
    for(let i = 0; i < answer.length; i++){
      console.log(appointmentsData[answer[i]]);
    }
  }

  return (
    <div className='Page'>
      <Navbar></Navbar>
      <Table></Table>
      <button onClick={handleSearch}>Gerar Melhor Horário</button>
    </div>
  );
}

export default App;
