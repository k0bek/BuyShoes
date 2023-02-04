import { configureStore } from "@reduxjs/toolkit";
import { handleCartShow } from "./handleCartShow";

const store = configureStore({
	reducer: { handleCartShow: handleCartShow.reducer },
});

export default store;
