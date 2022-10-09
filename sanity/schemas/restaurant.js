export default {
  name: 'restaurant',
  title: 'Restaurant',
  type: 'document',
  fields: [
    {
      name: "name",
      type: "string",
      title:"Restaurant Name",
      validation: (Rule) => Rule.required(),
    },
    {
      name: "short_description",
      type: "string",
      title:"Short Description",
    },
    {
      name: "image",
      type: "image",
      title:"Image of the Restaurant",
    },
    {
      name: "address",
      type: "string",
      title:"Restaurant address",
      validation: (Rule) => Rule.required(),
    },
    {
      name: "long",
      type: "number",
      title:"Longitude of the Restauarnt",
    },
    {
      name: "lat",
      type: "number",
      title:"Latitude of the Restaurant",
    },
    {
      name: "rating",
      type: "number",
      title:"Enter a number from 1-5 stars",
      validation: (Rule) => Rule.required()
        .min(1)
        .max(5)
        .error("Please eneter a number between 1 and 5")
    },
    {
      name: "type",
      type: "reference",
      title:"Category of the Restaurant",
      validation: (Rule) => Rule.required(),
      to: [{ type: "category" }]
    },
    {
      name: "dishes",
      type: "array",
      title:"Dishes",
      of: [{
        type: "reference", to: [{
          type: "dish"
        }]
      }]
    },
  ],
}
