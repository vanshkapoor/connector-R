import axios from 'axios';
import {ADD_POST,GET_ERRORS} from './types';

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
