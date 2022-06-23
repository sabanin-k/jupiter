import { FC, useCallback } from 'react'
import { useAppDispatch, useAppSelector } from '../../store/hooks'
import { loadMore, selectCategories, selectChoosenCategory, selectEditedCards, selectIsLoaded, setCategory, setChosenCards } from '../../store/reducers/cardSlice'
import { Card } from '../Card'
import { Select } from '../Select'
import styles from './Main.module.scss'

export const Main: FC = () => {
    const dispatch = useAppDispatch()
    const cards = useAppSelector(selectEditedCards)
    const categories = useAppSelector(selectCategories)
    const choosenCategory = useAppSelector(selectChoosenCategory)
    const isLoaded = useAppSelector(selectIsLoaded)

    const handleSortCards = useCallback((value: string) => {
        dispatch(setCategory(value))
    }, [dispatch])

    const handleChoose = useCallback((id: number) => {
        dispatch(setChosenCards(id))
    }, [dispatch])

    const handleLoadMore = () => {
        dispatch(loadMore())
    }

    return (
        <main className={styles.main}>
            <div className={styles.container}>
                <div className={styles.listWrapper}>
                    <ul className={styles.list}>
                        {categories.map(category => {
                            return (
                                <li key={category}
                                    onClick={() => handleSortCards(category)}
                                    className={category === choosenCategory
                                        ? styles.greenListItem
                                        : styles.listItem}
                                >
                                    {category}
                                </li>)
                        })}
                    </ul>
                </div>
                <div className={styles.selectWrapper}>
                    <Select categories={categories}
                        handleSortCards={handleSortCards}
                        choosenCategory={choosenCategory} />
                </div>
                <div className={styles.cards}>
                    <ul className={styles.cardsList}>
                        {cards.length
                            ? cards.map(card => {
                                return (
                                    <li key={card.id}>
                                        <Card
                                            id={card.id}
                                            name={card.name}
                                            category={card.category}
                                            src={card.image}
                                            handleSortCards={handleSortCards}
                                            handleChoose={handleChoose} />
                                    </li>)
                            })
                            : <div className={styles.nothingCard}>
                                Nothing here
                            </div>
                        }
                    </ul>
                </div>
            </div>
            {!isLoaded && <div className={styles.buttonWrapper}>
                <button onClick={handleLoadMore} className={styles.button}>Load more</button>
            </div>}
        </main>
    )
}
