import styles from "./styles.module.scss";

export function AboutSection() {
    return (
        <section id="aboutMe" className={styles.aboutMe}>
            <div className={styles.aboutMeContainer}>
                <div className={styles.aboutMeLead}>
                    <h2>Greatings, it's Me!</h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione accusantium vero omnis. Dolorum placeat voluptatem nobis esse facere magnam cupiditate harum doloribus neque, minima, mollitia, doloremque fugit nesciunt autem corporis.</p>
                    <a href="#" target="_blank">See more &raquo;</a>
                </div>
                
                <div>
                    <img className={styles.aboutMeImg} src="https://github.com/GustavoTxFreitas.png" alt="My profile pic on GitHub" />
                </div>

            </div>
        </section>
    )
}