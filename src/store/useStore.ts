import { create } from 'zustand'
import { DataType } from '@renderer/data'

interface StateProps {
  data: DataType[]
  setData: (data: DataType[]) => void
  search: string
  setSearch: (search: string) => void
  error: string
  setError: (error: string) => void
}

export const useStore = create<StateProps>((set, get) => ({
  data: [],
  setData: (data) => set(() => ({ data })),
  search: '',
  setSearch: (search) => set(() => ({ search })),
  error: '',
  setError: (error) => set(() => ({ error })),
}))
