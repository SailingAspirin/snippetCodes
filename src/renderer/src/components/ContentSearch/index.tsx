import { Add } from '@icon-park/react'
import useChineseInput from '@renderer/hooks/useChineseInput'
import { useEffect, useState } from 'react'
import { Form, useSubmit } from 'react-router-dom'

function ContentSearch() {
  const submit = useSubmit()
  const [search, setSearch] = useState('')
  const { inputValue, handleInput, handleCompositionStart, handleCompositionEnd } = useChineseInput(
    search,
    setSearch
  )

  useEffect(() => {
    submit({ searchWord: search }, { method: 'get' })
  }, [search])

  return (
    <Form>
      <div className="border-b flex justify-between items-center">
        <input
          name="searchWord"
          type="text"
          placeholder="搜索..."
          className="outline-none text-sm py-2 px-3 w-full"
          value={inputValue}
          onInput={handleInput}
          onCompositionStart={handleCompositionStart}
          onCompositionEnd={handleCompositionEnd}
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
