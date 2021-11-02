import SocialProfile from './Components/social-profile/SocialProfile';
import './App.css';
import user from './Components/social-profile/user.json'

function App() {
  return (
    <div className="App">
      <SocialProfile user={user}/>
    </div>
  );
}

export default App;
