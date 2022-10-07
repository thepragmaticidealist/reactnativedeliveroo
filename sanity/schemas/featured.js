export default {
    name: 'featured',
    title: 'Featured',
    type: 'document',
    fields: [
      {
        name: 'name',
        type: 'string',
        title: 'Featured category name',
        validation: (Rule) => Rule.required(),
      },
      {
        name: 'short_description',
        type: 'string',
        title: 'Short Description',
        validation: (Rule) => Rule.required(),
      },
      {
        name: 'restaurants',
        type: 'array',
        title: 'Restaurants',
        of: [{
            type: "reference", to: [{
                type: "restaurant"
            }]
        }]
      },
    ]
  }
  