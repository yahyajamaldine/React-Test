import React, { useEffect,useContext,useState } from 'react';
import {Link,Navigate,useNavigate} from 'react-router-dom'
import FormButton from '../FormButton';
import { Card } from '../Card';
import UserContext from '../Auth/UserContext';

let FetchData=(url,setDate)=>{
    fetch(url)
      .then(data=>{
        if(!data.ok){
            throw Error(data.status);
        }
        return data.json();
      })
      .then(posts=>{
        setDate(posts);
      })
      .catch(e=>{
          console.log(e);
      })
  }


export default function Posts(){
  const {currentUser,setCurrentUser,Logout}=useContext(UserContext);
  const [post,setPost]=useState([]);
  const NavigateTO=useNavigate();
  let onClick=()=>{
      setCurrentUser('');
      Logout();
      NavigateTO('/Login');
  }
  useEffect(()=>{

    FetchData('https://jsonplaceholder.typicode.com/posts',setPost);

  },[currentUser])
  return(
      <>{ currentUser?(<>
       <header>
           <h2 className='logo'>Logo</h2>
            <div className='BtnGrp'>
            <Link to="/"><FormButton className="navBtn" title={"Home"} /></Link>
             <Link to="/Posts"><FormButton title={"Posts"} /></Link>
            <FormButton className="contained" title={"Logout"} onClick={onClick} />
            </div>
       </header>
       <main>
           <p>Posts</p>
           <div className='container'>
             {post.map(item=><>
                <Card className="card" title={item.title} body={item.body}/> 
             </>)}
           </div>
       </main></>)
       :<Navigate to="/Login" />
     }
      </>
  )
}