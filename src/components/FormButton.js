import React from 'react';


export default function FormButton({title,mode,...rest}){
    return (
        <button className={mode?"contained":""} {...rest}>
         {title}
        </button>
    )
}
