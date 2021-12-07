import { Link } from "react-router-dom";

export default function NavBar() {
    return (
        <div>
            <nav className="navbar navbar-expand navbar-dark bg-dark">
                <div className="navbar-nav mr-auto">
                    <li className="nav-item">
                        <Link to={"/tutorials"} className="nav-link">
                            Tutorials
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link to={"/add"} className="nav-link">
                            Add
                        </Link>
                    </li> 
                </div>
            </nav>
        </div>
    )
}