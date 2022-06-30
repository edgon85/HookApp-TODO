import { Link, NavLink } from 'react-router-dom'

export const NavBar = () => {
  return (
    <>
    <nav>
      <h1>useContex</h1>
      <div className="links">
      <NavLink to="/" className={({isActive}) => `${isActive &&  'active'}`}>Home</NavLink>
      <NavLink to="/about" className={({isActive}) => `${isActive &&  'active'}`}>About</NavLink>
      <NavLink to="/login" className={({isActive}) => `${isActive &&  'active'}`}>Login</NavLink>

      </div>
    </nav>
    </>
  )
}
