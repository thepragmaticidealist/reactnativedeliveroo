// Connects sanity to our react native app, refactor to use env variables
import sanityClient from '@sanity/client';
import imageUrlBuilder from '@sanity/image-url'

// Connects to the sanity backend
const client = sanityClient({
    projectId: 'hv5z7kfb', //qwoxusny   
    dataset: 'production',
    useCdn: true,
    apiVersion: '2021-10-21'
})

const builder = imageUrlBuilder(client);
// Fetch urls for images in sanity backend
export const urlFor = (source) => builder.image(source);

// cd sanity , sanity cors add http://localhost:3000

export default client;