import { TPreview } from '@/components/molecules/Draggable'
import Prism from 'prismjs'

export type TFormatCombine = {
  key: string
  value: string
}

let NEW_LINE_EXP = /\n\r?/g
let lineNumbersWrapper = ''

Prism.hooks.add('before-highlight', function (env: any) {
  env.code = env.element.innerText
})
Prism.hooks.add('after-tokenize', function (env: any) {
  const match = env.code.match(NEW_LINE_EXP)
  const linesNum = match ? match.length + 1 : 1
  const lines = new Array(linesNum + 1).join('<span></span>')
  lineNumbersWrapper = `<span aria-hidden="true" class="line-numbers-rows">${lines}</span>`
})

export const style = {
  newline: '&#13;&#10;',
  bold: (data: string, num = 700) => `<span style="font-weight:${num}">${data}</span>`,
  italic: (data: string) => `<span style="font-style: italic;">${data}</span>`,
  under: (data: string) => `<span style="text-decoration: underline;">${data}</span>`,
  color: (data: string, color: string) => `<span style="color:${color}">${data}</span>`,
  image: (url: string, width = 90, height = 400) => {
    if (!url.trim()) return ''
    return `<div style="margin:20px auto;border-radius:4px;width:${width}%;height: fit-content">
        <img style="display:block;border-radius:4px; width: 100%;height: fit-content;object-fit: contain;" src='${url}'  alt="image"/>
    </div>`
  },
  size: (data: string, size = 1) =>
    `<div style="font-size:${size}rem">
        ${data}
    </div>`,
  center: (data: string) =>
    `<div style="display:flex; justify-content:center; text-align: center;">
        ${data}
    </div>`,
  start: (data: string) =>
    `<div style="display:flex; justify-content:flex-start;">
        ${data}
    </div>`,
  end: (data: string) =>
    `<div style="display:flex; justify-content:flex-end;">
        ${data}
    </div>`,
  itemlist: (data: string) => `<li>${data}</li>`
}

export const element = {
  heading: (data: string, size = 3, bold = 700) =>
    style.size(style.bold(data, bold), size),
  part: (data: string, size = 2, bold = 700) => style.size(style.bold(data, bold), size),
  desc: (data: string, size = 0.9, bold = 400) =>
    style.size(style.bold(data, bold), size),
  content: (data: string, size = 1, bold = 400) =>
    style.size(style.bold(data, bold), size),
  list: (data: string, type = 'number') => {
    const list = data.split(NEW_LINE_EXP)
    if (!list.join().replace(NEW_LINE_EXP, '')) return ''
    return type === 'number'
      ? `<ol style="padding-left:40px">
  ${list.map((item) => style.itemlist(item)).join('')}
  </ol>`
      : `<ul style="padding-left:40px">
  ${list.map((item) => style.itemlist(item)).join('')}
  </ul>`
  },
  url: (content: string, url: string) =>
    `<a href="${url}" style="color:#3fcf8e; text-decoration: underline;">${content}</a>`,
  code: (code: string) => {
    if (!code.toString().trim()) return ''
    const format = Prism.highlight(code, Prism.languages.javascript, 'javascript')
    const html = format + lineNumbersWrapper
    return `<pre class="language-js" style="border-radius:4px" >
    <code class="language-js">&#13;&#10;${html.toString()}</code>
    </pre>`
  }
}
export const combineEditorFormat = (array: Array<TFormatCombine>, value: string) => {
  return array.reduce((html, current) => {
    switch (current.key) {
      case 'bold':
        return style.bold(html, Number(current.value))
      case 'italic':
        return style.italic(html)
      case 'under':
        return style.under(html)
      case 'align': {
        switch (current.value) {
          case 'center':
            return style.center(html)
          case 'start':
            return style.start(html)
          case 'end':
            return style.end(html)
        }
      }
      case 'size':
        return style.size(html, Number(current.value))
      case 'color':
        return style.color(html, current.value.toString())
      default:
        return html
    }
  }, value)
}

export const combineEditorToHTML = (template: TPreview) => {
  const format = template.format || []
  switch (template.type) {
    case 'code':
      return element.code(template.content)
    case 'url':
      return combineEditorFormat(
        format,
        element.url(template.content, template.url || '')
      )
    case 'list':
      return combineEditorFormat(format, element.list(template.content))
    case 'text':
      return combineEditorFormat(
        format,
        element.content(template.content).replace(NEW_LINE_EXP, '<br>')
      )
    case 'desc':
      return combineEditorFormat(format, element.desc(template.content))
    case 'heading':
      return combineEditorFormat(format, element.heading(template.content))
    case 'part':
      return combineEditorFormat(format, element.part(template.content))
    case 'image':
      return style.image(template.content)
  }
}

export const debounce = (func: Function, delay: number) => {
  let timeout: NodeJS.Timeout
  return (...args: any) => {
    clearTimeout(timeout)
    timeout = setTimeout(() => func.apply(this, args), delay)
  }
}
