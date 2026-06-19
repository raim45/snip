import  {nanoid } from 'nanoid'

const snip = (url) =>{
    const item ={
    id: nanoid(),
    originalUrl: url,
    shortCode: nanoid(6),
    createdAT: new Date(),
    click: 0,
    }
    return item

}

export default snip