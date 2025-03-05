import { useStore } from '@renderer/store/useStore'
export default () => {
  const setError = useStore((state) => state.setError)
  const register = async (type: 'search', shortCut = 'CommandOrControl+Shift+}') => {
    if (window.api?.shortCut) {
      const isBind = await window.api.shortCut(type, shortCut)
      if (!isBind) {
        setError('快捷键注册失败')
      }
    }
  }
  return { register }
}
