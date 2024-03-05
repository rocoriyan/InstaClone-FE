import { useEffect, useState } from 'react';
import LogOrSign from "./components/logOrSign/LogOrSign";
import Timeline from './components/timeline/Timeline';
import { getAllPosts } from '../../utils/fetch';
import './App.css';

function App() {
  const [user, setUser] = useState({})
  const [tlPosts, setTlPosts] = useState([])

  const getPosts = async () => {
    try{
      const response = await getAllPosts;
      setTlPosts(response);
    }
    catch{
      console.log("An error has occured.");
    }
  }

  useEffect(()=>{
    getPosts();
  },[]);

  return (
    <div className="wrapper">
      {!user.username ?(
        <LogOrSign setUser={setUser}/>
      ):(
        <Timeline posts={tlPosts} user={user}/>
      )}
    </div>
  )
}

export default App
