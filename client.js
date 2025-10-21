import {createClient} from '@sanity/client';
import imageUrlBuilder from '@sanity/image-url';

export const client = createClient({
        projectId:    '6yu4zbdb',
        dataset:      'production',
        apiVersion:   '2024-10-01',
        useCdn:        true,
        token:        'skLLFrbB0ClUMPLVhPFUoE0k0qnmSmoktLBkZXu3tho1D7I1aGxKKzSvdvtekqNKOFJpvt4VTywuRESU8rsPzC3x6XPsfn4Ppeu7N4mDQGI5VlXGWwHPUcYoAKsTiba3g018aRWpzZp9cs9vRfywbdf6daIP5tZQjeePIvhEf6QDOyAL9PQJ' ,
       }); 


const builder = imageUrlBuilder(client);

export const urlFor = (source)=> builder.image(source);
       