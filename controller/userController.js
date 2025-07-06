import User from "../model/userModel.js";

export const login = (request,response,next)=>{
  let {email,password} = request.body;
  User.find(email,password)
  .then(result=>{
    if(result.length){
      console.log(result);
      request.session.isLogin=true;
      return response.redirect("/");
    
    }else
      return response.redirect("/login");
  })
  .catch(err=>{
    return response.end("Something Wrong");
  })
}

export const checkForEmail = (request,response,next)=>{
  User.hasEmail(request.params.emailId)
  .then(result=>{
    if(result.length)
     return response.status(200).json({status: true,message: "Email id is already taken"});
    else
     return response.status(200).json({status: false,message: "Available"});
  }).catch(err=>{
    console.log(err);
  })
}
export const signUp = (request,response,next)=>{
  let {name,email,password,contact} = request.body;
  let user = new User(null,name,email,password,contact);
  user.create().then(result=>{

    return response.redirect("/login");
  }).catch(err=>{
    console.log(err);
    response.end("Something wrong....");
  });
}

export const logOut = (request,response,next)=>{
   request.session.isLogin = false;
  //  request.session.currentUser = null;
   request.session.destroy();
   return response.redirect("/");
}