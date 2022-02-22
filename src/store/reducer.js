const initState = {
  globalData: {},
  countries: []
}

const fetchalldata = (state = initState, action) => {
  switch (action.type) {
    case "FETCH_ALL":
      return {
        ...state, globalData: action.payload
      }

    case "FETCH_COUNTRIES_DATA":
      return {
        ...state, countries: action.payload
      }

    default:
      return state;
  }
}

export default fetchalldata;

