import axios from 'axios';
import { GET_PROFILE, PROFILE_LOADING, GET_ERRORS ,CLEAR_CURRENT_PROFILE} from './types';




//gets current user profile
export const getCurrentProfile = () =>dispatch =>{
    dispatch(setProfileLoading());
    axios.get('/api/profile')
        .then(res =>
            dispatch({
                type:GET_PROFILE,
                payload:res.data
            })
        ).catch(err => 
            dispatch({
                type:GET_PROFILE,
                payload:{}
            }) 
        );
};

//create profile
export const createProfile =(profiledata,history) =>dispatch =>{
    axios.post('/api/profile',profiledata)
        .then(res => history.push('/dashboard'))
        .catch(err =>{
            dispatch({
                type:GET_ERRORS,
                payload:err.response.data
            })
        });
}






//profile loading
export const setProfileLoading = () =>{
    return{
        type:PROFILE_LOADING
    }
};


export const clearProfile = () =>{
    return{
        type:CLEAR_CURRENT_PROFILE,

    }
}




