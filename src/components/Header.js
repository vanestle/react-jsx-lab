function Header({ title, subtitle }) {
  return (
    <header style={styles.header}>
      <h1>{title}</h1>
      <p>{subtitle}</p>
    </header>
  );
}

const styles = {
  header: {
    background: '#2c3e50',
    color: 'white',
    padding: '1.5rem 2rem',
    marginBottom: '2rem'
  }
};

export default Header;