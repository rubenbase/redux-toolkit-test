import { createSlice } from '@reduxjs/toolkit'
import { Person } from 'types/people'

interface FavoritesState {
  value: { [key: string]: Person }
}

const initialState: FavoritesState = {
  value: {},
}

export const favoritesSlice = createSlice({
  name: 'favorites',
  initialState,
  reducers: {
    addFavorite: (state, action) => {
      state.value[action.payload.url] = action.payload
    },
    removeFavorite: (state, action) => {
      delete state.value[action.payload.url]
    },
  },
})

export const getFavorites = (state) => state.favorites.value

export const { addFavorite, removeFavorite } = favoritesSlice.actions
export default favoritesSlice.reducer
