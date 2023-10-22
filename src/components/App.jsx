import user from '../assets/user.json';
import { Profile } from './Profile/Profile';
import  Statistics  from './Statistics/Statistics';
import data from '../assets/data.json';
import  FriendList  from './FriendList/Friends';
import friends from '../assets/friends.json';
import  {TransactionHistory}  from './Transactions/transactions';
import transactions from '../assets/transactions.json';

function App() {
  return (
    <div>
      <Profile user={user} />
      <Statistics title="Upload stats" stats={data} />
      <FriendList friends={friends} />
      <TransactionHistory
        transactions={transactions} />;
    </div>
  );
}

export default App;
