export {}
















export type postType = {
    userId: number
    id: number
    title: string
    body: string
}


export type userType = {
    id: number
    name: string
    username: string
    email: string
    address: {
        street: string
        suite: string
        city: string
        zipcode: string
        geo: {
            lat: string
            lng: string
        }
    }
    phone: string
    website: string
    company: {
        name: string
        catchPhrase: string
        bs: string
    }
}




export type commentType = {
    postId: number
    id: number
    email: string
    body: string
}