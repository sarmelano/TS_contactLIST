import { Link } from 'react-router-dom';

const Navbar: React.FC = () => {
  return (
    <nav>
      <Link to="/">Contacts</Link>
      <Link to="/add"> + </Link>
    </nav>
  );
}

export default Navbar;
