import React,{useState,useEffect} from "react";


const App = () =>{
    const [state,setData] = useState({
        users:""
    });
    const fetchData = async () =>{
        const api = await fetch("/users");
        setData({
            users : api.json
        });
    };
    useEffect(()=>{
        fetchData();
    },[])
    console.log(fetch("/users"));
    return(
       <div className="text-center">
        <h1>Hello LaravelViteReactJs</h1>
       </div>
    );
}

export default App;