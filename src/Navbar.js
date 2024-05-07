import {Link} from 'react-router-dom'


const Navbar = () => {
    return (
        <nav className="navbar">
            <h1>The Open Blog</h1>
            <div className="links">
                {/* <a href="/">Home</a>  
                <a href="/create">New Blog</a> */}
                <Link to="/">Home</Link>  
                <Link to="/create">New Blog</Link>
                {/* <a href="/create" style={{color: 'white',backgroundColor:"f1356d",borderRadius:'8px'}}>New Blog</a> */}
            </div>
        </nav>
      );
}
 
export default Navbar;























/*First criteria about navbar.js components
const Navbar = () => {
    return (
        <nav className="navbar">
            <h1>The Open Blog</h1>
            <div className="links">
                <a href="/">Home</a>
                 <a href="/create" style={{color: 'white',backgroundColor:"f1356d",borderRadius:'8px'}}>New Blog</a> // comments
                <a href="/create">New Blog</a>
            </div>
        </nav>
      );
}
 
export default Navbar;

*/