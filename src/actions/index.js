import axios from "axios";
const baseURL = 'http://localhost:3100';

export async function getfaq() {
    let payload = null
    try {
        let response = await fetch(`${baseURL}/faq`)
        payload = await response.json()

    } catch (error) {
        console.log(error)
    }
    return {
        type: "FAQ_LIST",
        payload
    }
}


export async function addUser(user){
    let payload=null;
    let data = "";
    try{
       await axios.post(`${baseURL}/register`,user).then(res=>{
        if(res.data==='Please fill all fields!'){
            data= res.data
        }   
        else if(res.data === 'User already exists!'){
              data= res.data;
           }
        else{
            data = res.data
            res.headers={
                "Authorization": `Bearer ${res.data.token}`
            }
        }
       })
        
    }
    catch(err){
        console.log(err);
    }
    return{
        type:'user_add',
        data,
        payload
    }
}



export async function userLogin(user){
    let payload=null;
    let data = "";
    try{
       await axios.post(`${baseURL}/login`,user).then(res=>{
        if(res.data==='Please fill all fields!'){
            data= res.data
        }   
        else if(res.data === 'User already exists!'){
              data= res.data;
           }
        else{
            data = res.data
        }
       })
        
    }
    catch(err){
        console.log(err);
    }
    return{
        type:'user_Login',
        data,
        payload
    }
}