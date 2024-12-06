import { Link } from "react-router-dom";

function NavBar() {
  return (
    <header>
      <div className="container">
        <Link to="/">
          <h2>Workout Buddy</h2>
        </Link>
      </div>
    </header>
  );
}

export default NavBar;
