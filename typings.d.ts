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
export interface IBanner {
    _id: string,
    name: string,
    slug: {
        current: string
    }
    desc: string,
    price: number,
    image: string


}
