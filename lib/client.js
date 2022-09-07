import sanityClient from '@sanity/client';
import imageUrlBuilder from '@sanity/image-url';

export const client = sanityClient({
    projectId:'xr9awcxf',
    dataset: 'production',
    apiVersion: '2022-03-10',
    useCdn: true,
    token: 'skaMk5sYpVMlU3NdcGmiDWFyYLL8d5LPueURttkIwBS8uvMr4tZxw91JLsofsYOIUeVPkyGT2l8Zi4iyJSDRFr8fj5g78SlK4GfkyIre7c2REa8I55iBBmfKYP7y8RmrHmgZUbWwkbZ2XCORPaVWdg3vALtZDFaKEHJC7JFs8IJQe5zNaH22'
})

const builder = imageUrlBuilder(client);

export const urlFor = (source) => builder.image(source);