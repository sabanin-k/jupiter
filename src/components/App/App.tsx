import { FC, useEffect } from 'react';
import { Home } from '../../pages/Home';
import { useAppDispatch } from '../../store/hooks';
import { removeCard } from '../../store/reducers/cardSlice';

export const App: FC = () => {
    const dispatch = useAppDispatch()
    const pressDel = (e: KeyboardEvent) => {
        if (e.key === 'Delete') {
            dispatch(removeCard())
        }
    }

    useEffect(() => {
        window.addEventListener('keyup', pressDel)
        return () => window.removeEventListener('keyup', pressDel)
    }, [])

    return (
        <Home />
    )
}
