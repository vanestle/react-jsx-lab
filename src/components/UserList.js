import UserCard from './UserCard';

function UserList({ users }) {
  return (
    <main style={styles.main}>
      <h2>User List</h2>
      <div style={styles.grid}>
        {users.map((user, index) => (
          <UserCard
            key={index}
            name={user.name}
            email={user.email}
            role={user.role}
          />
        ))}
      </div>
    </main>
  );
}

const styles = {
  main: {
    padding: '0 2rem'
  },
  grid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fill, minmax(220px, 1fr))',
    gap: '1rem',
    marginTop: '1rem'
  }
};

export default UserList;