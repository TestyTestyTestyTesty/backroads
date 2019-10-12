import React from 'react'
import Layout from '../components/Layout'
import { Link } from "gatsby"
import styles from "../css/error.module.css"
import Banner from "../components/Banner"
import AniLink from "gatsby-plugin-transition-link/AniLink";
const error = () => {
    return (
        <Layout>
            <header className={styles.error}>
                <Banner title="oops it's a dead end">
                    <AniLink fade to="/"  className="btn-white">Back to Homepage</AniLink>
                </Banner>
            </header>
        </Layout>
    )
}

export default error
