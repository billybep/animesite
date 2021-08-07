const initialState = {
  animeDetail: {}
}

export const animeDetailReducer = (state = initialState, action) => {
  const { type, payload } = action

  switch (type) {
    case 'animeDetail/setAnimeDetail':
      return { animeDetail: { ...state.animeDetail, ...payload } }
    default:
      return state
  }
}
