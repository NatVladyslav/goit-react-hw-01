import Profile from './components/Profile/Profile'
import './App.css'
import userData from '../src/userData.json'
import friends from '../src/friendsData.json'
import transactions from './transactionHistory.json'
import Friendlist from './components/FriendList/FriendList';
import TransactionHistory from './components/TransactionHistory/TransactionHistory';


function App() {
  return (
    <div>
    <Profile
    name={userData.username}
    tag={userData.tag}
    location={userData.location}
    image={userData.avatar}
    stats={userData.stats}
    />
      <Friendlist friends={friends} />
      <TransactionHistory items={transactions}/>
    </div>
  );
}

export default App
