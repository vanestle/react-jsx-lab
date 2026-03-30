function Footer() {
  return (
    <footer style={styles.footer}>
      <p>React Component Hierarchy Lab &copy; 2025</p>
    </footer>
  );
}

const styles = {
  footer: {
    background: '#2c3e50',
    color: 'white',
    textAlign: 'center',
    padding: '1rem',
    marginTop: '2rem',
    fontSize: '0.85rem'
  }
};

export default Footer;