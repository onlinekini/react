import jsonPlaceholder from '../apis/JsonPlaceholder'
import _ from 'lodash'

export const fetchPostsAndUsers = () => async (dispatch, getState) => {
    await dispatch(fetchPosts())
    
    const userIds = _.uniq(getState().posts.map(post => post.userId))
    userIds.forEach(id => dispatch(fetchUser(id)))
}

export const fetchPosts = () => {
    // BAD approach !!!!!!
    /* const resp = await JsonPlaceholder.get('/posts')
    return {
        type: 'FETCH_POSTS',
        payload:resp
    } */

    return async dispatch => {
        const resp = await jsonPlaceholder('/posts')
        dispatch({type:'FETCH_POSTS', payload:resp.data})
    }
}

// Better syntax
export const fetchUser = id => async dispatch => {
    const resp = await jsonPlaceholder.get(`users/${id}`)
    dispatch({type:'FETCH_USER', payload:resp.data})
}

//memoized function -- slightly difficult to decipher
/* export const fetchUser = id => dispatch => _fetchUser(id, dispatch)

const _fetchUser = _.memoize(async (id, dispatch) => {
    const resp = await jsonPlaceholder.get(`users/${id}`)
    dispatch({type:'FETCH_USER', payload:resp.data})
}) */