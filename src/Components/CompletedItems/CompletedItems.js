import React from 'react'
import './CompletedItems.css'


const Completed= (props)=>{
    let margin;
       if(props.completeditems && props.completeditems.length){
           margin='MarginCom';

       }
       else{
           margin=''
       }
    
    return(
        props.completeditems.map((x,index) =>

        
        
                <div  key={index} className='CompleteList'>
                
               <input type='checkbox' checked={x.isChecked} value={x.item} onChange={props.onCheckClick}/>
               <input type='text' className={x.isDisabled? 'CompleteItem crossline': 'CompleteItem'}  disabled={x.isDisabled} value={x.item} id={x.item} onChange={props.onChangeCom} />
               <div className='EditDelete'><div onClick={props.onComEdit} className='EditComplete' id={x.item}>{x.isDisabled?'Edit':'Save'}</div>
               <div onClick={props.onComDelete} className='DeleteComplete' id={x.item}>Delete</div>
                </div>
                <div className={margin}></div>
                </div>
               
                
            
            )
    )

}

export default Completed