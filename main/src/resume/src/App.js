import ExperienceInfo from './components/ExperienceInfo';
import * as UserInfo from './components/UserInfo';
import SkillInfo from './components/SkillsInfo';
import OtherInfo from './components/OtherInfo';

function App() {
  return (
    <div className="App">
      <header>
        <UserInfo.default />
      </header>
      <div class="flex-container">
        <div id="leftBox">
          <UserInfo.ProfileWrapper />
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
