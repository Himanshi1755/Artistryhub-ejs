export const indexPage = (request,response,next)=>{

    return response.render("home.ejs" , {/*paintings : paintingList  ,*/isLogin : request.session.isLogin});
}
export const contactPage = (request,response,next)=>{
    return response.render("contact.ejs" ,{isLogin : request.session.isLogin});
}
export const aboutPage = (request,response,next)=>{
    return response.render("about.ejs" , {isLogin : request.session.isLogin});
}
export const galleryPage = (request,response,next)=>{
    return response.render("gallery.ejs" , {isLogin : request.session.isLogin});
}

export const loginPage = (request,response,next)=>{
    return response.render("login.ejs");
}
export const signUpPage = (request,response,next)=>{
    return response.render("signup.ejs");
}