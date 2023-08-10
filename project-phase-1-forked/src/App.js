import { Route, Routes, Link } from "react-router-dom";
import { BrowserRouter } from "react-router-dom";
import Home from "./Home";
import Login from "./Login";
import SearchBar from "./SearchBar";
import NavBar from "./NavBar";
import Register from "./Register";
import PlayerComparison from "./PlayerComparison";
import PlayerDetails from "./PlayerDetails";
import TeamDetails from "./TeamDetails";

const App = () => {
  return (
    <div>
      <header
        style={{ backgroundColor: "black", color: "gold", padding: "10px" }}
      >
        <h1>NBA Finder</h1>
      </header>
      <BrowserRouter>
        <nav>
          <Link to="/" style={{ marginRight: "10px" }}>
            Home
          </Link>
          <Link to="/search" style={{ marginRight: "10px" }}>
            Search Players
          </Link>
          <Link to="/login" style={{ marginRight: "10px" }}>
            Login
          </Link>
          <Link to="/register" style={{ marginRight: "10px" }}>
            Register
          </Link>
          <Link to="/compare" style={{ marginRight: "10px" }}>
            PlayerComparison
          </Link>
          <Link to="/team/:id" style={{ marginRight: "10px" }}>
            TeamDetails
          </Link>
          <Link to="/player/:id" style={{ marginRight: "10px" }}>
            PlayerDetails
          </Link>
          <Link to="/navbar" style={{ marginRight: "10px" }}>
            NavBar
          </Link>
        </nav>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/search" element={<SearchBar />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/player/:id" element={<PlayerDetails />} />
          <Route path="/team/:id" element={<TeamDetails />} />
          <Route path="/compare" element={<PlayerComparison />} />
          <Route path="/navbar" element={<NavBar />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
