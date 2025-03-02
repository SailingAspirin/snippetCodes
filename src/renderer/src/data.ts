/* * @Author: Salaing
 * @Date: 2025-03-01 16:42:56
 * @LastEditors: Salaing
 * @LastEditTime: 2025-03-01 17:15:04
 * @Description: file content
 */
export interface DataType {
  id: number
  content: string
}
export const data = [
  {
    id: 1,
    content: 'test',
  },
  {
    id: 2,
    content: 'test2',
  },
  {
    id: 3,
    content: 'test3',
  },
  {
    id: 4,
    content: 'test4',
  },
  {
    id: 5,
    content: 'test5',
  },
] as DataType[]
