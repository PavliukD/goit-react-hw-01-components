import './App.css';
import SocialProfile from './components/SocialProfile/SocialProfile'
import Statistics from './components/Statistics/Statistics'
import FriendsList from './components/FriendsList/FriendsList'
import TransactionHistory from './components/TransactionHistory/TransactionHistory'
import user from './components/SocialProfile/user.json'
import statisticalData from './components/Statistics/Statistics.json'
import friends from './components/FriendsList/FriendsList.json'
import transactions from './components/TransactionHistory/TransactionHistory.json'


function App() {
  return (
    <div className = "App">
      <SocialProfile
      name = {user.name}
      tag={user.tag}
      location={user.location}
      avatar={user.avatar}
      stats = {user.stats}
      />

      <Statistics title='Upload stats' stats={statisticalData} />

      <FriendsList friends = {friends}/>
      
      <TransactionHistory items = {transactions} />

    </div>
  )

}

export default App;
