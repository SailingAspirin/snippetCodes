/*
 * @Author: Salaing
 * @Date: 2025-03-28 17:18:28
 * @LastEditors: Salaing
 * @LastEditTime: 2025-03-28 22:19:14
 * @Description: file content
 */
// 右键菜单
import { useContextMenu } from 'mantine-contextmenu'
import { useSubmit } from 'react-router-dom'
import { Delete } from '@icon-park/react'
import style from './style.module.scss'
import useContent from '../useContent'
import { DragEvent } from 'react'

export default function useCategory(category: CategoryType) {
  const submit = useSubmit()
  const { showContextMenu } = useContextMenu()
  const { updateContentCategory } = useContent()
  const contextMenu = () => {
    return showContextMenu([
      {
        key: 'delete',
        icon: <Delete theme="outline" size="18" strokeWidth={3} />,
        title: '删除片段',
        onClick: () => {
          submit({ action: 'delete', id: category.id }, { method: 'delete' })
        },
      },
      // 添加分隔符或无效项
      {
        key: 'separator', // 必须提供唯一的 key
        className: 'contextMenu',
        hidden: true, // 设置隐藏以避免显示无效内容
      },
    ])
  }

  /* 
  解释拖拽事件
  DataTransfer.effectAllowed 属性用于指定拖放操作所允许的效果
  effectAllowed 属性可以是以下值之一：
    none：不允许任何拖放操作。
    copy：允许复制操作，即拖动的数据将在目标位置创建一个副本。
    link：允许创建链接操作，即在源和目标位置之间建立某种形式的关系或连接。
    move：允许移动操作，即拖动的数据将从当前位置移动到目标位置。
    copyLink：允许复制或链接操作。
    copyMove：允许复制或移动操作。
    linkMove：允许链接或移动操作。
    all：允许所有操作（复制、链接、移动）。
    uninitialized：效果未设置时的默认值，等同于 all。
  
  */

  const dragHandle = {
    onDragOver: (e: DragEvent) => {
      e.preventDefault()
      e!.dataTransfer!.dropEffect = 'move'
      const el = e.currentTarget as HTMLDivElement
      el.classList.add(style.draging)
    },

    onDragLeave: (e: DragEvent) => {
      e.preventDefault()
      const el = e.currentTarget as HTMLDivElement
      el.classList.remove(style.draging)
    },
    onDrop: (e: DragEvent) => {
      e.preventDefault()
      const el = e.currentTarget as HTMLDivElement
      el.classList.remove(style.draging)
      const id = e!.dataTransfer!.getData('id')
      console.log(id)
      updateContentCategory(Number(id), category.id)
    },
  }

  return { contextMenu, dragHandle }
}
