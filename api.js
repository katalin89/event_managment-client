function api(path,method,body=null){
    const url="http://localhost:8080/api/v1"+path;

    const options={
        method,
        headers:{
            'Content-Type':'application/json;charset=utf-8',

        },
        
    };
    if(body!==null){
        options.body=JSON.stringify(body);
    }
    return fetch(url,options);
}

async function validateLogin(e,pwd){
    let loginDTO={
        email:e,
        password:pwd
    }

    let data=await api("users/login",'POST',loginDTO);

    if(data.status==200){
        return data.json();

    }else{
        throw new Error("forbidden");
    }
}