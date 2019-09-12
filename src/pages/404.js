import React from 'react'
import Layout from '../components/Layout'
import { Link } from "gatsby"
import styles from "../css/error.module.css"
import Banner from "../components/Banner"
const error = () => {
    return (
        <Layout>
            <header className={styles.error}>
                <Banner title="oops it's a dead end">
                    <Link to="/"  className="btn-white">Back to Homepage</Link>
                </Banner>
            </header>
        </Layout>
    )
}

export default error
