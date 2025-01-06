import React, { useEffect, useState } from "react";
import { getFirestore, doc, getDoc } from "firebase/firestore";
import { initializeApp } from "firebase/app";
import { useParams } from "react-router-dom";
import './style.css';

const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
  storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.REACT_APP_FIREBASE_APP_ID,
  measurementId: process.env.REACT_APP_FIREBASE_MEASUREMENT_ID,
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

const NoticeDetail = () => {
  const { id } = useParams();
  const [notice, setNotice] = useState(null);

  useEffect(() => {
    const fetchNotice = async () => {
      try {
        const docRef = doc(db, "notice", id);
        const docSnap = await getDoc(docRef);

        if (docSnap.exists()) {
          setNotice(docSnap.data());
        } else {
          console.error("No such document!");
        }
      } catch (error) {
        console.error("Error fetching notice: ", error);
      }
    };

    fetchNotice();
  }, [id]);

  if (!notice) {
    return <p>로딩 중...</p>;
  }

  return (
    <div>
        <div className="detail">
          <div className="detail_box">
            <div className="date">{notice.date}</div>
            <div className="title">{notice.title}</div>
            <div className="content">{notice.content}</div>
          </div>
        </div>

    </div>
  );
};

export default NoticeDetail;