import React from "react"
import { useEffect } from "react"
import * as styles from "./Nav.module.scss"
import { Link } from "gatsby"
import { useState } from "react"
import { AnchorLink } from "gatsby-plugin-anchor-links"

import { motion } from "framer-motion"

const Nav = () => {
  const location = typeof window !== "undefined" ? window.location : ""
  const [activePage, setActivePage] = useState()
  const [menuOpen, setMenuOpen] = useState(false)
  const [shouldAnimate, setShouldAnimate] = useState(false)

  useEffect(() => {
    switch (location.pathname) {
      case "/":
        switch (location.hash) {
          case "#stilovi":
            setActivePage(1)
            break
          case "#lokacije":
            setActivePage(2)
            break
          case "#upisi":
            setActivePage(3)
            break
          default:
            setActivePage(0)
        }
        break
      case "/galerija":
        setActivePage(4)
        break
      case "/wanted":
        setActivePage(5)
        break
      case "/kontakt":
        setActivePage(6)
        break
      default:
        setActivePage(7)
        break
    }
  }, [location.hash, location.pathname])

  return (
    <nav className={styles.navBar}>
      <div className={styles.content}>
        <img src="/escapeLogo.svg" alt="Escape logo" className={styles.logo} />
        <div
          className={`${
            menuOpen ? styles.links + " " + styles.open : styles.links
          }`}
        >
          <button
            onClick={() => {
              setActivePage(0)
              setMenuOpen(false)
            }}
          >
            <Link to="/" className={activePage === 0 ? styles.activeLink : ""}>
              Početna
            </Link>
          </button>
          <button
            onClick={() => {
              setActivePage(1)
              setMenuOpen(false)
            }}
          >
            <AnchorLink
              to="/#stilovi"
              className={activePage === 1 ? styles.activeLink : ""}
            >
              Stilovi
            </AnchorLink>
          </button>
          <button
            onClick={() => {
              setActivePage(2)
              setMenuOpen(false)
            }}
          >
            <AnchorLink
              to="/#lokacije"
              className={activePage === 2 ? styles.activeLink : ""}
            >
              Lokacije
            </AnchorLink>
          </button>
          <button
            onClick={() => {
              setActivePage(3)
              setMenuOpen(false)
            }}
          >
            <AnchorLink
              to="/#upisi"
              className={activePage === 3 ? styles.activeLink : ""}
            >
              Upisi
            </AnchorLink>
          </button>
          <button
            onClick={() => {
              setActivePage(4)
              setMenuOpen(false)
            }}
          >
            <Link
              to="/galerija"
              className={activePage === 4 ? styles.activeLink : ""}
            >
              Galerija
            </Link>
          </button>
          <button
            onClick={() => {
              setActivePage(5)
              setMenuOpen(false)
            }}
          >
            <Link
              to="/wanted"
              className={activePage === 5 ? styles.activeLink : ""}
            >
              Wanted
            </Link>
          </button>
          <button
            onClick={() => {
              setActivePage(6)
              setMenuOpen(false)
            }}
          >
            <Link
              to="/kontakt"
              className={activePage === 6 ? styles.activeLink : ""}
            >
              Kontakt
            </Link>
          </button>
        </div>
        <button
          className={styles.hamburgerMenu}
          onClick={() => {
            setMenuOpen(!menuOpen)
            setShouldAnimate(true)
          }}
        >
          <motion.div
            className={styles.line}
            animate={
              shouldAnimate && {
                y: menuOpen
                  ? ["0rem", "0.4rem", "0.4rem"]
                  : ["0.4rem", "0.4rem", "0rem"],
                rotate: menuOpen ? [0, 0, 45] : [45, 0, 0],
              }
            }
            transition={{ duration: 0.5 }}
          ></motion.div>
          <motion.div
            className={styles.line}
            animate={
              shouldAnimate && {
                opacity: menuOpen ? [1, 0, 0] : [0, 0, 1],
              }
            }
            transition={{ duration: 0.5 }}
          ></motion.div>
          <motion.div
            className={styles.line}
            animate={
              shouldAnimate && {
                y: menuOpen
                  ? ["0rem", "-0.4rem", "-0.4rem"]
                  : ["-0.4rem", "-0.4rem", "0rem"],
                rotate: menuOpen ? [0, 0, -45] : [-45, 0, 0],
              }
            }
            transition={{ duration: 0.5 }}
          ></motion.div>
        </button>
      </div>
    </nav>
  )
}

export default Nav
