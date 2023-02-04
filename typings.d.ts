export interface IProduct {
    _id: string,
    name: string,
    slug: {
        current: string
    }
    model: string,
    material: string,
    price: number,
    image: string[]

}
