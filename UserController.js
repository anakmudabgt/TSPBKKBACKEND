import ListData from "../models/UserModel.js";

export const getListData = async(req,res)=>{
    try{
        const response = await ListData.findAll();
        res.status(200).json(response);
    } catch (error) {
        console.log(error.message);
    }
}

export const getListDataById = async(req,res)=>{
    try{
        const response = await ListData.findOne();
        where :{
            id: req.params.id
        }
        res.status(200).json(response);
    } catch (error) {
        console.log(error.message);
    }
}

export const createListData = async(req,res)=>{
    try{
       await ListData.create(req.body);
        res.status(201).json({msg: "List Data ditambahkan"});
    } catch (error) {
        console.log(error.message);
    }
}
export const updateListData = async (req, res) => {
    try {
        await List.update(req.body,{
            where: {
                id: req.params.id
            }
        })
        res.status(200).json({msg : "Liat Data telah Update"})
    } catch (error) {
        console.log(error.message);
    }
}
export const deleteListData = async (req, res) => {
    try {
        await List.destroy({
            where: {
                id: req.params.id
            }
        })
        res.status(200).json({msg : "delete List Data"})
    } catch (error) {
        console.log(error.message);
    }
}