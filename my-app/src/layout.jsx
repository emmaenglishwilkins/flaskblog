import { NavBar } from "./components/Navbar"
import { Outlet } from "react-router-dom"

export function Layout() {
    return (
        <>
            <NavBar>
            <main>
                <Outlet/>
            </main>
            </NavBar>
        </>
    )
}