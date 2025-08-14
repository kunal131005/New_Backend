const asyncHandler = (requestHandler) => {
    (req, res, next) => {
        Promise.resolve(requestHandler(req, res, next)).catch((err) => next(err))
    }
}




export { asyncHandler }


// const aysncHandler = () => {}
// const aysncHandler = (fn) => () => {}

    // Type -1 
// const aysncHandler = (fn) => async (req, res, next) => {
//     try{
//         await fn(res, req, next){

//         }
//     }catch(error){
//         res.status(err.code || 500).json({
//             success:false,
//             message : err.message
//         })
//     }
// }