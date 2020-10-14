import React, {useContext} from'react'
import MyContext from '../MyContext'

const Results = props => {
    const context = useContext(MyContext);
    const {dimension}=props;
    const divs = context.color.map(item =>{
        const divStyle = { 
            backgroundColor: item.color ,
            width : item.width+'px',
            height: item.height+ 'px',
            display: 'inline-block',
            margin: '10px',
            

        }
        return (<div style={divStyle} ></div>)
    })
    
   

    
    return(
      
        <div>
            {divs}
        </div>
       
    )
}
export default Results;
