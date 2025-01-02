import React from 'react'
import { PortableText, PortableTextReactComponents } from '@portabletext/react'
import { content } from '../sanity/types/pageType';
import { customComponents } from './CustomComponent';


interface PortableTextComponentProps {
    content: content[];
    customComponents: Partial<PortableTextReactComponents>;
}

const PortableTextComponent: React.FC<PortableTextComponentProps> = ({content}) => {
  return (
      <PortableText 
        value={content} 
        components={customComponents}/>
  )
}

export default PortableTextComponent
