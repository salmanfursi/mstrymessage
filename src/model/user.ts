import mongoose, { Schema, Document } from "mongoose"

export interface Message extends Document {
    content: string;
    createdAt: Date;
}


const messageSchema = new Schema<Message>({
    content: { type: String, required: true },
    createdAt: { type: Date, default: Date.now, required: true },
});

export interface User extends Document {
    username: string;
    email: string;
    password: string;
    verifyCode: string;
    verifyCodeExpiry: Date;
    isVarified: boolean;
    isAcceptingMessage: boolean;
    message: Message[];
}

const userSchema = new Schema<User>({
    username: { type: String, required: [true,'Username is required'],trim:true },
    email: {
        type: String,
        required: [true, "Email is required"],
        unique: true,
        match: [/.+@.+\..+/, 'Please use a valid email address'],
      },
    password: { type: String, required: [true, "password is required"], },
    verifyCode: { type: String, required: [true, "varify is required"], },
    verifyCodeExpiry: { type: Date, required: true },
    isVarified: { type: Boolean, required: false },
    isAcceptingMessage: { type: Boolean, required: true },
    message: [messageSchema],
});


const UserModel = (mongoose.models.User as mongoose.Model<User>) || mongoose.model<User>('User', userSchema);
