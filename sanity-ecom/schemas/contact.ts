export default {
    name: 'contact',
    title: 'Contact',
    type: 'document',
    fields: [
        {
            name: 'image',
            title: 'Image',
            type: 'image',
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

            name: 'title',
            title: 'Title',
            type: 'string',
        },
        {

            name: 'desc',
            title: 'Desc',
            type: 'string',
        }

    ]



}