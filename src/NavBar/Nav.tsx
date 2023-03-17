import { Link } from 'react-router-dom';
import './Nav.scss';

function Nav() {
  return (
    <div className='nav-bar'>
      <h3>
        <em>Zach Hall</em>
      </h3>
      <div className='nav-links'>
        <Link className='link' to='/'>
          Home
        </Link>
        <Link className='link' to='/projects'>
          Projects
        </Link>
        <Link className='link' to='/about'>
          About
        </Link>
      </div>
    </div>
  );
}

export default Nav;
