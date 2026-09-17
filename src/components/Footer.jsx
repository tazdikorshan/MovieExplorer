const Footer = () => {
  return (
    <footer className="footer">
      <div className="container footer-content">
        <div>
          <div className="footer-brand">
            <span>🎥</span>
            MovieExplorer
          </div>

          <p>Discover stories!</p>
        </div>

        <div className="footer-right">
          <p>Powered by TVMaze API</p>
          <p>©️ {new Date().getFullYear()} Movie Explorer</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
