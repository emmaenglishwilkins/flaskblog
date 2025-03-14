import  { Link } from "react-router-dom"

export function NavBar() {
    return (
        <>
            <Link to="/">Home
                <poka-dot>Home</poka-dot>
            </Link>
            <Link to="/blog">
                <poka-dot>Blog</poka-dot>
            </Link>
        </>
    )
}

export default NavBar;