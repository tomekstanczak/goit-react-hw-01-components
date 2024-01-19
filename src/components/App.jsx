import FriendList from './friendlist/friendlist';
import friends from '../data/friends.json';
import Profile from './profile/profile';
import user from '../data/user.json';
import Statistics from './statistics/statistics';
import data from '../data/data.json';
import TransactionHistory from './transactionhistory/transactionhistory';
import transactions from '../data/transactions.json';

export const App = () => {
  return (
    <div
      style={{
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 40,
        color: '#010101',
      }}
    >
      <Profile
        key={user.username}
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
      <Statistics title="Upload stats" stats={data} />
      <FriendList friends={friends} />
      <TransactionHistory items={transactions} />
    </div>
  );
};
