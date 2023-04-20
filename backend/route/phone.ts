import { Router, Request, Response } from "express";
import { Phone } from "../model/phone";

var expressFunction = require('express'); //object to call
const router = expressFunction.Router();

router.route("/phone")
    .get(async (_req: Request, res: Response) => {
        try {
            const data = (await Phone.find({}));
            res.status(200).send(data);
        } catch (error) {
            res.status(500).send(error);
        }
});

router.route('/phone')
    .post(async (req: Request, res: Response) => {
        const payload = {
            id: req.body.id,
            brand: req.body.brand,
            model: req.body.model,
            price: req.body.price,
            color: req.body.color,
            storage: req.body.storage,
            spec: req.body.spce,
        }
        console.log("payload", payload)
        const payloadTodo = new Phone(payload)

        try {
            await payloadTodo.save();
            res.status(200).send({message: "Add phone successfully", res: payloadTodo});
        } catch (error) {
            res.status(500).send(error)
        }
})

router.route('/phone/:id')
    .delete(async (req: Request, res: Response) => {
        const tid = req.params.id
        console.log("tid:", tid)
        try {
            await Phone.findByIdAndRemove(tid)
            const data = (await Phone.find({}));
            res.status(200).send({message: "Delete phone ID:" + tid + " successfully" , res: data});
        } catch (error) {
            res.status(500).send(error)
        }
    })

router.route('/phone/:id')
    .patch(async (req: Request, res: Response) => {
        const tid = req.params.id
        console.log("tid", tid)
        try {
            await Phone.findByIdAndUpdate({"_id":tid}, req.body)
            const data = (await Phone.find({}));
            res.status(200).send({message: "Update phone ID:" + tid + " successfully" , res: data});
        } catch (error){
            res.status(500).send(error)
        }
    })

export { router };