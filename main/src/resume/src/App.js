import logo from './logo.svg';
import './App.css';
import ExperienceInfo from './components/ExperienceInfo';
import UserInfo from './components/UserInfo';
import SkillInfo from './components/SkillsInfo';
import OtherInfo from './components/OtherInfo';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      <div class="flex-container">
        <div id="leftBox">
          <UserInfo />
          <SkillInfo />
          <OtherInfo />
        </div>
        <div id="mainBox">
          <ExperienceInfo />
        </div>
      </div>
      
    </div>
  );
}

export default App;
