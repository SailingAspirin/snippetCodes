import { Add } from '@icon-park/react'
import { Form, useSubmit } from 'react-router-dom'

function ContentSearch() {
  const submit = useSubmit()
  return (
    <Form>
      <div className="border-b flex justify-between items-center">
        <input
          name="searchWord"
          type="text"
          placeholder="搜索..."
          className="outline-none text-sm py-2 px-3 w-full"
          onChange={(e) => submit(e.target.form)}
        />
        <Add
          theme="outline"
          size="18"
          fill="#000"
          strokeWidth={2}
          onClick={() => {
            submit({ action: 'add' }, { method: 'post' })
          }}
        />
      </div>
    </Form>
  )
}

export default ContentSearch
