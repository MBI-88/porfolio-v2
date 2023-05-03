import gitdata from '../data/gitdata.json'

const api = process.env.GITHUB_API_USERS
const user = process.env.GITHUB_USERNAME
const token = process.env.GITHUB_TOKEN

export async function GetAPI() {   
    const headers = {
        "Content-Type":"application/json",
        "Authorization":`mbi-token ${token}`
    }
    
    const url = `${api}${user}/repos`
    const resp = await fetch(url,{headers})
    const resuult = await resp.json()
    //const resuult = gitdata.map(item => item)
    return resuult
} 
