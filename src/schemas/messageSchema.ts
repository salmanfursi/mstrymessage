import { z } from "zod";
// identifier we can put it as a username 
export const messageSchema = z.object({
    content: z
    .string()
    .min(10,{message:'message must be at least 10 characters'})
    .max(300,{message:'message must be no longer then 300 characters'})
})