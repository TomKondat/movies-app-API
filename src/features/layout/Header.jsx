import "./layout.css";
import Navbar from "./Navbar";
const Header = ({handleSearch}) => {
  return (
    <>
      <header className='header'>
        <h1>Movie Finder</h1>
      </header>
      <Navbar handleSearch={handleSearch} />
    </>
  );
};
export default Header;
