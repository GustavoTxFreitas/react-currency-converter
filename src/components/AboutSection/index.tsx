import styles from "./styles.module.scss";

export function AboutSection() {
    return (
        <section id="aboutMe" className={styles.aboutMe}>
            <div className={styles.aboutMeContainer}>
                <div className="aboutMeLead">
                    <h2>Greatings, it's Me!</h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione accusantium vero omnis. Dolorum placeat voluptatem nobis esse facere magnam cupiditate harum doloribus neque, minima, mollitia, doloremque fugit nesciunt autem corporis.</p>
                    <a href="#" target="_blank">See more</a>
                </div>
                <div className={styles.ima}>
                    <img className={styles.aboutMeImage} src="https://github.com/GustavoTxFreitas.png" alt="My profile pic on GitHub" />
                    <svg xmlns="http://www.w3.org/2000/svg">
                        <defs>
                            <clipPath id="svgBlob">
                                <path fill="#1B1B1B" d="M283.3 -345.2C368.1 -266.4 438.6 -178.1 444 -87.2C449.4 3.6 389.7 97.1 328.8 177.8C267.9 258.6 205.8 326.6 125.5 364.2C45.3 401.9 -53.1 409.1 -137.5 378.2C-222 347.4 -292.4 278.4 -352.3 194C-412.3 109.6 -461.7 9.8 -431.4 -61.1C-401 -131.9 -290.9 -173.7 -205.7 -252.4C-120.5 -331.1 -60.3 -446.8 19.5 -470C99.2 -493.2 198.4 -424 283.3 -345.2" />
                            </clipPath>
                        </defs>
                    </svg>
                </div>
            </div>
        </section>
    )
}