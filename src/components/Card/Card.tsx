import { FC } from 'react'

interface Props {
    src: string
}

export const Card: FC<Props> = ({ src }) => {
    return (
        <div>
            <img src={src} alt="card" />
        </div>
    )
}
