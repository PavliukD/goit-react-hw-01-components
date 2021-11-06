import './App.css';
import SocialProfile from './social-profile/SocialProfile';
import Statistics from './statistics/Statistics';
import FriendsList from './FriendsList/FriendsList'
import TransactionHistory from './transactions/Transactions';
import user from './social-profile/user.json'
import statisticalData from './statistics/statistics.json'
import transactions from './transactions/transaction.json'

function App() {
  return (
    <div>
      <SocialProfile
      name = {user.name}
      tag={user.tag}
      location={user.location}
      avatar={user.avatar}
      stats = {user.stats}
      />

      <Statistics title='Upload stats' stats={statisticalData} />

      <FriendsList />
      
      <TransactionHistory items = {transactions} />

    </div>
  )

}

export default App;
