import React, { createRef, useEffect } from 'react'

export default function Comments() {
  const commentBox = createRef()

  useEffect(() => {
    let scriptEl = document.createElement('script')
    scriptEl.setAttribute('src', 'https://giscus.app/client.js')
    scriptEl.setAttribute('crossorigin', 'anonymous')
    scriptEl.setAttribute('async', true)
    scriptEl.setAttribute('data-repo', 'wisdomekpotu/devhouse')
    scriptEl.setAttribute('issue-term', 'title')
    scriptEl.setAttribute('data-repo-id', 'R_kgDOHIrJQA')
    scriptEl.setAttribute('data-reactions-enabled', '1')
    scriptEl.setAttribute('data-category-id', 'DIC_kwDOHIrJQM4CPLPC')
    scriptEl.setAttribute('data-category', 'Comments')
    scriptEl.setAttribute('data-theme', 'dark')
    scriptEl.setAttribute('data-lang', 'en')
    scriptEl.setAttribute('data-input-position', 'bottom')
    scriptEl.setAttribute('data-emit-metadata', '0')
    scriptEl.setAttribute('data-mapping', 'pathname')
    scriptEl.setAttribute('theme', 'github-light')
    commentBox.current.appendChild(scriptEl)
  }, [commentBox])

  return (
    <div style={{ width: '100%' }} id="comments">
      <div ref={commentBox}></div>
    </div>
  )
}
