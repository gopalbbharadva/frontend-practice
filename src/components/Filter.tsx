import React, { useMemo, useState } from 'react'

export const items = [
  {
    name: 'Prada',
    category: 'Bags',
  },
  {
    name: 'Gucci',
    category: 'Bags',
  },
  {
    name: 'Guess',
    category: 'Bags',
  },
  {
    name: 'Rolex',
    category: 'Watches',
  },
  {
    name: 'Timex',
    category: 'Watches',
  },
  {
    name: 'Nike',
    category: 'Sports',
  },
  {
    name: 'Adidas',
    category: 'Sports',
  },
  {
    name: 'Fila',
    category: 'Sports',
  },
  {
    name: 'Ray Ban',
    category: 'Sunglasses',
  },
  {
    name: 'Aldo',
    category: 'Sunglasses',
  },
  {
    name: 'Polaroid',
    category: 'Sunglasses',
  },
]

export const Filter = () => {
  const categories = items.reduce(
    (acc: any, cur: any) =>
      acc.includes(cur.category) ? acc : [...acc, cur.category],
    []
  )
  const [currentCategories, setCurrentCategory] = useState<string[]>([])

  const clickHandler = (category: string) => {
    if (!currentCategories.includes(category))
      setCurrentCategory((prev) => [...prev, category])
    else setCurrentCategory((prev) => prev.filter((item) => item !== category))
  }

  const itemsToShow = useMemo(
    () =>
      items.reduce(
        (acc: string[], item) =>
          currentCategories.includes(item.category) ? [...acc, item.name] : acc,
        []
      ),
    [currentCategories]
  )

  console.log(currentCategories, 'categories')
  console.log(itemsToShow, 'showItems')

  return (
    <div>
      {categories.map((category: string) => (
        <button
          style={{
            color: `${currentCategories.includes(category) ? 'red' : 'blue'}`,
          }}
          onClick={() => clickHandler(category)}
        >
          {category}
        </button>
      ))}
      {itemsToShow.map((item) => (
        <p>{item}</p>
      ))}
    </div>
  )
}
