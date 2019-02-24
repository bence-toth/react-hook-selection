import {useState, useEffect} from 'react'

const useSelection = () => {
  const [selection, setSelection] = useState(
    `${window.getSelection()}`
  )

  const handleSelectionChange = () => {
    setSelection(`${window.getSelection()}`)
  }

  useEffect(() => {
    document.addEventListener(
      'selectionchange',
      handleSelectionChange
    )
    return () => {
      document.removeEventListener(
        'selectionchange',
        handleSelectionChange
      )
    }
  }, [])

  return selection
}

export default useSelection
