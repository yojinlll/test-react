 // 不同浏览器的滚动条宽度不一样，所以计算出宽度然后隐藏
export default function scrollbarWidth() {
  const div = document.createElement('div')
  div.id = 'fuck'

  div.style.position = 'absolute'
  div.style.top = div.style.left = '-9999px'
  div.style.width = div.style.height = '100px'
  div.style.overflow = 'scroll'

  document.body.appendChild(div)

  const width = div.offsetWidth - div.clientWidth
  document.body.removeChild(div)
  
  return width
}