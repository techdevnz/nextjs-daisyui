export interface User {
    id: {
        name: string,
        value: string
      },
    name: {
        first: string,
        last: string,
        title: string
    },
    location: {
        street: {
            number: number,
            name: string
        },
        city: string,
        state: string,
        country: string,
        postcode: number,
        coordinates: {
            latitude: string,
            longitude: string
        },
        timezone: {
            offset: string,
            description: string
        }
    },
    email: string,
    picture: {
        large: string,
        medium: string,
        thumbnail: string
    }
}

export interface UserJson {
    id: number,
    name: string,
    username: string,
    email: string,
    address: {
      street: string,
      suite: string,
      city: string,
      zipcode: string,
      geo: {
        lat: number,
        lng: number
      }
    },
    phone: string,
    website: string,
    company: {
      name: string,
      catchPhrase: string,
      bs: string
    }
}