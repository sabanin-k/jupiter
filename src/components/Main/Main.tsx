import { FC } from 'react'
import styles from './Main.module.scss'
import data from '../../data/cards.json'
import { Card } from '../Card'

export const Main: FC = () => {
    return (
        <main className={styles.main}>
            <div className={styles.container}>
                <div className={styles.listWrapper}>
                    <ul className={styles.list}>
                        <li>Show All</li>
                        <li>Design</li>
                        <li>Branding</li>
                        <li>Illustration</li>
                        <li>Motion</li>
                    </ul>
                </div>
                <div className={styles.cards}>
                    {data.map(card => {
                        return <Card key={card.id} src={card.image} />
                    })}
                </div>
            </div>
            <div className={styles.buttonWrapper}>
                <button className={styles.button}>Load more</button>
            </div>
        </main>
    )
}
