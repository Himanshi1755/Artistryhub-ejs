export const authentication = (request,response,next)=>{
   if(request.session.isLogin)
    next();
   else
     return response.redirect("/login");
}