export const useDebounce = (cb: () => void, limit: number) => {
  let timer = 0
  return () => {
    clearTimeout(timer)
    timer = setTimeout(() => cb(), limit)
  }
}
