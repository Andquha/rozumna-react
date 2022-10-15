import React from 'react'

export default function WebpImg({src, alt, fallbackSrc, mediaType='image/webp', ...delegated}) {
  return (
    <picture>
        <source srcSet={src} type={mediaType}/>
        <img src={fallbackSrc} alt={alt} {...delegated}/>
    </picture>
  )
}
