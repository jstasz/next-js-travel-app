import styles from "./MainNav.module.css";

function MainNav() {
  return (
    <header>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Travels</Link>
            </li>
            <li>
              <Link to="/new">New Travel</Link>
            </li>
          </ul>
        </nav>
        <p>plan your travel</p>
      </div>
    </header>
  );
}

export default MainNav;
