import { FC } from 'react'
import styles from './Select.module.scss'

interface Props {
    categories: string[]
    choosenCategory: string
    handleSortCards: (value: string) => void
}

export const Select: FC<Props> = ({ categories, choosenCategory, handleSortCards }) => {
    return (
        <form className={styles.form}>
            <select className={styles.select}
                onChange={(e) => handleSortCards(e.target.value)}
                value={choosenCategory}
            >
                {categories.map(category => {
                    return (
                        <option
                            key={category}
                            value={category}
                            className={styles.option}
                        >
                            {category}
                        </option>
                    )
                })}
            </select>
        </form>
    )
}
