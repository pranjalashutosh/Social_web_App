//Connecting Sanity backend with our react frontend
import{ createClient }from '@sanity/client';
import imageUrlBuilder from '@sanity/image-url';

export const client = createClient({
    projectId:'lyte61ne',
    dataset:'production',
    apiVersion: '2023-11-22',
    useCdn:true,
    token:'skGuKZ74OZYrKi80afTEJrmLJ4YGviU3Gwjh9pve2la20cWFrBaVWNNainL7I1LK4I3WgYlmApjUTy9hEqkoLYpeElmUW7OFUoVjCOoq10GgLdZujUZVn59hFryTIzivSqmpQIk7gBi4qWaxzmg0WZDDeyTnSNH7tBtjfz8YQsj2rcQu5X2K'

});

const builder = imageUrlBuilder(client); // Need to study this

export const urlFor = (source) => builder.image(source);