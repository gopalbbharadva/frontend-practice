import { useState } from 'react'

export const Folder = ({ foldersData }: any) => {
  const [isOpen, setIsOpen] = useState(false)

  // This is the stopping condition for recursion.
  // whenever we have isFolder false in particular object
  //  then it will be file,so just print it.
  if (!foldersData.isFolder) {
    return <p>📄{foldersData.name}</p>
  } else {
    //  if the current object is folder then make recursion call
    //  until it reaches to the final level.
    return (
      <div>
        <div onClick={() => setIsOpen((prev) => !prev)}>
          📂{foldersData.name}
        </div>
        {isOpen && (
          <div style={{ marginLeft: '4rem' }}>
            {foldersData.items.map((file: any) => (
              <Folder foldersData={file} />
            ))}
          </div>
        )}
      </div>
    )
  }
}
