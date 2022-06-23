import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { RootState } from '..'
import data from '../../data/cards.json'

interface Cards {
    id: number
    name: string
    category: string
    image: string
}

const cardSlice = createSlice({
    name: 'cards',
    initialState: {
        cards: data as Cards[],
        editedCards: data as Cards[],
        chosenCard: null as number | null
    },
    reducers: {
        sortCards: (state, action: PayloadAction<string>) => {
            if (action.payload === 'Show All') {
                state.editedCards = state.cards
            } else {
                state.editedCards = state.cards.filter(card => card.category === action.payload)
            }
        },
        setChosenCards: (state, action: PayloadAction<number>) => {
            // state.chosenCards.includes(action.payload)
            //     ? state.chosenCards = state.chosenCards.filter(id => id !== action.payload)
            //     : state.chosenCards = state.chosenCards.concat(action.payload)
            if (action.payload === state.chosenCard) {
                state.chosenCard = null
            } else {
                state.chosenCard = action.payload
            }
        },
        removeCard: (state) => {
            state.editedCards = state.editedCards.filter(card => card.id !== state.chosenCard)
            state.cards = state.cards.filter(card => card.id !== state.chosenCard)                     
        },
        loadMore: (state) => {
            // let concatArray = [...data]
            // state.cards = state.cards.concat(concatArray)
            state.editedCards = state.cards
        }
    }
})

export const selectCards = (state: RootState) => state.cardReducer.cards
export const selectEditedCards = (state: RootState) => state.cardReducer.editedCards
export const selectChosenCards = (state: RootState) => state.cardReducer.chosenCard

export const {
    sortCards,
    setChosenCards,
    removeCard,
    loadMore
} = cardSlice.actions

export const cardReducer = cardSlice.reducer