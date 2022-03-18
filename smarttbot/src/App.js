import './App.css';
import Header from './components/Header/Header';
import Resume from './components/Resume/Resume';
import AddRobot from './components/AddRobot/AddRobot';
import Modal from './components/Modal/Modal';
import RobotContainer from './components/RobotContainer/RobotContainer';
import { useSelector } from 'react-redux';

function App() {
  const show = useSelector((state) => state.modal.show)

  return (
    <div className='container'>
      {show ? <Modal /> : <></>}
      <Header />
      <Resume />
      <AddRobot />
      <RobotContainer />
    </div>
  );
}

export default App;
