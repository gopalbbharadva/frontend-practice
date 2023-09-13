import { useMemo, useState } from 'react'

const model = [
  { text: 'Tab 1', value: 'How are you tab 1' },
  { text: 'Tab 2', value: 'How are you tab 2' },
  { text: 'Tab 3', value: 'How are you tab 3' },
]

export const Tab = () => {
  const [currentTab, setCurrentTab] = useState('Tab 1')
  const currentTabContent = useMemo(
    () => model.find((tab) => tab.text === currentTab)?.value,
    [currentTab]
  )

  console.log(currentTabContent, 'content')

  return (
    <div>
      {model.map((tab) => (
        <button onClick={() => setCurrentTab(tab.text)}>{tab.text}</button>
      ))}
      <div style={{ border: '1px solid red' }}>{currentTabContent}</div>
    </div>
  )
}
