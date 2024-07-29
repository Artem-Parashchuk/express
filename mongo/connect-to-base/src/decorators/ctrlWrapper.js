export const ctrlWrapper = controller => {
    const func = async(req, res, next) => {
        try{

        }catch(error) {
            next(error)
        }
    }
    return func
}