import React from 'react';
import "./Legend.css"

const Legend = ({legendItems}) => {
    //console.log(legendItems);
    return ( 
    <div style={{
        display:"flex",
        alignItems:"stretch"
      }}
    >
    {legendItems.map((item) => (
    <div 
        key={item.title}
        className='legend-quant'
        style={{
            backgroundColor:item.color,
            // flex:1,
            // display:"flex",
            // alignItems:"center",
            // justifyContent:"center",
            color: item.textColor,
            height:"10vh",
            // fontSize:"1.4rem",
            fontFamily:"Lucida Consolea"
        }}
    ><span className='text-legend'>{item.title}</span></div>
    
     ) )}</div> 
    );
}
 
export default Legend;