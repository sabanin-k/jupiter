import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { RootState } from '..'
import data from '../../data/cards.json'

const cardSlice = createSlice({
    name: 'cards',
    initialState: {
        cards: data
    },
    reducers: {
        sortCards: (state, action: PayloadAction<string>) => {
            state.cards = state.cards.filter(card => card.category === action.payload)
        }
    }
})

export const selectCards = (state: RootState) => state.cardReducer.cards

export const { sortCards } = cardSlice.actions

export const cardReducer = cardSlice.reducer