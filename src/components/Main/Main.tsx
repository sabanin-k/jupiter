import { FC } from 'react'
import { useAppDispatch, useAppSelector } from '../../store/hooks'
import { loadMore, selectEditedCards, setChosenCards, sortCards } from '../../store/reducers/cardSlice'
import { Card } from '../Card'
import styles from './Main.module.scss'

export const Main: FC = () => {
    const dispatch = useAppDispatch()
    const cards = useAppSelector(selectEditedCards)

    const handleSortCards = (value: string) => {
        dispatch(sortCards(value))
    }

    const handleChoose = (id: number) => {
        dispatch(setChosenCards(id))
    }

    const handleLoadMore = () => {
        dispatch(loadMore())
    }

    return (
        <main className={styles.main}>
            <div className={styles.container}>
                <div className={styles.listWrapper}>
                    <ul className={styles.list}>
                        <li onClick={() => handleSortCards('Show All')}>Show All</li>
                        <li onClick={() => handleSortCards('Design')}>Design</li>
                        <li onClick={() => handleSortCards('Branding')}>Branding</li>
                        <li onClick={() => handleSortCards('Illustration')}>Illustration</li>
                        <li onClick={() => handleSortCards('Motion')}>Motion</li>
                    </ul>
                </div>
                <div className={styles.cards}>
                    {cards.length
                        ? cards.map(card => {
                            return <Card
                                key={card.id}
                                id={card.id}
                                name={card.name}
                                category={card.category}
                                src={card.image}
                                handleSortCards={handleSortCards}
                                handleChoose={handleChoose} />
                        })
                        : <div className={styles.nothingCard}>
                            Nothing here
                        </div>
                    }
                </div>
            </div>
            <div className={styles.buttonWrapper}>
                <button onClick={handleLoadMore} className={styles.button}>Load more</button>
            </div>
        </main>
    )
}
