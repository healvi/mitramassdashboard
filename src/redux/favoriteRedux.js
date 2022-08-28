import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  favorites : []
};

export const favoritesReducer = createSlice({
  name: "favoritess",
  initialState,
  reducers: {
    setfavorites: (state, action) => {
        state.favorites  = action.payload
    }
  },
});

const setFavoriteGlobal = (favorites) => (dispatch) => {
    const {favorite , data} = favorites
    let newData = []
    const isAvaliable = favorite !== undefined
    ? favorite.find((element) => element.id === data.id) : false
    if (isAvaliable) {
      newData = favorite.filter((element) =>
    element.id !== data.id)
      } else {
        if (favorite !== undefined) {
          newData = [...favorite, data]
        } else {
          newData = [data]
        }
    }
  dispatch(
    setfavorites(newData)
  );
};
export {setFavoriteGlobal}
export const {setfavorites } = favoritesReducer.actions;
export default favoritesReducer.reducer;
