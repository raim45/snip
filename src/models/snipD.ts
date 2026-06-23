import  {nanoid } from 'nanoid'

export interface NewUrl {
    id: string;
    originalUrl: string;
    shortCode: string;
    createdAT: Date
    click: number; 
}


export const snip = (url: string): NewUrl  =>{
    const item ={
    id: nanoid(),
    originalUrl: url,
    shortCode: nanoid(6),
    createdAT: new Date(),
    click: 0,
    }
    return item
}
