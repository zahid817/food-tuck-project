import { title } from "process";

export default {
    name:'order',
    type:'document',
    title:'Order',
    fields:[
        {
            name: 'name',
            type:'string',
            title:'Name'
        },
        {
          name:'address',  
          type:'string',
          title:'Address'
        },
        {
            name:'email',
            type:'string',
            title:'Email'
        },
        {
            name:'phone',
            type:'string',
            title:'Phone'
        },
        {
            name:'cartItems',
            type:'array',
            title:'cart Items',
            of:[
                {
                    type:'reference',
                    to:[{type:'food'}]
                }
            ]
        },
        {
            name:'total',
            type:'number',
            title:'Total'
        },
        {
            name:'status',
            type:'string',
            title:'Status',
            options:{
                list:[
                    {title:'Pending', value:'pending'},
                    {title:'Confirmed', value:'confirmed'},
                    {title:'Delivered', value:'delivered'},
                    {title:'Cancelled', value:'cancelled'}
                ],
                layout:'radio'
            },
            initialValue:'pending'
        }

    ]
}