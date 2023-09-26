export const Pagination = ({
  setCurrentPage,
  currentPage,
  paginationRange,
}: any) => {
  return (
    <div className='pagination-area'>
      <button
        onClick={() => setCurrentPage((prev: number) => prev - 1)}
        className={`${currentPage === 1 ? 'disabled' : ''}`}
        disabled={currentPage === 1}
      >
        Prev
      </button>
      <div className='pagination-range-container'>
        {paginationRange.map((page: number) => (
          <button
            style={{
              color: `${currentPage === page ? 'red' : 'green'}`,
              border: `${
                currentPage === page ? '1px solid red' : '1px solid green'
              }`,
            }}
          >
            {page}
          </button>
        ))}
      </div>
      <button
        onClick={() => setCurrentPage((prev: number) => prev + 1)}
        className={`${
          currentPage === paginationRange.length ? 'disabled' : ''
        }`}
        disabled={currentPage === paginationRange.length}
      >
        Next
      </button>
    </div>
  )
}
