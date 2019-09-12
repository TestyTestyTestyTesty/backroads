import React from 'react'
import { Link } from "gatsby"
import styles from "../css/banner.module.css"
const Banner = ({title, info, children}) => {
    return (
        <div className={styles.banner}>
            <h1>{title}</h1>
            <p>{info}</p>
            {children}
        </div>
    )
}

export default Banner
