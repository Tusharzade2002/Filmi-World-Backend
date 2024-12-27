const getHome=(req,res)=>{
    res.json({message:"Welcome to filmi-world app"})
}

const Healthcheck= (req,res)=>{
    res.json({message:"server is up and running"})
}

const GetNotFound=(res,req)=>{
    res.json({message:"api end point not found"})
}
export {getHome ,Healthcheck ,GetNotFound}