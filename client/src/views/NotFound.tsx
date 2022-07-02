import { Link } from "react-router-dom";

function NotFound() {
  return (
    <div>
      <h2>Not found</h2>
      <Link to='/'>Home</Link>
      <Link to='/about'>About</Link>
      <Link to='/equipment'>Equipment</Link>
    </div>
  );
}

export default NotFound;
