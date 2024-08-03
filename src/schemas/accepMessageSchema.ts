import { z } from "zod";
// identifier we can put it as a username 
export const acceptMessageSchema = z.object({
    acceptMessages: z.boolean()
})