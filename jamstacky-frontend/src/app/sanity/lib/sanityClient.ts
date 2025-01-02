import {createClient} from 'next-sanity'
import { dataset, projectId} from '@/app/sanity/env';


export const client = createClient({
  projectId,
  dataset,
  useCdn: true, 
})

