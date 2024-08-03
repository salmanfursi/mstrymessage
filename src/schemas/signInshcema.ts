import { z } from "zod";

// identifier we can put it as a username 
export const signInSchema = z.object({
    identifier: z.string(),
    password: z.string()
})