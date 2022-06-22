import { FC } from 'react'
import styles from './Card.module.scss'

interface Props {
    name: string
    category: string
    src: string
}

export const Card: FC<Props> = ({ name, category, src }) => {
    return (
        <div className={styles.card} >
            <img src={src} alt={name} className={styles.img} />
            <span className={styles.category}>{category}</span>
            <p className={styles.name}>{name}</p>
        </div>
    )
}
