import { Add, DatabaseSetting } from '@icon-park/react'
import { useSubmit } from 'react-router-dom'

function FooterMenu() {
  const submit = useSubmit()
  return (
    <>
      <Add
        theme="outline"
        size="20"
        fill="#333"
        strokeWidth={4}
        onClick={() => {
          submit({ action: 'add' }, { method: 'post' })
        }}
      />
      <DatabaseSetting theme="outline" size="20" fill="#333" strokeWidth={4} />
    </>
  )
}

export default FooterMenu
