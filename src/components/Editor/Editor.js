import React from 'react'
import SimpleMDE from 'react-simplemde-editor'
import 'easymde/dist/easymde.min.css'
import './Editor.css'

function Editor({ id, onChange, onUploadImage, options = {}, ...props }) {
  /**
   * @type {EasyMDE.Options}
   */
  const defaultOptions = {
    spellChecker: false,
    status: false,
    toolbarTips: true,
    shortcuts: { toggleFullScreen: null, toggleSideBySide: null },
    hideIcons: ['quote', 'side-by-side', 'fullscreen'],
    uploadImage: true,
    imageUploadFunction: onUploadImage,
  }

  return (
    <SimpleMDE
      {...props}
      id={id}
      onChange={onChange}
      className="WYSIWYG"
      options={{ ...defaultOptions, ...options }}
    />
  )
}

export default Editor
