import axios from "axios";
const baseURL = "http://localhost:3100";


//-------------------------FAQS------------------------------
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


//----------------------PROPERTIES----------------------------

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

//property-details
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
            type: "prop_details",
            payload
        }
}


//recommendations sections
export async function getRcmd(id=''){
  let payload = null;
  try {
      let response = await fetch(`${baseURL}/recommend/${id}`,{method:'GET'});
      payload = await response.json();
  }
  catch (error) {
      console.log(error);

  }
      return {
          type: "prop_recommend",
          payload
      }
}


//-------------------------USER------------------------------
//register
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

//profile
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

//edit

export async function updateUser(user,id) {
   let payload = null
   try {
       let response = await fetch(`${baseURL}/edit/${id}`
       ,{
           method:"PUT", 
           headers: {
              'Content-type': 'application/json; charset=UTF-8'  
             },
           body: JSON.stringify(user)
          })
       payload = await response.json()

   } catch (error) {
       console.log(error)
   }
   return {
       type: "user_update",
       payload
   }
}

//wishlist

export async function wishlistUser(wishlist,id) {
  let payload = null
  try {
      let response = await fetch(`${baseURL}/wishlistUser/${id}`
      ,{
          method:"PUT", 
          headers: {
             'Content-type': 'application/json; charset=UTF-8'  
            },
          body: JSON.stringify(wishlist)
         })
      payload = await response.json()

  } catch (error) {
      console.log(error)
  }
  return {
      type: "Wishlist_user",
      payload
  }
}