import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { doc, onSnapshot } from 'firebase/firestore';
import { db } from '../../firebase/firebase.utils';
import Comments from './Comments';
import Navbar from '../Navbar/Navbar';
import ReactMarkdown from 'react-markdown';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { dark } from 'react-syntax-highlighter/dist/esm/styles/prism';
import ImageRenderer from './image_renderer';

export default function Article() {
  const { id } = useParams();
  const [article, setArticle] = useState(null);
  useEffect(() => {
    const docRef = doc(db, 'Articles', id);
    onSnapshot(docRef, (snapshot) => {
      setArticle({ ...snapshot.data(), id: snapshot.id });
    });
  }, [id]);

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
          width: '70%',
        }}
      >
        {article && (
          <div>
            <h1 style={{ fontSize: '43px', fontWeight: '800' }}>
              {article.title}
            </h1>
            <img
              src={article.thumbnail}
              alt=''
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
            <div
              style={{
                fontSize: '18px',

                textAlign: 'justify',
              }}
            >
              <ReactMarkdown
                renderers={{ image: ImageRenderer }}
                children={article.description}
                components={{
                  code({ node, inline, className, children, ...props }) {
                    const match = /language-(\w+)/.exec(className || '');
                    return !inline && match ? (
                      <SyntaxHighlighter
                        children={String(children).replace(/\n$/, '')}
                        style={dark}
                        showLineNumbers={true}
                        wrapLines={true}
                        language={match[1]}
                        PreTag='div'
                        {...props}
                      />
                    ) : (
                      <code className={className} {...props}>
                        {children}
                      </code>
                    );
                  },
                }}
              />
            </div>
            <br />
            <Comments />
          </div>
        )}
      </div>
    </>
  );
}
