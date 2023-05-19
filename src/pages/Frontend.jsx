import { useState } from 'react'

import {
  Button,
  Container,
  IntroductionText,
  Items,
  SearchField,
  TechnologyIcons,
} from '../components'

import { frontend } from '../data'

export const Frontend = () => {
  const allList = ['Todo', ...new Set(frontend.map((item) => item.category))]

  const [listItems, setListItems] = useState(frontend)
  const [list, setList] = useState(allList)

  const filterItems = (category) => {
    if (category === 'Todo') {
      setListItems(frontend)
      return
    }
    const newItems = frontend.filter((item) => item.category === category)

    setListItems(newItems)
  }

  return (
    <section className="text-white my-16 max-w-7xl mx-auto">
      <Container>
        <div className="grid grid-cols-2 gap-2">
          <IntroductionText />
          <div className="grid flex-1">
            <div className="flex justify-end">
              <TechnologyIcons />
            </div>
            <div className="overflow-hidden">
              <SearchField className="float-right" />
            </div>
          </div>
        </div>

        <div className="my-16 max-w-6xl mx-auto grid sm:grid-cols-6 grid-cols-3 gap-2 items-start">
          {list.map((category, index) => (
            <Button
              key={index}
              onClick={() => {
                filterItems(category)
              }}
              className="xl:w-[180px] md:text-base lg:w-[160px] md:w-[130px] sm:w-[100px] text-[9px] w-[110px] leading-4"
            >
              {category}
            </Button>
          ))}
        </div>

        <div className="grid xl:grid-cols-5 lg:grid-cols-4 md:grid-cols-3 xs:grid-cols-2 justify-center xl:justify-between sm:gap-8 gap-5 sm:direct-child:mb-8">
          <Items listItems={listItems} />
        </div>
      </Container>
    </section>
  )
}
