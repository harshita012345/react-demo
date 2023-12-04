export const DogWalker = [
    {
        type: "radioButton",
        title: 'Select Hour',
        data: [{
            _id: 0,
            title: "Select hour",
            hour: 1,
            price: 10,
        },
        {
            _id: 1,
            title: "select hour",
            hour: 2,
            price: 20,
        },
        {
            _id: 2,
            title: "select hour",
            hour: 10,
            price: 50,
        },
        {
            _id: 3,
            title: "select hour",
            hour: 5,
            price: 25,
        }
        ]
    },
    {
        type: "quantityManage",
        title: 'Select Dog type',
        data: [
            {
                title: 'X-small(1-10 lbs)',
                quantity: 2,
                price: 20,
            },
            {
                title: 'Small(11-25 lbs)',
                quantity: 0,
                price: 50,
            },
            {
                title: 'Medium(26-35 lbs)',
                quantity: 0,
                price: 100,

            },
            {
                title: 'Large(36-50 lbs)',
                quantity: 0,
                price: 150,
            }
        ]
    }
]