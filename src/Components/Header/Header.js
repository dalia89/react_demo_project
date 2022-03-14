import React, { useState, useEffect } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  NavLink
} from "react-router-dom";
// import styled from 'styled-components';
// import { KitContainer } from '../../Kit'

// import Button from 'react-bootstrap/Button';
import { Container } from 'react-bootstrap';
import styles from './Header.module.css'
import "bootstrap/dist/css/bootstrap.min.css";
import Icon from 'react-icons-kit';
import { ic_shopping_cart } from 'react-icons-kit/md/ic_shopping_cart';
import { ic_search } from 'react-icons-kit/md/ic_search'
import { InputGroup, FormControl } from 'react-bootstrap';

function Header() {

  return (<header className={styles.headerWrap}>
    {/* header top */}
    <section className={styles.headerTopWrap}>
    <Container>
        <section className={styles.headerTopWrapInner}>
          {/* mobile menu */}
          <div className={styles.mobileMenu}>
            icon
          </div>

          {/* logo */}
          <section className={styles.headerTopLeft}>
            <img src={'https://www.alumnux.com/wp-content/uploads/Alumnus_logo.png'} alt="conpany logo" style={{ maxWidth: "50%" }} />
            {/* <h2>SPORTS</h2> */}
          </section>

          {/* *
            header top right
            - my account
            - wishlist
            - checkout
            - login
            - shopping cart
          * */}
          <section className={styles.headerTopRight}>
            <section className={styles.headerTopRightUlWrapper}>
              <ul>
                <li>
                  <Link className={styles.topNavLinkWrap} to="/">
                    Home
                  </Link>
                </li>

                <li>
                  <Link className={styles.topNavLinkWrap} to="/">
                    About
                  </Link>
                </li>

                <li>
                  <Link className={styles.topNavLinkWrap} to="/">
                    Business With Us
                  </Link>
                </li>

                <li>
                  <Link className={styles.topNavLinkWrap} to="/">
                    Careers
                  </Link>
                </li>

                <li>
                  <Link className={styles.topNavLinkWrap} to="/">
                    Giving Back
                  </Link>
                </li>
              </ul>
            </section>
          </section>
        </section>
        </Container>
    </section>


    {/* header bottom */}
    {/* <section className={styles.headerBottomWrap}>
      <Container>
        <section className={styles.headerBottomInnerWrap}>
          <section className={styles.headerBottomLeft}>
            <NavLink
              exact
              to="/"
              className={styles.navLinkWrap}
              activeStyle={{
                backgroundColor: "gold",
                fontWeight: "bold",
                color: "white"
              }}
            >
              Home
            </NavLink>

            <NavLink
              exact
              to="/elements"
              className={styles.navLinkWrap}
              activeStyle={{
                backgroundColor: "gold",
                fontWeight: "bold",
                color: "white"
              }}
            >
              Elements
            </NavLink>

            <NavLink
              exact
              to="/shop"
              className={styles.navLinkWrap}
              activeStyle={{
                backgroundColor: "gold",
                fontWeight: "bold",
                color: "white"
              }}
            >
              Shop
            </NavLink>

            <NavLink
              exact
              to="/blog"
              className={styles.navLinkWrap}
              activeStyle={{
                backgroundColor: "gold",
                fontWeight: "bold",
                color: "white"
              }}
            >
              Blogs
            </NavLink>

            <NavLink
              exact
              to="/about"
              className={styles.navLinkWrap}
              activeStyle={{
                backgroundColor: "gold",
                fontWeight: "bold",
                color: "white"
              }}
            >
              About
            </NavLink>

            <NavLink
              exact
              to="/contact"
              className={styles.navLinkWrap}
              activeStyle={{
                backgroundColor: "gold",
                fontWeight: "bold",
                color: "white"
              }}
            >
              Contact
            </NavLink>

          </section>

          
          <section className={styles.headerBottomRight}>
            <InputGroup className="mb-3 searchForm">
              <FormControl
                placeholder="Search"
                aria-label="Search"
                aria-describedby="basic-addon1"
                className="searchForm"
              />
              <InputGroup.Prepend>
                <InputGroup.Text id="basic-addon1" className="searchIcon"><Icon icon={ic_search} /></InputGroup.Text>
              </InputGroup.Prepend>
            </InputGroup>
          </section>
        </section>
      </Container>
    </section> */}

  </header>)
}

export { Header };