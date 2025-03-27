import { create } from 'zustand'
import { DataType } from '@renderer/data'

interface StateProps {
  data: DataType[]
  setData: (data: DataType[]) => void
  search: string
  setSearch: (search: string) => void
  error: string
  setError: (error: string) => void
  id: number
  setId: (id: number) => void
  editCategoryId: number
  setEditCategoryId: (editCategoryId: number) => void
}

export const useStore = create<StateProps>((set, get) => ({
  data: [],
  setData: (data) => set(() => ({ data })),
  search: '',
  setSearch: (search) => set(() => ({ search })),
  error: '',
  setError: (error) => set(() => ({ error })),
  id: 0,
  setId: (id) => set(() => ({ id })),
  editCategoryId: 0,
  setEditCategoryId: (editCategoryId) => set(() => ({ editCategoryId })),
}))
