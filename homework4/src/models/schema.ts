import joi from "joi";

export const schema = joi.object({
    login: joi.string().required(),
    password: joi.string().required().pattern(new RegExp('[A-Za-z0-9]*([a-zA-Z]+[0-9]+|[0-9]+[a-zA-Z]+)')),
    age: joi.number().integer().min(4).max(130).required(),
    isDeleted: joi.boolean().required(),
});

export const deleteSchema = joi.object({
    id: joi.string(),
});

export type Permissions = 'READ' | 'WRITE' | 'DELETE' | 'SHARE' | 'UPLOAD_FILES';

export interface GroupInterface {
    id: string;
    name: string;
    permissions: Permissions[];
}