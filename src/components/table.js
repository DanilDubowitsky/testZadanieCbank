import Row from "./row";
import {addPost} from "../redux/actions";
import {connect} from "react-redux";
import React from "react";
import table from './table.module.css'

const Table = (props)=>{
    const nameInput = React.createRef();
    const descInput = React.createRef();



    function submitHandler(){
        if(nameInput.current.value === "" || descInput.current.value === ""){
            alert("Поля должны быть заполнены");
            return;
        }

        let newPost = {
            name:nameInput.current.value,
            description:descInput.current.value,
            editable:false
        }

        props.addPost(newPost);
        nameInput.current.value = "";
        descInput.current.value = "";


    }


    return(
        <div>
            <input className={table.myInput} ref={nameInput} type={'text'} placeholder={'Имя'}/>
            <input className={table.myInput} ref={descInput} type={'text'} placeholder={'Описание'}/>
            <button className={table.btnClass} onClick={submitHandler}>Добавить</button>
            <Row/>
        </div>
    )
}
const mapDispatchToProps = {
    addPost
}
export default connect(null,mapDispatchToProps)(Table);
