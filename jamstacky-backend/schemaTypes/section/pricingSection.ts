export default {
    name: 'pricingSection',
    title: 'Pricing Section',
    type: 'object',
    fields: [
      {
        name: 'pricingOptions',
        type: 'array',
        title: 'Pricing Options',
        of: [
          {
            type: 'object',
            fields: [
              {
                name: 'tierName',
                type: 'string',
                title: 'Tier Name',
              },
              {
                name: 'price',
                type: 'string',
                title: 'Price',
                description: 'e.g., $424/mo',
              },
              {
                name: 'billedYearly',
                type: 'string',
                title: 'Billed Yearly Price',
                description: 'e.g., $5088 billed yearly',
              },
              {
                name: 'savings',
                type: 'string',
                title: 'Savings',
                description: 'e.g., $900 Savings',
              },
              {
                name: 'isPopular',
                type: 'boolean',
                title: 'Is Popular Tier?',
                description: 'Mark this if it is the popular choice.',
              },
              {
                name: 'features',
                type: 'array',
                title: 'Features',
                of: [
                  {
                    type: 'object',
                    fields: [
                      {
                        name: 'featureName',
                        type: 'string',
                        title: 'Feature Name',
                      },
                      {
                        name: 'featureValue',
                        type: 'string',
                        title: 'Feature Value',
                        description: 'e.g., Any 1 SG, 15-20 hours, etc.',
                      },
                    ],
                  },
                ],
              },
            ],
          },
        ],
      },
    ],
  };
  