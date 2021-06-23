import axios from "axios";
const baseURL = "http://localhost:3100";

export async function getfaq() {
  let payload = null;
  try {
    let response = await fetch(`${baseURL}/faq`);
    payload = await response.json();
  } catch (error) {
    console.log(error);
  }
  return {
    type: "FAQ_LIST",
    payload,
  };
}

export async function getproperties(token) {
  let payload = null;
  try {
    let response = await fetch(`${baseURL}/property`,{method:'GET',
    headers:{
        "Authorization":`Bearer ${token}`
    }
});
if(!token){
    window.localStorage.clear();
}
    payload = await response.json();
  } catch (error) {
    console.log(error);
  }
  return {
    type: "PROPERTIES_LIST",
    payload,
  };
}


export async function getProp(id='',token){
    let payload = null;
    try {
        let response = await fetch(`${baseURL}/property/id=${id}`,{method:'GET',
        headers:{
            "Authorization":`Bearer ${token}`
        }
    });
        if(!token){
            window.localStorage.clear();
        }
        payload = await response.json();
    }
    catch (error) {
        console.log(error);

    }
    console.log(payload);
        return {
            type: "user_details",
            payload
        }
}


export async function addUser(user) {
  let payload = null;
  let data = "";
  try {
    await axios.post(`${baseURL}/register`, user).then((res) => {
      if (res.data === "Please fill all fields!") {
        data = res.data;
      } else if (res.data === "User already exists!") {
        data = res.data;
      } else {
        data = res.data;
        res.headers = {
          Authorization: `Bearer ${res.data.token}`,
        };
      }
    });
  } catch (err) {
    console.log(err);
  }
  return {
    type: "user_add",
    data,
    payload
  };
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


export async function getUser(id='',token){
    let payload = null;
    try {
        let response = await fetch(`${baseURL}/profile/id=${id}`,{method:'GET',
        headers:{
            "Authorization":`Bearer ${token}`
        }
    });
        if(!token){
            window.localStorage.clear();
        }
        payload = await response.json();
    }
    catch (error) {
        console.log(error);

    }
    console.log(payload);
        return {
            type: "user_details",
            payload
        }
}


export async function updateUser(user){
    let payload=null;
    try{
      await axios.post(`${baseURL}/edit`,user).then(res=>{
        payload = res.json();
      })
    }
    catch(err){
        console.log(err);
    }
    return{
        type:'user_update',
        payload
    }
}


