const usernameIsUnique = (req, res, next) =>{
  
    usernameIsUnique.findBy(req.body.username)
   .then(user => {
     if (user === undefined) {
       next();
     } else {
       res.status(400).json({ error: "User does not exists" });
     }
   });
 }
 const userIdExists = (req, res, next) => {
   userIdExists.findBy(req.body.username)
   .then(user => {
    
   if(userIdExists === user){
   res.json(user);
   }
    else if (!req.body) {
   res.status(400).json({ errorMessage: "no user data" });
 } else if (!req.body.username || !req.body.password){
   res.status(400).json({ errorMessage: "Please provide {username:'', password:''}" });
 } else{
   next()
 
 }
   })
 };
 module.exports = {
   usernameIsUnique,
   userIdExists,
 }
 