export default {

    name: 'produt',
    title: 'Product',
    type: 'document',
    fields: [
        {
            name:'image',
            title: 'Image',
            type: 'array',
             of: [{ type: 'image'}],
              options: {
                hotspot: true,
              }
        },
        {
            name: 'name',
            title: 'Name',
            type: 'string',
            options: {
                source: 'name',
                maxLength: 90,
            }
        },
        {
            name: 'price',
            title: 'Price',
            type: 'number',
        },
        {
            name: 'details',
            title: 'Details',
            type: 'string',
        }
    ]
}
