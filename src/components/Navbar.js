import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav>
      <Link to="/">Contacts</Link>
      <Link to="/add">+</Link>
    </nav>
  );
}

export default Navbar;