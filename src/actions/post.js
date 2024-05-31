import axios from "axios";
import { useDispatch } from "react-redux";



export const fetchPosts = async () => {
    return async function fetchPostsThunk(dispatch, getState) {

        const response = await axios.get('https://jsonplaceholder.typicode.com/posts')
        console.log(response)
        dispatch({ type: 'FETCH_POSTS', payload: response.data });
      }
    }

