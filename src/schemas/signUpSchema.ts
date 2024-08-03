import { z } from "zod";

export const usernameValidation = z
.string()
.min(2, 'username must be at least 2 charecters')
.min(20, 'username max would be 20 charecters')
.regex(/^[a-zA-Z0-9]+$/,'username must not contain special charecters')

export const signUpSchema = z.object({
    username: usernameValidation,
    email: z.string().email({message:'invalid email address'}),
    password: z.string().min(6,{message:'ipassword must be atleast 6 charecter'})
})