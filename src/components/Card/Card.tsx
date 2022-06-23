import { FC } from 'react'
import { useAppSelector } from '../../store/hooks'
import { selectChosenCards } from '../../store/reducers/cardSlice'
import styles from './Card.module.scss'

interface Props {
    id: number
    name: string
    category: string
    src: string
    handleSortCards: (value: string) => void
    handleChoose: (name: number) => void
}

export const Card: FC<Props> = ({ id, name, category, src, handleSortCards, handleChoose }) => {
    const chosenCard = useAppSelector(selectChosenCards)

    return (
        <div className={styles.card} onClick={() => handleChoose(id)} >
            <img src={src} alt={name} className={chosenCard === id ? styles.outline : styles.img} />
            <span className={styles.category} onClick={() => handleSortCards(category)}>{category}</span>
            <p className={styles.name}>{name}</p>
        </div>
    )
}
