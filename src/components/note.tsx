import React from 'react'

interface Props {
  id: string
}

export const Note: React.FC<Props> = ({ id }) => {
  return (
    <iframe
      className={'note-embed'}
      src={`https://note.mu/embed/notes/${id}`}
      style={{
        border: 'none',
        display: 'block',
        width: '100%',
        maxWidth: '548px',
        minHeight: '224px',
        height: '100%',
        maxHeight: '240px',
        padding: '0px',
        margin: '4px 0px 0px',
        position: 'static',
        visibility: 'visible',
        marginBottom: '-8px',
        marginTop: '8px'
      }}
    />
  )
}
