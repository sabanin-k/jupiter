import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { RootState } from '..'
import data from '../../data/cards.json'
import loadData from '../../data/loadMore.json'

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
        chosenCard: null as number | null,
        choosenCategory: 'Show All',
        isLoaded: false
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
            if (action.payload === state.chosenCard) {
                state.chosenCard = null
            } else {
                state.chosenCard = action.payload
            }
        },
        setChoosenCategory: (state, action: PayloadAction<string>) => {
            state.choosenCategory = action.payload
        },
        removeCard: (state) => {
            state.editedCards = state.editedCards.filter(card => card.id !== state.chosenCard)
            state.cards = state.cards.filter(card => card.id !== state.chosenCard)                     
        },
        loadMore: (state) => {
            state.cards = state.cards.concat(loadData)
            state.editedCards = state.cards
            state.isLoaded = true
        }
    }
})

export const selectCards = (state: RootState) => state.cardReducer.cards
export const selectEditedCards = (state: RootState) => state.cardReducer.editedCards
export const selectChosenCards = (state: RootState) => state.cardReducer.chosenCard
export const selectChoosenCategory= (state: RootState) => state.cardReducer.choosenCategory
export const selectIsLoaded = (state: RootState) => state.cardReducer.isLoaded

export const {
    sortCards,
    setChosenCards,
    setChoosenCategory,
    removeCard,
    loadMore
} = cardSlice.actions

export const cardReducer = cardSlice.reducer