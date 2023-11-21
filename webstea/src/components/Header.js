import logo from '../images/logo.png';
import '../styles/Header.css';

function Header() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Hello Team!
        </p>
      </header>
    </div>
  );
}

export default Header;
