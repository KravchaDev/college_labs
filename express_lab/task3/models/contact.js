import mongoose from 'mongoose';

const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;

const ContactSchema = new Schema({
    id: ObjectId,
    email: {type: String, require: true},
    name: {type: String, require: true},
    mes: {type: String, require: true},
    anon: {type: String, require: true},
}, {timestamps: true});

export const Contact = mongoose.model('Contact', ContactSchema);