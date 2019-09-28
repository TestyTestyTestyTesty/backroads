import React from "react"
import { Link } from "gatsby"
import Layout from "../components/Layout"
import SimpleHero from "../components/SimpleHero"
import Banner from "../components/Banner"
import About from "../components/Home/About"
import Services from "../components/Home/Services"
export default () => (
  <div>
    <Layout>
      <SimpleHero>
        <Banner
          title="cotinue exploring"
          info="Vice jean shorts +1 Portland aesthetic umami pork belly VHS scenester"
        >
          <Link to="/tours" className="btn-white">
            explore tours
          </Link>
        </Banner>
      </SimpleHero>
      <About/>
      <Services/>
    </Layout>
  </div>
)
