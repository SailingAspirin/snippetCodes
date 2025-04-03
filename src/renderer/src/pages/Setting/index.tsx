import React from 'react'
import  './setting.scss'
import { Form ,  useLoaderData,  useSubmit} from 'react-router-dom'
function Setting() {
  const config = useLoaderData() as ConfigDataType
  const submit = useSubmit()
  return (
    <Form most='post'>
      <main className='setting-page'>
      <h1>软件配置</h1>
      <section>
        <h5>快捷键定义</h5>
          <input type="text" name='shortcut' placeholder='快捷键定义'
            onKeyDown={(e) => {
              submit({shortcut: e.key}, {method: 'post'})
            }}
          />
        </section>
        <section>
          <h5>数据库</h5>
          <input type='text' name='databaseDirectory' placeholder='数据库目录' defaultValue={''} />
        </section>
      </main>
    </Form>
      
  )
}

export default Setting