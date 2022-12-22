import messageModel from "../models/messageModel.js";


export async function createMessage(req, res){
    const id_Message = req.body;

        let document;
    try {
        document = await messageModel.create(id_Message)
    } catch (error) {
        res.status(401);
        res.json(error);
    }
        res.status(201);
        res.json(document)
    
}
export async function readMessage(req, res){
    const id_Message = req.params.id_Message;

    let document;
    try {
        document= await messageModel.findOne({id_Message})
    } catch (error) {
        res.status(401);
        res.json(error);
    }

    res.status(201);
    res.json(document);
}


export async function updateMessage(req, res){
    const {id_Message} = req.params;
    const {changes} = req.body;


    let document;

    try {
        document = await messageModel.updateOne({"id_Message": id_Message},changes);
    } catch (error) {
        res.status(401);
        res.json(error);
    }

    res.status(201);
    res.json(document);


}
export async function deleteMessage(req, res){
    const {id_Message} = req.params;

    let document;

    try {
        document = await messageModel.findOneAndDelete({"id_Message":id_Message})
    } catch (error) {
        res.status(401),
        res.json(error);
     }
     res.status(200);
     res.json(document);


}