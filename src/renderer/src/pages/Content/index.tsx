/*
 * @Author: Salaing
 * @Date: 2025-03-23 10:32:31
 * @LastEditors: Salaing
 * @LastEditTime: 2025-03-26 01:15:24
 * @Description: file content
 */
import { Button, Input, Form, message, Select } from 'antd'
import TextArea from 'antd/es/input/TextArea'
import { useActionData, useLoaderData, useLocation, useSubmit } from 'react-router-dom'
import './content.scss'
import { useEffect } from 'react'

interface ContentType {
  id: number
  title: string
  category_id: number
  content: string
}

interface FormValues {
  id: number
  title: string
  content: string
  category_id: number
}

const Index = () => {
  const { content, categories } = useLoaderData() as {
    content: ContentType
    categories: CategoryType[]
  }

  console.log(content, categories)

  const submit = useSubmit()
  const location = useLocation()
  const handleSubmit = (values: FormValues) => {
    try {
      const sanitizedValues: Record<string, any> = JSON.parse(JSON.stringify(values))
      submit(sanitizedValues, { method: 'put', action: location.pathname })
    } catch (error) {
      console.error('表单提交失败:', error)
      message.error('表单提交失败，请稍后重试！')
    }
  }

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
    name: keyof FormValues
  ) => {
    let value: string | number
    if (typeof e === 'string' || typeof e === 'number') {
      value = e
    } else {
      value = e.target.value
    }

    const newValues: Partial<FormValues> = {
      [name]: value,
    }
    handleSubmit({ ...content, ...newValues } as FormValues)
  }
  return (
    <Form
      method="PUT"
      initialValues={{
        id: content.id,
        title: content.title,
        category_id: content.category_id,
        content: content.content,
      }}
      key={content.id}
    >
      <main className="content-page">
        <Form.Item name={'id'} hidden>
          <Input autoFocus />
        </Form.Item>
        <Form.Item name="title">
          <Input onBlur={(e) => handleInputChange(e, 'title')} />
        </Form.Item>
        <Form.Item name="category_id">
          <Select onChange={(e) => handleInputChange(e, 'category_id')}>
            <Select.Option key={0} value={0}>
              未分类
            </Select.Option>
            {categories?.map((item) => (
              <Select.Option key={item.id} value={item.id}>
                {item.name}
              </Select.Option>
            ))}
          </Select>
        </Form.Item>

        <Form.Item name="content">
          <TextArea onBlur={(e) => handleInputChange(e, 'content')} />
        </Form.Item>
      </main>
    </Form>
  )
}

export default Index
