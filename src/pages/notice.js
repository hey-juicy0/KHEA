import React, { useEffect, useState } from "react";
import { getFirestore, collection, getDocs } from "firebase/firestore";
import { initializeApp } from "firebase/app";
import { Link } from "react-router-dom";

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

const Notice = () => {
  const [notices, setNotices] = useState([]);

  useEffect(() => {
    const fetchNotices = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, "notice"));
        const noticesData = querySnapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        setNotices(noticesData);
      } catch (error) {
        console.error("Error fetching notices: ", error);
      }
    };

    fetchNotices();
  }, []);

  return (
    <div>
      <div className="notice">
        <table className="notice_table">
        <thead>
          <tr style={{padding:'0.1em'}}> 
            <th scope="col" class="th-num">번호</th>
            <th scope="col" class="th-title">제목</th>
            <th scope="col" class="th-date">날짜</th>
          </tr>
        </thead>
        <tbody>
        {notices.map((notice, idx) => (
          <tr key={notice.id}>
            <td className="n-index">{idx + 1}</td> {/* idx + 1로 순차 번호 생성 */}
            <th className="n-title">
              <Link to={`/notice/${notice.id}`}>
                <strong>{notice.title}</strong>
              </Link>
            </th>
            <td className="n-date">{notice.date}</td>
          </tr>
        ))}
      </tbody>
      </table>
        </div>
    </div>
  );
};

export default Notice
;