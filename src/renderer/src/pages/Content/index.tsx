/*
 * @Author: Salaing
 * @Date: 2025-03-23 10:32:31
 * @LastEditors: Salaing
 * @LastEditTime: 2025-03-24 20:46:38
 * @Description: file content
 */
import { Button, Input, Form, message } from 'antd'
import TextArea from 'antd/es/input/TextArea'
import { useActionData, useLoaderData, useLocation, useSubmit } from 'react-router-dom'
import './content.scss'
import { useEffect } from 'react'

interface ContentType {
  id: string
  title: string
  content: string
}

interface FormValues {
  id: string
  title: string
  content: string
}

const Index = () => {
  const content = useLoaderData() as ContentType
  const submit = useSubmit()
  const location = useLocation()
  const handleSubmit = (values: FormValues) => {
    try {
      submit(values, { method: 'put', action: location.pathname })
    } catch (error) {
      console.error('表单提交失败:', error)
      message.error('表单提交失败，请稍后重试！')
    }
  }

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
    name: keyof FormValues
  ) => {
    const newValues: Partial<FormValues> = {
      [name]: e.target.value,
    }
    handleSubmit({ ...content, ...newValues } as FormValues)
  }
  return (
    <Form
      method="PUT"
      // onFinish={handleSubmit}
      initialValues={{ id: content.id, title: content.title, content: content.content }}
    >
      <main className="content-page" key={content.id}>
        <Form.Item name={'id'} hidden>
          <Input />
        </Form.Item>
        <Form.Item name="title">
          <Input onBlur={(e) => handleInputChange(e, 'title')} />
        </Form.Item>
        <Form.Item name="content">
          <TextArea onBlur={(e) => handleInputChange(e, 'content')} />
        </Form.Item>
      </main>
    </Form>
  )
}

export default Index
