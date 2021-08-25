import { configureStore } from "@reduxjs/toolkit";
import apiMiddleware from "./apiCall/apiMiddleware";
import reducers from './reducers/reducers';

export default configureStore({
     reducer: { reducers },  //bunga rootReducer beriladi
     middleware: [apiMiddleware]  //bunga apiMiddleware beriladi
});