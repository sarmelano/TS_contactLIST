import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav>
      <Link to="/">Список контактів</Link>
      <Link to="/add">Додати контакт</Link>
    </nav>
  );
}

export default Navbar;
