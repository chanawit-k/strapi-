import { createContext, useContext, useState } from 'react'
const AppContext = createContext()

const ProviderContext = (props) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true)
  const [pageId, setPageId] = useState(null)
  const closeSidebar = () => {
    setIsSidebarOpen(false)
  }

  const openSidebar = () => {
    setIsSidebarOpen(true)
  }

  return (
    <AppContext.Provider
      value={{ isSidebarOpen, openSidebar, closeSidebar, pageId, setPageId }}
    >
      {props.children}
    </AppContext.Provider>
  )
}
export const useGlobalContext = () => useContext(AppContext)
export default ProviderContext
