import {ADD_POST, CHANGE_EDITABLE_VALUE, CHANGE_POST, DELETE_POST} from "../constants";

let initialState = {
    posts: [{name: 'Запись1', description: 'Описание записи 1',editable: false},
        {name: 'Запись 2', description: 'Описание записи 2', editable: false}
    ]
}
const postReducer = (state = initialState, action) => {
    switch (action.type) {

        case ADD_POST: {
            return { ...state, posts: state.posts.concat([action.payload]) }

        }
        case DELETE_POST:{
            debugger;
        return {...state,posts: state.posts.filter(post=>post !== state.posts[action.payload])};
        }
        case CHANGE_POST:{
           return {
               ...state,
               posts: state.posts.map((post,index)=>index===action.payload.id ?
                   {...post,
                       name:action.payload.name,
                       description:action.payload.description,
                       editable:!post.editable
                   }:
                   post
               )
           }
        }
        case CHANGE_EDITABLE_VALUE:{
            return {
                ...state,
                posts: state.posts.map((post,index)=>index===action.payload ?
                    {...post,editable:!post.editable}:
                    {...post,editable: false}
                )
            };
        }
        default:
            return state;
    }

}
export default postReducer;