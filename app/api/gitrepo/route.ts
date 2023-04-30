import { NextResponse } from 'next/server'

const api = process.env.GITHUB_API_USERS
const user = process.env.GITHUB_USERNAME

export async function GET(req: Request) {
    const url = `${api}${user}/repos`
    const result = await fetch(url)
    const data = await result.json()
    return NextResponse.json(data)


}
