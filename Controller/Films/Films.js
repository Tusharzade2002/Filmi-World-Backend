import Film  from '../../Model/Film.js'

const postFilmsData=async(req,res)=>{
    const {
      title,
      shortDespriction,
      director,
      poster,
      releaseYear,
      Category,
      rating,
      Language
    }=req.body;
  
    const newFilms = new Film({
       title:title,
       shortDespriction:shortDespriction,
       director:director,
      poster:poster,
      releaseYear:releaseYear,
      Category:Category,
      rating:rating,
      Language:Language
    })
  
    const Savedfilms = await newFilms.save()
  
      return res.status(201).json({ 
           success:true,
           message:"film created",
           data:Savedfilms,
          });
  }

  const getFilmsData =async(req,res)=>{
    const Films = await Film.find().select("-__v -createdAt -updatedAt");
    return res.status(200).json({
      success:true,
      data:Films,
      message:"all films fetched",
    })
  }

  const getFilmById = async(req,res)=>{
    const {id}=req.params;

    try{
             const film =await Film.findOne({_id:id}).select("-__v -createdAt -updatedAt");
            if(film){
             return res.status(200).json({
                success:true,
                data:film,
                message:"Film Fetched successfuly"
             })
            } 
            else{
                   return res.status(404).json({
                  success:false,
                  data:film,
                 message:"Film not find"
                  })
                }
        }
        catch(e){
            return res.status(400).json({
                success:false,
                message:e.message,
                data:null
            })
        }

  }

  const DeleteFilmById =async(req,res)=>{
    const {id}=req.params;

    try{
    
         const  Films = await Film.deleteOne({_id:id});
         return res.status(200).json({
            data:Films,
            success:true,
            message:"Film deleted successfully"
         })

    }
    catch(e){
        return res.status(400).json({
             data:null,
             success:false,
             message:e.message
        })
    }
  }

  const UpdateFilmById=async(req,res)=>{
    const {id}=req.params;

    const {
        title,
        shortDespriction,
        director,
        poster,
        releaseYear,
        Category,
        rating,
        Language
      }=req.body;

      try{
        const film = await Film.updateOne({_id:id},{
            title:title,
            shortDespriction:shortDespriction,
            director:director,
           poster:poster,
           releaseYear:releaseYear,
           Category:Category,
           rating:rating,
           Language:Language
        })
        res.status(200).json({
            success:true,
            data:film,
            message:"Update film succesfully"
        })
      }catch(e){

        res.status(400).json({
            success:false,
            data:null,
            message:e.message 
        })
      }

  }

  const UpdateRatingById = async(req,res)=>{
    const {id}=req.params;
    const {rating}=req.body;
    try{
        const ratingfilm =await Film.updateOne({_id:id},{rating:rating});
         return res.status(200).json({
            success:true,
            data:ratingfilm,
            message:"Update rating successfully"
         })
    }
    catch(e){
             return res.status(400).json({
                success:false,
                data:null,
                message:e.message
             })
    }
  }
  export { postFilmsData,getFilmsData,getFilmById,DeleteFilmById,UpdateFilmById,UpdateRatingById}