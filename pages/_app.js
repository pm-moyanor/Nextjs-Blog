import "../styles/globals.css";
import Link from "next/link";
import { useRouter } from "next/router";

// check for Layouts in docs
export default function App({ Component, pageProps }) {
  const router = useRouter;
  return (
    <>
      <div>
        <h1>Site</h1>
        <nav className="header-nav">
          <ul>
            <li>
              <Link className={router.pathname == "/" ? "active" : ""} href="/">
                Home
              </Link>
            </li>
            <li>
              <Link
                className={router.pathname == "/About" ? "active" : ""}
                href="/About"
              >
                About
              </Link>
            </li>
            <li>
              <Link
                className={router.pathname == "/Blog" ? "active" : ""}
                href="/Blog"
              >
                Blog
              </Link>
            </li>
          </ul>
        </nav>
      </div>
      <p>Header</p>
      <Component {...pageProps} />
    </>
  );
}
