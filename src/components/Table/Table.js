import "./Table.css";
import { useUserAuth } from '../../context/UserAuthContext'
import DeleteArticle from '../Article/DeleteArticle';
import { Link } from 'react-router-dom';
import { collection, onSnapshot, orderBy, query } from 'firebase/firestore'
import React, { useEffect, useState } from 'react'
import { db } from "../../firebase/firebase.utils"
import EditArticle from "../Article/EditArticle"

export default function Table() {
  const { user } = useUserAuth()

  const [articles, setArticles] = useState([]);


  useEffect(() => {
    const articleRef = collection(db, "Articles");
    const q = query(articleRef, orderBy("createdAt", "desc"));
    onSnapshot(q, (snapshot) => {
      console.log(onSnapshot)
      const articles = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));

      setArticles(articles);
      console.log(articles);
    });
  }, []);

  return (
    <div>

      
<table>
  <tr style={{color:"white"}}>
    <th>Your Articles</th>
    <th>Edit Article</th>
    <th>Delete</th>
  </tr>

  {
          articles.length === 0 ? (
            <p>No articles</p>

          ) : (articles.map(({
            id,
            title,
            description,
            thumbnail,
            createdAt,
            createdBy,
            userId,
            userImg,
            likes,
            comments,
          }) => (

  <tr key={id}>
  <Link to={`/feed/article/${id}`}>
    <td>
    {user && user.uid === userId && (
   title
      )}
      
      
      </td>
    </Link>
   
    <td> 
      {user && user.uid === userId && (
      <EditArticle/>
      )}
      </td>
   
    <td>  
      {user && user.uid === userId && (
            <DeleteArticle id={id} thumbnail={thumbnail}/>
      )}
    </td>
  </tr>
      ))
      )
    }

               
                         


</table>

    </div>
  )
}
