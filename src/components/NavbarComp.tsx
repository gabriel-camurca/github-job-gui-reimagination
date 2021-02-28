import styles from "../styles/components/Navbar.module.css"

import {Nav, Navbar, NavbarBrand} from "react-bootstrap"
import React from "react"

export default function NavbarComp(){
    return(
        <div>
            <Navbar className={styles.outerNavBarContainer}>
                <NavbarBrand href="/" className={styles.brandName}>GitHub Jobs</NavbarBrand>
                <Navbar.Collapse className={styles.navBarContainer} >
                    <div className={styles.navItems}>
                        <Nav.Link href="/" className={styles.navSingleItem}>All jobs</Nav.Link>
                        <Nav.Link href="/howitworks" className={styles.navSingleItem}>How It Works</Nav.Link>
                        <Nav.Link href="/documentationapi" className={styles.navSingleItem}>API Documentation</Nav.Link>
                    </div>
                </Navbar.Collapse>
            </Navbar>

        </div>
    )
}