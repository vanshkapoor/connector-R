import axios from 'axios';
import {ADD_POST,GET_ERRORS,GET_POSTS, POST_LOADING} from './types';

//add post
export const addPost = postdata => dispatch =>{
 axios.post('api/posts', postdata)
 .then(res => 
    dispatch({
        type:ADD_POST,
        payload:res.data   
 })
 ).catch(err => dispatch({
     type:GET_ERRORS,
     payload:err.response.data       
 })
 )   
};

//get posts
export const getPosts =()=> dispatch =>{
    dispatch(postLoading);
    axios.get('/api/posts')
    .then(res => 
       dispatch({
           type:GET_POSTS,
           payload:res.data
    })
    ).catch(err => dispatch({
        type:GET_POSTS,
        payload:null
    })
    )   
   };

export const postLoading=()=>{
    return{
        type:POST_LOADING
    }
}
   