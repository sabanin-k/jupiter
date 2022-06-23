import { FC, useCallback, useEffect } from 'react';
import { useAppDispatch } from '../../store/hooks';
import { removeCard } from '../../store/reducers/cardSlice';
import { Header } from '../Header';
import { Main } from '../Main';

export const App: FC = () => {
    const dispatch = useAppDispatch()
    const pressDel = useCallback((e: KeyboardEvent) => {
        if (e.key === 'Delete') {
            dispatch(removeCard())
        }
    }, [dispatch])

    useEffect(() => {
        window.addEventListener('keyup', pressDel)
        return () => window.removeEventListener('keyup', pressDel)
    }, [pressDel])

    return (
        <>
            <Header />
            <Main />
        </>
    )
}
