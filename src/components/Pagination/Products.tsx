import { useEffect, useMemo, useState } from 'react'
import { Pagination } from './Pagination'

export const Products = () => {
  const [productsData, setProductsData] = useState<any>({})
  const [currentPage, setCurrentPage] = useState(1)

  const makePaginationRange = (limit: number) => {
    const totalPages = limit / 10
    let range = []
    for (let i = 1; i <= totalPages; i++) {
      range.push(i)
    }
    return range
  }

  const fetchProducts = async () => {
    try {
      const res = await fetch(
        `https://dummyjson.com/products?limit=30&skip=${currentPage}`
      )
      const data = await res.json()
      setProductsData(data)
    } catch (error) {
      console.error(error, 'error')
    }
  }

  useEffect(() => {
    fetchProducts()
    console.log('effect')
  }, [currentPage])

  const paginationRange = useMemo(
    () => makePaginationRange(productsData.limit),
    [productsData]
  )

  return (
    <div>
      <div className='product-container'>
        {productsData?.products?.slice(0, 10).map((product: any) => (
          <div>
            <img src={product.images[0]} />
            <p>{product.title}</p>
          </div>
        ))}
      </div>
      <Pagination
        setCurrentPage={setCurrentPage}
        currentPage={currentPage}
        paginationRange={paginationRange}
      />
    </div>
  )
}
