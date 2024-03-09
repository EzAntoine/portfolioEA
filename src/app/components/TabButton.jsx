import React from 'react'

export default function TabButton({ active, selectTab, children }) {

    const buttonClass = active ? 'text-white border-b border-lime-500' : 'text-[#ADB7BE]'

  return (
    <div>
      <button onClick={selectTab}>
        <p className={`mr-3 font-semibold hover:text-white ${buttonClass}`}>
            {children}
        </p>
      </button>
    </div>
  )
}
