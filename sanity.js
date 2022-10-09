import sanityClient from '@sanity/client';
import imageUrlBuilder from '@sanity/image-url'

// Connects to the sanity backend
const client = sanityClient({
    projectId: 'hv5z7kfb', //qwoxusny   
    dataset: production,
    useCdn: true,
    apiVersion: '2021=10-21'
})

const builder = imageUrlBuilder(client);
export const urlFor = (source) => builder.image(source);

// cd sanity , sanity cors add http://localhost:3000

export default client;