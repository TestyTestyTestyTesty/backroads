import React from "react"
import StyledTitle from "../StyledTitle"
import styles from "../../css/about.module.css"
import img from "../../images/defaultBcg.jpeg"
const About = () => {
  return (
    <section className={styles.about}>
      <StyledTitle title="about" subtitle="us" />
      <div className={styles.aboutCenter}>
        <article className={styles.aboutImg}>
          <div className={styles.imgContainer}>
            <img src={img} alt="about company" />
          </div>
        </article>
        <article className={styles.aboutInfo}>
          <h4>explore the difference</h4>
          <p>hella wayfarers twee hashtag chambray Pinterest stumptown skateboard retro tousled</p>
          <p>hella wayfarers twee hashtag chambray Pinterest stumptown skateboard retro tousled</p>
          <button type="button" className="btn-primary">Read more</button>
        </article>
      </div>
    </section>
  )
}

export default About
