export const fetchdata = (data) => {
  return (dispatch) => {
    dispatch({ type: "FETCH_ALL", payload: data });
  };
};

export const fetchCountriesData = (data) => {
  return (dispatch) => {
    dispatch({ type: "FETCH_COUNTRIES_DATA", payload: data });
  };
};
