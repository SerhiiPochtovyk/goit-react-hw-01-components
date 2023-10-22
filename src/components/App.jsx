import user from '../assets/user.json';
import { Profile } from './Profile/Profile';
import  Statistics  from './Statistics/Statistics';
import data from '../assets/data.json';
import  FriendList  from './FriendList/Friends';
import friends from '../assets/friends.json'

function App() {
  return (
    <div>
      <Profile user={user} />
      <Statistics title="Upload stats" stats={data} />
      <FriendList friends={friends} />
    </div>
  );
}

export default App;
