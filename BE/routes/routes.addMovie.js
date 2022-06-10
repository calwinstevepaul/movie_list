const express = require('express');
const {getMovies, setMovies} = require("../controller/controller.Movie")
var router = express.Router();


router.get('/',async(req,res)=>{
    try {
        let getMoviesRes = await getMovies(req) 
        if(!getMoviesRes.status) throw getMoviesRes      
        
        res.status(200).send(getMoviesRes.data)
        
    } catch (error) {
        console.log("error in get Movie router",error)
        
        if(!error.status && error.error){
            return res.status(error.errorcode).send(error.error)
        }
        return res.status(500).send("server error")
    }
})

router.post('/add',async(req,res)=>{
    try {
        let setMoviesRes = await setMovies(req) 
        if(!setMoviesRes.status) throw setMoviesRes      
        
        res.status(200).send(setMoviesRes.data)
        
    } catch (error) {
        console.log("error in add Movie router",error)
        
        if(!error.status && error.error){
            return res.status(error.errorcode).send(error.error)
        }
        return res.status(500).send("server error")
    }
})

module.exports = router


