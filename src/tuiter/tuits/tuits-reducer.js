import { createSlice } from "@reduxjs/toolkit";
import tuits from "./tuits.json";

const tuitsSlice = createSlice({
    name: 'tuits',
    initialState: tuits,
    reducers: {
        toggleLike(state, action) {
            const id = action.payload._id
            const updatedTuits = state.map(tuit =>
                tuit._id === id
          ? { ...tuit, liked: !tuit.liked, likes: tuit.liked ? tuit.likes - 1 : tuit.likes + 1 }
          : tuit
      );
                return updatedTuits;
        }
    }
})

export const {toggleLike} = tuitsSlice.actions
export default tuitsSlice.reducer