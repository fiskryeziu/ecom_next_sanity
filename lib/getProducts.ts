import client from "./client"

/**
 * Paginates the list of products by page, this is one of the ways of doing pagination
 * when you know the total of products and jumping to X page is fast in your DB.
 */
export default async function getProducts({
    limit,
    page,
    query,
    filter,
    sort,
}: {
    limit: number
    page: number
    query?: string | string[],
    filter?: string | string[],
    sort?: string | string[]
}) {
    // Usually pagination is done by your DB, and the total is also known by the
    // DB, in this case we're using a demo json so things are simpler.
    // const query = `*[_type=="product && price>${filter}"] | order(price ${sort})`
    // const query = `*[_type=="product" && price > ${filter}] | order(price ${sort})`

    let gQuery = '*[_type == "product"';

    if (query !== 'all') {
        gQuery += ` && name match "${query}" `;
    }
    if (filter !== 'all') {
        const price = Number(filter);
        gQuery += ` && price > ${price}`;
    }
    let order = '';
    if (sort !== 'default') {
        if (sort === 'asc') order = '| order(price asc)';
        if (sort === 'desc') order = '| order(price desc)';
    }

    gQuery += `] ${order}`;

    const products = await client.fetch(gQuery);

    //for highest price and below 
    // *[_type=='product' ] | order(price desc) 

    //sort by newest 
    //*[_type=='product' && price>1000 ] | order(_createdAt desc)

    //for lowest price and above 
    // *[_type=='product' ] | order(price asc) 

    //if no sorting 
    // *[_type=='product' ] | order('') 


    //with filter 
    // *[_type=='product' && price>0 ] | order('')




    const paginatedProducts = products.slice((page - 1) * limit, page * limit)
    return { products: paginatedProducts, total: products.length }
}