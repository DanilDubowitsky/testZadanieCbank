import React, {useState} from 'react'
import {connect} from "react-redux";
import row from './row.module.css';
import table from "./table.module.css";
import {changeEditableValue, changePost, deletePost} from "../redux/actions";



const Row = (props)=>{
    debugger;
    const nameInput = React.createRef();
    const descInput = React.createRef();
    let changedPost;

    debugger;


    function saveClick(id) {
        if(nameInput.current.value === "" || descInput.current.value === ""){
            alert('Поля не должны быть пустыми');
            return;
        }
        changedPost = {
            name:nameInput.current.value,
            description:descInput.current.value,
            id:id
        }

        props.changePost(changedPost);
    }
    
    function onDeleteClick(id){
        props.deletePost(id);
    }
    function changeEditableValue(id){
        props.changeEditableValue(id);
    }
    if(!props.posts.length){
        return <p>Постов нет</p>;
    }
    else {
        return props.posts.map((post,index) =>
            <tr key={index}>
                {!post.editable &&
                <div>
                    <input className={table.myInput} readOnly type={'text'} value={post.name}/>
                    <input className={table.myInput} readOnly type={'text'} value={post.description}/>
                </div>
                }
                {post.editable &&
                <div>
                    <input className={table.myInput}  ref={nameInput}  type={'text'} defaultValue={post.name}/>
                    <input className={table.myInput} ref={descInput}  type={'text'} defaultValue={post.description}/>
                </div>
                }
                <td>
                    {!post.editable &&
                    <button onClick={()=>changeEditableValue(index)}>Редактировать</button>
                    }
                    {post.editable &&
                        <button onClick={()=>saveClick(index)} >Сохранить</button>
                    }
                </td>
                <td>
                    <button onClick={()=>onDeleteClick(index)}>Удалить</button>
                </td>
            </tr>
        )
    }
}
const mapStateToProps = state =>{
    console.log(state);
    return{
        posts: state.posts.posts
    }
}
const mapDispatchToProps = {
    deletePost,
    changePost,
    changeEditableValue
}
export default connect(mapStateToProps,mapDispatchToProps)(Row);