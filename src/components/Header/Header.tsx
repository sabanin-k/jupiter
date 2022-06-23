import { FC } from 'react'
import logo from '../../assets/png/logo.png'
import styles from './Header.module.scss'

export const Header: FC = () => {
    return (
        <header className={styles.head}>
            <div className={styles.container}>
                <nav>
                    <ul className={styles.navList}>
                        <li className={styles.logo}>
                            <a href='#'>
                                <img src={logo} alt="logo" />
                            </a>
                        </li>
                        <li>
                            <ul className={styles.list}>
                                <li><a href="">About</a></li>
                                <li><a href="">Services</a></li>
                                <li><a href="">Pricing</a></li>
                                <li><a href="">Blog</a></li>
                            </ul>
                        </li>
                        <li>
                            <button className={styles.button}>Contact</button>
                        </li>
                    </ul>
                </nav>
            <div className={styles.header}>
                <h1 className={styles.h1}>Portfolio</h1>
                <p className={styles.p}>
                    Agency provides a full service range including
                    technical skills, design, business understanding.
                </p>
            </div>
            </div>
        </header>
    )
}
