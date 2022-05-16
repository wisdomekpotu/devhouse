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
    <div style={{ color: "white", margin: "auto", align: "center", fontSize: "10px", fontWeight: "small" }}>
      {article && (
        <div >
          <h1 style={{ fontSize: "30px" }}>{article.title}</h1>
          <img src={article.thumbnail} alt="" style={{ height: "100%", width: "50%" }} />
          <h1>Author: {article.createdBy}</h1>

          <h1>{article.description}</h1>

        </div>
      )}
    </div>
  )
}
