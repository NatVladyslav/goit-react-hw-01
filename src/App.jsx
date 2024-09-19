import Profile from './components/Profile/Profile'
import './App.css'
import userData from '../src/userData.json'
import friends from '../src/friendsData.json'
import Friendlist from './components/FriendList/FriendList';


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
      <Friendlist friends = {friends}/>
    </div>
  );
}

export default App
