import React from 'react';
import {Link} from 'react-router-dom'
import FormButton from '../FormButton';

export default function Home(){
  return(
      <>
       <header>
           <h2 className='logo'>Logo</h2>
            <div className='BtnGrp'>
            <Link to="/"><FormButton title={"Home"} /></Link>
            <Link to="/Login"><FormButton title={"Login"} mode="contained" /></Link>
            </div>
       </header>
       <main>
           <h1>Home</h1>
       </main>
      </>
  )
}