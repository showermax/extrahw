import React from 'react';
import styles from './Site.module.css'
import {Routes, Route, Navigate, NavLink} from "react-router-dom";
import {PageOne} from "./pages/PageOne";
import {PageTwo} from "./pages/PageTwo";
import {PageThree} from "./pages/PageThree";
import {Error404} from "./pages/Error404";


export const Site = () => {
    return (
        <div>
            <div className={styles.header}><h1>HEADER</h1></div>
            <div className={styles.body}>
                <div className={styles.nav}>
                    <div><NavLink to={'/page 1'}>Hello page 1  </NavLink></div>
                    <div><NavLink to={'/page 2'}>Hello page 2  </NavLink></div>
                    <div><NavLink to={'/page 3'}>Hello page 3  </NavLink></div>
                </div>
                <div className={styles.content}>
                    <Routes>
                        <Route path={'/'} element={<Navigate to={'/page1'} />} />
                        <Route path={'/page1'} element={<PageOne />} />
                        <Route path={'/page2'} element={<PageTwo />} />
                        <Route path={'/page3'} element={<PageThree />} />
                        <Route path={'/*'} element={<Error404 />} />
                    </Routes>
                </div>
            </div>
        </div>
    );
};

