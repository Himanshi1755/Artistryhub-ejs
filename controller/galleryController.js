
import Painting from "../model/paintingModel.js";
import Pottery from "../model/potteryModel.js";

export const viewMore = async(request,response,next)=>{
  try{
    let result = await Painting.findById(request.params.paintingId);
    let painting = result[0];
    console.log(painting);
    return response.render("exporeMore " , {
      painting,
      islogin: request.session.islogin

    });
  }
  catch(err){
    
  }
}

export const paintingSave = async (request,response,next)=>{
   try{ 
    let paintingList = request.body;
    for(let painting of paintingList){
        await Painting.create(painting);
    }
    return response.status(201).json({message: "All product saved.."});
   }
   catch(err){
    console.log(err);
   } 
}

export const getPaintings = async (req, res) => {
  try {
    const paintingArray = await Painting.getAll();
    res.render("painting", { paintings: paintingArray ,isLogin : req.session.isLogin});
  } catch (error) {
    console.error(error);
    res.send("Error fetching paintings" , error);
  }
};


// ------------------------------------------------------


export const potterySave = async (request,response,next)=>{
   try{ 
    let potteryItemList = request.body;
    for(let pottery of potteryItemList){
        await Pottery.createP(pottery);
    }
    return response.status(201).json({message: "All product saved.."});
   }
   catch(err){
    console.log(err);
   } 
}

export const getPotteryItem = async (req, res) => {
  try {
    const potteryItemArray = await Pottery.getAllP();
    res.render("pottery", { pottery: potteryItemArray });
  } catch (error) {
    console.error(error);
    res.send("Error fetching paintings");
  }
};

export const getPaintingById = (req,res)=>{
  Painting.findById(req.params.paintingId)
  .then(result=>{
    console.log(result[0]);
    return res.render("exploreMore.ejs",{isLogin:req.session.islogin,painting:result[0]});
  
  }).catch(err=>{
    console.log(err);

  });
}