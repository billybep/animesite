const initialState = {
  favorites : []
}

export const animeFavoriteReducer = (state = initialState, action) => {
  const { type, payload } = action
  switch (type) {
    case 'favorites/setFavorites':
      return { favorites: [ ...state.favorites, payload ]}
  
    default:
      return state
  }
}