import { FC, useCallback, useEffect } from 'react';
import { Home } from '../../pages/Home';
import { useAppDispatch } from '../../store/hooks';
import { removeCard } from '../../store/reducers/cardSlice';

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
        <Home />
    )
}
