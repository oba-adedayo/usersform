const userModel = require("../models/user.model")
const cloudinary = require('cloudinary').v2;
const { MongoClient } = require('mongodb');
const URI = process.env.MONGO_URL;

cloudinary.config({
    cloud_name: process.env.CLOUD_NAME,
    api_key: process.env.API_KEY,
    api_secret: process.env.API_SECRET,
  });
const getLandingPage = (req,res) => {
    res.send("it wort")
}
const regUser = (req,res) => {
    //   console.log(req.body);
     const userDt = req.body 
     const FVimg = req.body.fv
     const BVimg = req.body.bv
     const FICimg = req.body.Forpic
     const email = req.body.email
     console.log(email);
     const client = new MongoClient(URI);
     
     let form =new userModel(req.body)
     form.save();
     return new Promise((resolve, reject) => {
        cloudinary.uploader.upload(FVimg, (error, result1) => {
          if (error) return reject(error);
    
          cloudinary.uploader.upload(BVimg, (error, result2) => {
            if (error) return reject(error);
    
            cloudinary.uploader.upload(FICimg, (error, result3) => {
              if (error) return reject(error);
    
              const urls = [result1.secure_url, result2.secure_url, result3.secure_url];
              resolve(urls);
           res.send([result1.secure_url, result2.secure_url, result3.secure_url]);
            });
          });
        });
      });
         const allde = db.clientinfo_Db.find( { } );
        return
        res.send(allde)

     
      mapCollectionDetails('clientinfo_Db');
         
//      cloudinary.uploader.upload(FICimg,(err,result) => {
//         if(err){
//             console.log('file did no upload');
//         }else{
//             console.log(result);

//         }
// })
     


}
module.exports = {getLandingPage, regUser}