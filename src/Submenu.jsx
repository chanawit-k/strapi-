import React, { useState } from 'react'
import { useGlobalContext } from './context'
import sublinks from './data'
import { useRef } from 'react'
const Submenu = () => {
  const { pageId, setPageId } = useGlobalContext()
  const currentItem = sublinks.find((item) => item.pageId === pageId)
  const submenuContainer = useRef(null)
  const handleMouseLeave = (e) => {
    const submenu = submenuContainer.current
    const { left, right, bottom, top } = submenu.getBoundingClientRect()
    const { clientX, clientY } = e

    if (clientX < left - 1 || clientX > right - 1 || clientY > bottom - 1) {
      setPageId(null)
    }
  }
  return (
    <div
      className={currentItem ? 'submenu show-submenu' : 'submenu'}
      onMouseLeave={handleMouseLeave}
      ref={submenuContainer}
    >
      <h5>{currentItem?.page}</h5>
      <div
        className="submenu-links"
        style={{
          gridTemplateColumns:
            currentItem?.links?.length > 3 ? '1fr 1fr' : '1fr',
        }}
      >
        {currentItem?.links?.map((item) => {
          const { id, url, icon, label } = item
          return (
            <a key={id} href={url}>
              {icon}
              {label}
            </a>
          )
        })}
      </div>
    </div>
  )
}

export default Submenu
