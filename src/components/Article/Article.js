import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { doc, onSnapshot } from "firebase/firestore";
import { db } from "../../firebase/firebase.utils"


export default function Article() {
  const { id } = useParams();
  const [article, setArticle] = useState(null);
  useEffect(() => {
    const docRef = doc(db, "Articles", id);
    onSnapshot(docRef, (snapshot) => {
      setArticle({ ...snapshot.data(), id: snapshot.id });
    });
  }, []);



  return (
    <div>
      {article && (
        <div>
          <h1>{article.title}</h1>
          <img src={article.thumbnail} alt="" style={{ height: "200px", width: "500px" }} />
          <h1>Author:{article.createdBy}</h1>

          <h1>{article.description}</h1>

        </div>
      )}
    </div>
  )
}
