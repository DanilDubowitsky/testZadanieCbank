import {ADD_POST, CHANGE_EDITABLE_VALUE, CHANGE_POST, DELETE_POST} from "../constants";

export function addPost (post) {
    return{
        type:ADD_POST,
        payload:post
    }
}
export function changeEditableValue(id) {
    return{
        type: CHANGE_EDITABLE_VALUE,
        payload: id
    }
}

export function changePost(post) {

    return{
        type:CHANGE_POST,
        payload:post
    }

}
export function deletePost(id) {
    return{
        type:DELETE_POST,
        payload:id
    }
}