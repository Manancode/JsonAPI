import { NextRequest } from "next/server"

import {z} from 'zod'

export const POST = async (req : NextRequest) => {
 const body = await req.json()
 // data ; format
 // step:1 make sure incoming request is valid 
 const schema = z.object({
data : z.string() , 
format : z.object({}).passthrough()

 })

 const r = schema.parse(body)
 console.log("res" ,res)

 return new Response("body recieved")
}