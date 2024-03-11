import React from 'react'

export default function ProjectTag({ name, onClick, isSelected }) {
  const buttonStyles = isSelected
    ? "text-white border-lime-500"
    : "text-[#ADB7BE] border-slate-600 hover:text-white"
    return (
    <div>
      <button 
        className={`${buttonStyles} rounded-sm border-2 px-3 py-2 text-xl cursor-pointer`}
        onClick={()=>onClick(name)}>
            {name}
      </button>
    </div>
  )
}
