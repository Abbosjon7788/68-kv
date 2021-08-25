import axios from 'axios';

const apiMiddleware = ({ dispatch }) => (next) => (action) => {

     if (action.type !== 'api/data') {
          next(action);
          return;
     }

     next(action);

     const { url, method, data, dispatchType, headers } = action.payload; //headers - this is for changing language

     axios({
          baseURL: '',
          url,
          method,
          data,
          headers
     })
          .then((res) => {
               dispatch({
                    type: dispatchType,
                    payload: res.data
               })
          })
          .catch((error) => {
               dispatch({
                    type: dispatchType,
                    payload: error.response?.data
               })

          })


}

export default apiMiddleware;