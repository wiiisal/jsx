import './App.css';
import FullName from './component/profile/fullName';
import ProfilePhoto from './component/profile/profilePhoto';
import Adress from './component/profile/adress';

function App() {
  return (
    <div className="App">
      <FullName/>
      <br/>
      <ProfilePhoto/>
      <Adress/>
    </div>
  );
}

export default App;
