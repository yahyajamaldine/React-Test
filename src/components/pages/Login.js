import React,{useContext} from 'react';
import {Link,useNavigate,Navigate} from 'react-router-dom';
import {useForm} from 'react-hook-form';
import FormButton from '../FormButton';
import UserContext from '../Auth/UserContext';

export default function Login(){
    const {register,handleSubmit}=useForm();
    const {currentUser,setCurrentUser,login}=useContext(UserContext);
    let NavigateTo =useNavigate();
    const onSubmit=(data)=>{
     if(data.email&&data.password){
       setCurrentUser(login(data.email,data.password));
        NavigateTo('/Posts');
     }
     else{
         alert("please fix erros");
     }
    };
  return(<>{
        currentUser
        ?<Navigate to="/Posts"/>
        :(<>
        <header>
           <h2 className='logo'>Logo</h2>
            <div className='BtnGrp'>
            <Link to="/"><FormButton className="navBtn" title={"Home"} /></Link>
            <Link to="/Login"><FormButton title={"Login"} mode="contained" /></Link>
            </div>
       </header>
       <main className='mainForm'>
           <form onSubmit={handleSubmit(onSubmit)}>
               <p className='formTitle'>Login</p>
               <label>
                email
               <input name="email" type="email" placeholder='email@example.com' {...register("email",{required:true})}/>
               </label>
               <label>
                Password
                <input name="password" type="password" placeholder='passowrod' {...register("password",{required:true})}/>
               </label>
              <input className='bttn' type="submit" value="Login" />
           </form>
       </main>
       </>)
      }
      </>
  )
}