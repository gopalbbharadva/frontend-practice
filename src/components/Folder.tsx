import { useState } from 'react'

export const Folder = ({ foldersData }: any) => {
  const [isOpen, setIsOpen] = useState(false)

  if (foldersData.isFolder) {
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
  } else {
    return <p>📄{foldersData.name}</p>
  }
}
