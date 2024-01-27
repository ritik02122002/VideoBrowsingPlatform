import { createSlice } from "@reduxjs/toolkit";
import { mergeSearchResults } from "../helper";


const searchResultSlice = createSlice({

  name: "searchResult",
  initialState: {
    results: []
  },
  reducers: {
    addResult: (state, action) => {

      const array = mergeSearchResults(state.results, action.payload);
      state.results = [...array]

    }
    ,
    clearResults: (state) => {
      state.results = [];
    }
  }

});
export const { addResult, clearResults } = searchResultSlice.actions;
export default searchResultSlice.reducer;