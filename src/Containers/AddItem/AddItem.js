import React, { Component } from 'react'
import Section from '../../Components/Section/Section'
import TodoItems from '../../Components/ToDoItem/TodoItems'
import CompletedItems from '../../Components/CompletedItems/CompletedItems'
import  './AddItem.css'
 class AddItem extends Component {
     constructor(props) {
         super(props)
     
         this.state = {
              newItem:'',
              todoitems:[],
              completeditems:[],

         }
     }
     onAddHandler =()=>{
           console.log(this.state.newItem.trim().length)
      const todoArray=this.state.todoitems
      let alrExist=false;
      todoArray.forEach((x) =>{
               if(x.item.trim("") === this.state.newItem.trim("")){
                    alrExist=true  
               }
    })

    if(this.state.newItem.length===0){
        alrExist=true;
    }
      if(!alrExist){
          const newItem={
          isComplete:false,
          item:this.state.newItem,
          isDisabled : true,
            isChecked: false
      }
      todoArray.push(newItem)
      
      this.setState({
          newItem:'',
          todoitems:todoArray
      })
    
    
    
    }

    else{
        this.setState({
            newItem:''
        })
    }
    
      console.log(this.state)

     }

     onChangeInput=(e)=>{
         
        this.setState({
             newItem:e.target.value
        })
    
     }

    onChangeTodo=(e) =>{
        
        let todos = this.state.todoitems;
        let newValue = e.target.value;
        todos.forEach ((x)=>{
            if(x.item=== e.target.id){
                x.item = newValue;
            }
        });
        
        this.setState({todoitems:todos});
        
 }

 onChangeCom=(e) =>{
   
    let todos = this.state.completeditems;
    let newValue = e.target.value;
    todos.forEach ((x)=>{
        if(x.item=== e.target.id){
            x.item = newValue;
        }
    });
    
    this.setState({completeditems:todos});
    
}

    onTodoEdit=(e)=>{
        console.log("edit Click ToDo:", e.target);
        const todos = this.state.todoitems;
        todos.forEach((x)=>{
            if(x.item === e.target.id){
                x.isDisabled = !x.isDisabled;
            }
        });
        console.log("currentToDoList =",todos);
        this.setState({todoitems:todos});
    }

    onComEdit=(e)=>{
        console.log("edit Click Completed:", e.target);
        const todos = this.state.completeditems;
        todos.forEach((x)=>{
            if(x.item === e.target.id){
                x.isDisabled = !x.isDisabled;
            }
        });
        console.log("currentCompletedList =",todos);
        this.setState({completeditems:todos});
    }

   onCheckClickTodo=(e)=>{
    console.log("onCheckClick Todo:",e.target.value);
      let todos=this.state.todoitems;
        let remaining=todos.filter((x)=>x.item!==e.target.value)
        let completedTodo = todos.filter((x)=>x.item === e.target.value);
        completedTodo[0].isChecked= true;
        completedTodo[0].isComplete=true;
        console.log(remaining)
        console.log(completedTodo)
        this.setState({
            todoitems:remaining,
            completeditems:[...this.state.completeditems,completedTodo[0]]
        })
        
   }

   onCheckClickCom=(e)=>{
    console.log("onCheckClick Completed:",e.target.value);
      let todos=this.state.completeditems;
        let remaining=todos.filter((x)=>x.item!==e.target.value)
        let needTodo = todos.filter((x)=>x.item === e.target.value);
        needTodo[0].isChecked= false;
        needTodo[0].isComplete=false;
        console.log(remaining)
        console.log(needTodo)
        this.setState({
            completeditems:remaining,
            todoitems:[...this.state.todoitems,needTodo[0]]
        })
        
   }

   onTodoDelete =(e)=>{
    console.log("delete todo :", e.target);
    let todos = this.state.todoitems;
    let newTodos = todos.filter((x) => x.item !== e.target.id);
    console.log("newTodos:", newTodos);
    this.setState({todoitems : newTodos});

   }
   onComDelete=(e)=>{

    console.log("delete completed :", e.target);
    let todos = this.state.completeditems;
    let newTodos = todos.filter((x) => x.item !== e.target.id);
    console.log("newComs:", newTodos);
    this.setState({completeditems : newTodos});
   }

   keyPressed=(e)=>{
       if(e.key==='Enter'){
           this.onAddHandler()
       }
   }
    render() {
         let secTodoTitle;
         let secComTitle;
         if(this.state.todoitems && this.state.todoitems.length) {
              secTodoTitle=<Section title='TODO' />
         }
         if(this.state.completeditems && this.state.completeditems.length) {
            secComTitle=<Section title='COMPLETED' />
       }
       
        return (
            <div>
                <Section title='ADD ITEM' />
                <input className='AddItem' type='text' value={this.state.newItem} onChange={this.onChangeInput} 
                 placeholder='Enter a task' />
                <div className='AddButton' onClick={this.onAddHandler} onKeyPress={this.keyPressed}>Add</div>

                {secTodoTitle}
                <TodoItems todoitems={this.state.todoitems} onChangeTodo={this.onChangeTodo}  
                 onCheckClick={this.onCheckClickTodo} onTodoEdit={this.onTodoEdit} onTodoDelete={this.onTodoDelete} />
                
                 {secComTitle }
                <CompletedItems completeditems={this.state.completeditems} onComEdit={this.onComEdit} onCheckClick={this.onCheckClickCom}
                 onComDelete={this.onComDelete}  onChangeCom={this.onChangeCom}/>
               
            </div>
        )
    }
}


export default AddItem;