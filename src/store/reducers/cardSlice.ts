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
        categories: ['Show All', 'Design', 'Branding', 'Illustration', 'Motion'],
        chosenCard: null as number | null,
        choosenCategory: 'Show All',
        isLoaded: false
    },
    reducers: {
        setChosenCards: (state, action: PayloadAction<number>) => {
            if (action.payload === state.chosenCard) {
                state.chosenCard = null
            } else {
                state.chosenCard = action.payload
            }
        },
        setCategory: (state, action: PayloadAction<string>) => {
            state.choosenCategory = action.payload
            if (state.choosenCategory === 'Show All') {
                state.editedCards = state.cards
            } else {
                state.editedCards = state.cards.filter(card => card.category === state.choosenCategory)
            }
        },
        removeCard: (state) => {
            state.editedCards = state.editedCards.filter(card => card.id !== state.chosenCard)
            state.cards = state.cards.filter(card => card.id !== state.chosenCard)                     
        },
        loadMore: (state) => {
            state.cards = state.cards.concat(loadData)
            state.editedCards = state.cards
            state.choosenCategory = 'Show All'
            state.isLoaded = true
        }
    }
})

export const selectCards = (state: RootState) => state.cardReducer.cards
export const selectCategories = (state: RootState) => state.cardReducer.categories
export const selectEditedCards = (state: RootState) => state.cardReducer.editedCards
export const selectChosenCards = (state: RootState) => state.cardReducer.chosenCard
export const selectChoosenCategory= (state: RootState) => state.cardReducer.choosenCategory
export const selectIsLoaded = (state: RootState) => state.cardReducer.isLoaded

export const {
    setChosenCards,
    setCategory,
    removeCard,
    loadMore
} = cardSlice.actions

export const cardReducer = cardSlice.reducer