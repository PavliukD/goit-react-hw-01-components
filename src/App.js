import SocialProfile from './Components/social-profile/SocialProfile';
import './App.css';
import user from './Components/social-profile/user.json'

function App() {
  return (
    <div className="App">
      <SocialProfile 
      name = {user.name}
      tag = {user.tag}
      location = {user.location}
      avatar = {user.avatar}
      stats = {user.stats}
      />
    </div>
  );
}

export default App;
