import  Link  from "next/link"


function Navbar() {
  return (
    <div>
      <ul>
        <li>
          <Link href="/">
            <a>Home</a>
          </Link>
        </li>

        <li>
          <Link href="/about">
            <a>About</a>
          </Link>
        </li>

        <li>
          <Link href="/features">
            <a>Features</a>
          </Link>
        </li>

        <li>
          <Link href="/contact">
            <a>Contact</a>
          </Link>
        </li>
        <li>
          <Link href="/admin_panel">
            <a>panel</a>
          </Link>
        </li>
      </ul>
    </div>
  );
}

export default Navbar;
