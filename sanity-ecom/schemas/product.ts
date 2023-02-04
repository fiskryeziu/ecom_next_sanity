export default {
    name: 'product',
    title: 'Product',
    type: 'document',
    fields: [
        {
            name: 'image',
            title: 'Image',
            type: 'array',
            of: [{ type: 'image' }],
            options: {
                hotspot: true,
            }
        },
        {
            name: 'name',
            title: 'Name',
            type: 'string',
        },
        {

            name: 'slug',
            title: 'Slug',
            type: 'slug',
            options: {
                source: 'name',
                maxLength: 90
            }
        },
        {

            name: 'model',
            title: 'Model',
            type: 'string',
        }
        ,
        {

            name: 'material',
            title: 'Material',
            type: 'string',
        },
        {

            name: 'price',
            title: 'Price',
            type: 'number',
        },

    ]



}