const token = process.env.NEXT_PUBLIC_GITHUB_TOKEN

export function GetAPIrepo(url:string) {
    const headers = {
        "Content-Type": "application/json",
        "Authorization": `mbi-token ${token}`
    }
    return fetch(url,{headers})
}