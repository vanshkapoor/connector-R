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




