import React from 'react'
import { Link,useMatch,useResolvedPath } from 'react-router-dom'


function Navbar() {
  return (
    <div>
        <nav className='navbar'>
                <Link to='/' className='site-name'>STARDUCKS🌟</Link>
                <ul>
                    <li>
                        <CustomLink to='/'>Home</CustomLink>
                    </li>
                    <li>
                        <CustomLink to='/menu'>Menu</CustomLink>
                    </li>
                  
                    <li>
                        <CustomLink to='/review'>Review</CustomLink>
                    </li>
                    <li>
                        <CustomLink to='/about'>About</CustomLink>
                    </li>
                    <li>
                        <CustomLink to='/login'>Login</CustomLink>
                    </li>
                  
                </ul>
        
        </nav>
      
    </div>
  )
}
function CustomLink({to,children,...props}){
    const resolvedPath = useResolvedPath(to)
    const isActive = useMatch({path: resolvedPath.pathname, end: true})
    return(
        <li classname={isActive ? "active" : ""}>
            <Link to={to}{...props}>
                {children}
            </Link>

        </li>

    );

}

export default Navbar;
