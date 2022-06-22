import { FC } from 'react'
import logo from '../../assets/png/logo.png'
import styles from './Header.module.scss'

export const Header: FC = () => {
    return (
        <div className={styles.head}>
            <div className={styles.container}>
                <div className={styles.top}>
                    <div className={styles.logo}>
                        <img src={logo} alt="logo" />
                    </div>
                    <nav>
                        <ul className={styles.list}>
                            <li>About</li>
                            <li>Services</li>
                            <li>Pricing</li>
                            <li>Blog</li>
                        </ul>
                    </nav>
                    <div>
                        <button className={styles.button}>Contact</button>
                    </div>
                </div>
            </div>
            <header className={styles.header}>
                <h1 className={styles.h1}>Portfolio</h1>
                <p className={styles.p}>
                    Agency provides a full service range including
                    technical skills, design, business understanding.
                </p>
            </header>
        </div>
    )
}
