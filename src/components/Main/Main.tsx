import { FC } from 'react'
import { Card } from '../Card'
import { useAppSelector } from '../../store/hooks'
import { selectCards } from '../../store/reducers/cardSlice'
import styles from './Main.module.scss'

export const Main: FC = () => {
    const cards = useAppSelector(selectCards)

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
                    {cards.map(card => {
                        return <Card
                            key={card.id}
                            name={card.name}
                            category={card.category}
                            src={card.image} />
                    })}
                </div>
            </div>
            <div className={styles.buttonWrapper}>
                <button className={styles.button}>Load more</button>
            </div>
        </main>
    )
}
