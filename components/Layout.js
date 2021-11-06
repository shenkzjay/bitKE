

// Function for the Layout template
function Layout({ children }) {
  return (
    <div>
      <div>{children}</div>
      <footer>
        <p>foooooter</p>
      </footer>
    </div>
  );
}

export default Layout;