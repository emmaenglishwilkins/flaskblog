import  { Link } from "react-router-dom"

export function Navbar() {
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