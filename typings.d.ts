export interface IProduct {
    _id: string,
    name: string,
    slug: {
        current: string
    }
    model: string,
    material: string,
    price: number,
    image: string[],
    qty: number


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

export interface IAbout {
    _id: string,
    name: string,
    title: string,
    desc: string,
    image: string
}
export interface IContact {
    _id: string,
    name: string,
    title: string,
    desc: string
    facebook: string,
    instagram: string,
    website: string,

}
