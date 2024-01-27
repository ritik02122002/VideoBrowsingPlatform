import { configureStore } from "@reduxjs/toolkit"
import menuSlice from "./menuSlice"
import cachedSuggestionsSlice from "./cachedSuggestionsSlice";
import liveChatSlice from "./liveChatSlice";
import searchResultSlice from "./searchResultSlice";
import liveVideoSlice from "./liveVideoSlice";

const store = configureStore({
    reducer: {
        menu: menuSlice,
        searchSuggestionCache: cachedSuggestionsSlice,
        liveChat: liveChatSlice,
        searchResult: searchResultSlice,
        liveVideo: liveVideoSlice
    }
})

export default store;

