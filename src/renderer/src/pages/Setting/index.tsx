/*
 * @Author: Salaing
 * @Date: 2025-03-31 08:46:29
 * @LastEditors: Salaing
 * @LastEditTime: 2025-04-08 23:51:29
 * @Description: file content
 */
import React, { useState } from 'react'
import './setting.scss'
import { Form, useLoaderData, useSubmit } from 'react-router-dom'
function Setting() {
  const config = useLoaderData() as ConfigDataType
  const submit = useSubmit()
  const [keys, setKeys] = useState<string[]>([])

  return (
    <Form method="post">
      <main className="setting-page">
        <h1>软件配置</h1>
        <section>
          <h5>快捷键定义</h5>
          <input
            type="text"
            name="shortCut"
            defaultValue={config.shortCut}
            readOnly
            placeholder="快捷键定义"
            onKeyDown={(e) => {
              if (e.metaKey || e.ctrlKey || e.altKey) {
                keys.push(e.code.replace(/Left|Right|Key|Digit/, ''))
                setKeys(keys)
                e.currentTarget.value = keys.join('+')
              }
            }}
            onKeyUp={(e) => {
              setKeys([])
              submit( e.currentTarget.form, { method: 'post' })
            }}
          />
        </section>
        <section>
          <h5>数据库</h5>
          <input type="text" name="databaseDirectory" placeholder="数据库目录" defaultValue={''} />
        </section>
      </main>
    </Form>
  )
}

export default Setting
