import React from 'react'

interface Props {
  href: string
}

export const Note: React.FC<Props> = ({ href }) => {
  return (
    <iframe
      className={'note-embed'}
      src={href}
      height={400}
      style={{
        border: 0,
        display: 'block',
        maxWidth: '99%',
        height: '230px',
        width: '480px',
        padding: '0px',
        margin: '10px 0px',
        position: 'static',
        visibility: 'visible',
      }}
    />
  )
}
