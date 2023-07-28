import { ref, onMounted, onUnmounted, watch } from 'vue';

export function useElementTop( element: HTMLElement, extraHeight: number = 70) {
  // return height = 页面高度 - offsetHeight - extraHeight
  const tableHeight = ref(700)
  const calculateHeight = () => {
    const topDistance = element? element.getBoundingClientRect().top : 100;
    tableHeight.value = window.innerHeight - topDistance - extraHeight
  }
  onMounted(() => {
    element && calculateHeight()
    window.addEventListener('resize', calculateHeight)
  })
  onUnmounted(() => {
    window.removeEventListener('resize', calculateHeight)
  })
  return tableHeight
}