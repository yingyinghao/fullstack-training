import { Link } from "react-router-dom";
const Nav=()=>{
  const category=["mens","womens","kids"];
    return (
        <>
          <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
  <div className="container-fluid">
    <Link className="navbar-brand" to="/">My Application</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav">
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to="/">Home</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/about">About Us</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/counter">Counter</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/gallery">Gallery</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/contact">Contact Us</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/users">Users</Link>
        </li>
        <li className="nav-item dropdown">
          <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Category
          </a>
          <ul className="dropdown-menu" aria-labelledby="navbarDropdown">

            {category.map((val,ind)=> 
              <li key={ind}><Link className="dropdown-item" to={`/category/${val}`}> {val}</Link></li>
            )
            }
            
            
          </ul>
        </li>
      </ul>
    </div>
  </div>
</nav>
        </>
    )
}
export default Nav;