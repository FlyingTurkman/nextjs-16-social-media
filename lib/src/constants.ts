import { userType } from "@/types"





export const baseApiPath = 'https://jsonplaceholder.typicode.com'



export const user: userType = {
    id: 11,
    address: {
        city: 'city',
        geo: {
            lat: 'lat',
            lng: 'lng'
        },
        street: 'street',
        suite: 'suite',
        zipcode: 'zipcode'
    },
    company: {
        bs: 'bs',
        catchPhrase: 'cp',
        name: 'name'
    },
    email: 'FlyingTurkman@asdasd.com',
    name: 'Flying Turkman',
    phone: 'phone',
    username: 'FlyingTurkman',
    website: 'website'
}