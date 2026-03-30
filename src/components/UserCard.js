function UserCard({ name, email, role }) {
  return (
    <div style={styles.card}>
      <h3>{name}</h3>
      <p>{email}</p>
      <span style={styles.badge}>{role}</span>
    </div>
  );
}

const styles = {
  card: {
    background: 'white',
    border: '1px solid #ddd',
    borderRadius: '8px',
    padding: '1rem 1.2rem',
    display: 'flex',
    flexDirection: 'column',
    gap: '0.3rem'
  },
  badge: {
    background: '#2c3e50',
    color: 'white',
    padding: '0.2rem 0.6rem',
    borderRadius: '4px',
    fontSize: '0.8rem',
    width: 'fit-content'
  }
};

export default UserCard;