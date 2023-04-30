import gitdata from '../data/gitdata.json'

const api = process.env.GITHUB_API_USERS
const user = process.env.GITHUB_USERNAME

export async function GetAPI() {   
   // const url = `${api}${user}/repos`
    //const resp = await fetch(url)
   // const resuult = await resp.json()
    const resuult = gitdata.map(item => item)
    return resuult
} 
