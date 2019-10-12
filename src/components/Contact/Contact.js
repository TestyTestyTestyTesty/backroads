import React from 'react'
import StyledTitle from '../StyledTitle'
import styles from '../../css/contact.module.css'
const Contact = () => {
    return (
        <section className={styles.contact}>
            <StyledTitle title="contact" subtitle="us"/>
            <div className={styles.center}>
                <form className={styles.form} action="https://formspree.io/sikoratomasz93@gmail.com" method="POST">
                    <div>
                        <input type="text" name="name" id="name" className={styles.formControl} placeholder="John smith"/>
                    </div>
                    <div>
                        <input type="email" name="email" id="email" className={styles.formControl} placeholder="Johnsmith@gmail.com"/>
                    </div>
                    <div>
                        <textarea name="message" id="message" rows="10" className={styles.formControl} placeholder="Type your message"/>
                    </div>
                    <div>
                        <input type="submit" value="submit here" className={styles.submit}/>
                    </div>
                </form>
            </div>
        </section>
    )
}

export default Contact
