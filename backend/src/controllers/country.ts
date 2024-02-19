import express, { Express, Request, Response } from "express";
import { Countries } from '../models/countries'

export async function getAll(req: Request, res: Response) {
    try {
        const data = await Countries.find();
        res.json(data);

    } catch (error: unknown) {
        console.error('Error:', error);
        res.status(500).json({ error: 'Error fetching data' });
    }
}

export async function getOne(req: Request, res: Response) {
    try {
        const result = await Countries.findOne({ _id: req.params.id })
        if (result) {
            res.send(result)
        } else {
            res.send({ message: "No reord found" })
        }

    } catch (error: unknown) {
        res.status(500).json(error);
    }
}

export async function add(req: Request, res: Response) {
    try {
        const data = new Countries({
            country: req.body.country,
            capital: req.body.capital,
        })
        const result = await data.save();
        res.send(result)
    } catch (error: unknown) {
        console.log(error)
        res.status(500).json({ error: 'Error posting data' });
    }

}

export async function update(req: Request, res: Response) {
    let result = await Countries.updateOne(
        { _id: req.params.id },
        {
            $set: req.body
        }
    )
    res.send(result)
}

export async function remove(req: Request, res: Response) {
    const result = await Countries.deleteOne({ _id: req.params.id })
    res.send(result)
}