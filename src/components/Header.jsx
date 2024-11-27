import logo from '../assets/logo.jpg';
import './Header.css';

export default function Header() {
  return (
    <header>
      <img src={logo} alt="A canvas" />
      <h1>AI reactions</h1>
      <p>A community of AI-lovers.</p>
    </header>
  );
}
