import user from '../assets/user.json';
import { Profile } from './Profile/Profile';
import  Statistics  from './Statistics/Statistics';
import data from '../assets/data.json';

function App() {
  return (
    <div>
      <Profile user={user} />
      <Statistics title="Upload stats" stats={data} />
    </div>
  );
}

export default App;
