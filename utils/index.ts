import { TPreview } from '@/components/molecules/Draggable'
import Prism from 'prismjs'
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
  italic: (data: string) => `<span class="e-italic">${data}</i>`,
  color: (data: string, color: string) => `<span style="color:${color}">${data}</span>`,
  breakline: (data: string) => `<div class="break-line">${data}</div>`,
  image: (url: string, width = 100, height = 300) => {
    if (!url.trim()) return ''
    return `<div style="margin:20px 0;border-radius:4px;width:${width}%;height:${height}px">
        <img style="border-radius:4px; width: 100%;height: 100%;object-fit: cover;" src='${url}'  alt="image"/>
    </div>`
  },
  size: (data: string, size = 1) =>
    `<div style="font-size:${size}rem">
        ${data}
    </div>`,
  center: (data: string) =>
    `<div class="flex-center">
        ${data}
    </div>`,
  start: (data: string) =>
    `<div class="flex-start">
        ${data}
    </div>`,
  end: (data: string) =>
    `<div class="flex-end">
        ${data}
    </div>`,
  itemlist: (data: string) => `<li>${data}</li>`
}

export const element = {
  heading: (data: string, size = 3, bold = 700) =>
    style.size(style.bold(data, bold), size),
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
    const formated = Prism.highlight(code, Prism.languages.javascript, 'javascript')
    const html = formated + lineNumbersWrapper
    return `<pre class="language-js" style="border-radius:4px" >
    <code class="language-js">&#13;&#10;${html.toString()}</code>
    </pre>`
  }
}

export const combineEditorToHTML = (template: TPreview) => {
  switch (template.type) {
    case 'code':
      return element.code(template.content)
    case 'url':
      return element.url(template.content, template.url || '')
    case 'list':
      return element.list(template.content)
    case 'text':
      return element.content(template.content)
    case 'desc':
      return element.desc(template.content)
    case 'heading':
      return element.heading(template.content)
    case 'image':
      return style.image(template.content)
  }
}
