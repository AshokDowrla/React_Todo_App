import React from 'react'

import './TodoItem.css'

const Todo= (props)=>{
    let margin;
       if(props.todoitems && props.todoitems.length){
           margin='MarginTodo';

       }
       else{
           margin=''
       }
    return (
        
            
            props.todoitems.map((x,index) =>
             
                <div className='TodoList' key={index}>
                
               <input type='checkbox' checked={x.isChecked} value={x.item} onChange={props.onCheckClick}/>
               <input type='text' className='TodoItem'   disabled={x.isDisabled} value={x.item} id={x.item} onChange={props.onChangeTodo} />
               
               <div className='EditDelete'><div className='EditTodo' onClick={props.onTodoEdit} id={x.item}>{x.isDisabled?'Edit':'Save'}</div>
               
               <div onClick={props.onTodoDelete} className='DeleteTodo' id={x.item}>Delete</div>
               </div>
               <div className={margin}></div>
                </div>
            
            )
        
    )
    
}

export default Todo