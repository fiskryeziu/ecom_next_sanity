import client from "./client"

/**
 * Paginates the list of products by page, this is one of the ways of doing pagination
 * when you know the total of products and jumping to X page is fast in your DB.
 */
export default async function getProducts({
    limit,
    page,
    filter,
    sort,
}: {
    limit: number
    page: number
    filter: string | string[],
    sort: string | string[]
}) {
    // Usually pagination is done by your DB, and the total is also known by the
    // DB, in this case we're using a demo json so things are simpler.
    const query = `*[_type=="product"]`
    const products = await client.fetch(query)

    //for highest price and below 
    // *[_type=='product' ] | order(price desc) 

    //for lowest price and above 
    // *[_type=='product' ] | order(price asc) 

    console.log('filter is : ' + filter);
    console.log('sort is : ' + sort);

    const paginatedProducts = products.slice((page - 1) * limit, page * limit)
    return { products: paginatedProducts, total: products.length }
}