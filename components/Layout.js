import Navbar from "./Navbar";

// Function for the Layout template
function Layout({ children }) {
  return (
    <div>
        <Navbar />
      <div>{children}</div>
      <footer>
        <p>copyright 2021</p>
      </footer>
    </div>
  );
}

export default Layout;