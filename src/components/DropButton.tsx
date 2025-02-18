import React, { useState } from 'react'

interface Props {
  children: React.ReactNode[]
}

export default function DropButton({ children }: Props) {
  const [drop, setDrop] = useState(false)

  return (
    <>
      <button className="initial-button" onClick={() => setDrop(!drop)}>
        Click here
      </button>
      {drop && (
        <div>
          {children.map((child) => {
            return child
          })}
        </div>
      )}
    </>
  )
}
