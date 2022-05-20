import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { doc, onSnapshot } from 'firebase/firestore'
import { db } from '../../firebase/firebase.utils'
// import { Avatar} from '@mui/material'
import Comments from './Comments'
import Navbar from '../Navbar/Navbar'
import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'
import { materialDark } from 'react-syntax-highlighter/dist/esm/styles/prism'

export default function Article() {
  const { id } = useParams()
  const [article, setArticle] = useState(null)
  useEffect(() => {
    const docRef = doc(db, 'Articles', id)
    onSnapshot(docRef, (snapshot) => {
      setArticle({ ...snapshot.data(), id: snapshot.id })
    })
  }, [id])

  return (
    <>
      <Navbar />
      <div
        style={{
          color: 'white',
          margin: 'auto',
          justifyContent: 'center',
          textAlign: 'center',
          fontSize: '10px',
          fontWeight: 'small',
          marginTop: '80px',
        }}
      >
        {article && (
          <div>
            <h1 style={{ fontSize: '43px', fontWeight: '800' }}>
              {article.title}
            </h1>
            <img
              src={article.thumbnail}
              alt=""
              style={{ height: '100%', width: '70%' }}
            />
            <br />
            <div
              style={{
                justifyContent: 'center',
                textAlign: 'center',
                margin: 'auto',
                marginLeft: '225px',
              }}
            >
              {/* <Link to={`/author/${article.createdBy}`}>
                <Avatar alt="Remy Sharp" src={article.userImg} />
              </Link> */}
            </div>
            <br /> <br />
            <div style={{ fontSize: '20px' }}>
              <ReactMarkdown
                children={article.description}
                remarkPlugins={[remarkGfm]}
                components={{
                  code: Component,
                }}
              />
            </div>
            <br />
            <Comments />
          </div>
        )}
      </div>
    </>
  )
}

const Component = ({ language, value }) => {
  return (
    <SyntaxHighlighter
      language={language ?? null}
      style={materialDark}
      wrapLines={true}
      showLineNumbers
    >
      {value ?? ''}
    </SyntaxHighlighter>
  )
}
