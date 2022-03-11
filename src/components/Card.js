
export const Card=({title,body,...rest})=>{
    return(
        <div {...rest}>
         <h2 className='title'>{title}</h2>
        <p>{body}</p>
        </div>
    )
}