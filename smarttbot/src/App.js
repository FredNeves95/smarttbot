import './App.css';
import Header from './components/Header/Header';
import Resume from './components/Resume/Resume';
import AddRobot from './components/AddRobot/AddRobot';
import RobotContainer from './components/RobotContainer/RobotContainer';

function App() {
  return (
    <div className='container'>
      <Header />
      <Resume />
      <AddRobot />
      <RobotContainer />
    </div>
  );
}

export default App;
