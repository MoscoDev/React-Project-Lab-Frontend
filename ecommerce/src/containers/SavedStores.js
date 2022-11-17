import React, { useEffect, useState } from "react"
import styles from "./SavedStores.module.css"
import F2 from "./Pictures/F2.png"
import F3 from "./Pictures/F3.png"
import F4 from "./Pictures/F4.png"
import F5 from "./Pictures/F5.png"
import axios from "axios"
import { faTrashCan } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom"
import { Rating } from "react-simple-star-rating"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
const SavedStores = () => {
const [savedStores, setSavedStores] = useState([])

useEffect(() => {
   var data = "";

  var config = {
    method: "get",
    url: "http://localhost:3001/api/v1/savestore",
    headers: {
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzNWQ0YzU2MDkwYzY5YmU4ZTMxNDQ1ZCIsImlhdCI6MTY2NzA4NTM1OCwiZXhwIjoxNjY5Njc3MzU4fQ.zzMey1k94keNc0ovtRtJWDa3yPCs98thH_Wbpted1gw",
    },
    data: data,
  };

  axios(config)
    .then(function (response) {
      
      setSavedStores(response?.data?.savedStores);
      console.log(savedStores);
    })
    .catch(function (error) {
      console.log(error);
    });

}, [])

    return (
      <>
        <div className={styles.header}>
          <h1>Saved Stores</h1>
        </div>
        <section className={styles.bigSection}>
          <div className={styles.bar}>
            <ul>
              <li>
                <a href="home">Home</a>
              </li>
              <li>
                <a href="findnearbystores">Find nearby stores</a>
              </li>
              <li>
                <a href="savedstores">Saved Stores</a>
              </li>
              <li>
                <a href="recentstores">Recent Stores</a>
              </li>
            </ul>
          </div>
          <div className={styles.largeCard}>
            {savedStores?.map((savedStore) => (
              <div key={savedStore?._id} className={styles.card}>
                <div className={styles.shoprite}>
                  <a href="shoprite">
                    <h6>{savedStore?.shop?.name}</h6>
                  </a>
                  <img src={savedStore?.shop?.image} alt="Shop" width={200} />
                </div>
                <div className={styles.ipsum}>
                  <h2>{savedStore?.shop?.name}</h2>
                  <p>
                    description:{" "}
                    {savedStore?.shop?.description.length > 100
                      ? savedStore?.shop?.description.substring(0, 100) + "..."
                      : savedStore?.shop?.description}
                  </p>
                  {/* <svg
                    width="112"
                    height="22"
                    viewBox="0 0 112 22"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M10.771 1.61804L12.7137 7.59708L12.826 7.94257H13.1892H19.476L14.3899 11.6378L14.096 11.8514L14.2083 12.1968L16.151 18.1759L11.0649 14.4806L10.771 14.2671L10.4771 14.4806L5.39102 18.1759L7.33373 12.1968L7.44599 11.8514L7.15209 11.6378L2.06601 7.94257H8.35275H8.71603L8.82828 7.59708L10.771 1.61804Z"
                      stroke="#636262"
                    />
                    <path
                      d="M33.313 1.61804L35.2557 7.59708L35.368 7.94257H35.7312H42.018L36.9319 11.6378L36.638 11.8514L36.7502 12.1968L38.693 18.1759L33.6069 14.4806L33.313 14.2671L33.0191 14.4806L27.933 18.1759L29.8757 12.1968L29.988 11.8514L29.6941 11.6378L24.608 7.94257H30.8947H31.258L31.3703 7.59708L33.313 1.61804Z"
                      stroke="#636262"
                    />
                    <path
                      d="M55.855 1.61804L57.7977 7.59708L57.9099 7.94257H58.2732H64.56L59.4739 11.6378L59.18 11.8514L59.2922 12.1968L61.2349 18.1759L56.1489 14.4806L55.855 14.2671L55.5611 14.4806L50.475 18.1759L52.4177 12.1968L52.53 11.8514L52.2361 11.6378L47.15 7.94257H53.4367H53.8L53.9123 7.59708L55.855 1.61804Z"
                      stroke="#636262"
                    />
                    <path
                      d="M78.397 1.61804L80.3397 7.59708L80.4519 7.94257H80.8152H87.1019L82.0159 11.6378L81.722 11.8514L81.8342 12.1968L83.7769 18.1759L78.6909 14.4806L78.397 14.2671L78.1031 14.4806L73.017 18.1759L74.9597 12.1968L75.072 11.8514L74.7781 11.6378L69.692 7.94257H75.9787H76.342L76.4543 7.59708L78.397 1.61804Z"
                      stroke="#636262"
                    />
                    <path
                      d="M100.939 1.61804L102.882 7.59708L102.994 7.94257H103.357H109.644L104.558 11.6378L104.264 11.8514L104.376 12.1968L106.319 18.1759L101.233 14.4806L100.939 14.2671L100.645 14.4806L95.559 18.1759L97.5017 12.1968L97.614 11.8514L97.3201 11.6378L92.234 7.94257H98.5207H98.884L98.9963 7.59708L100.939 1.61804Z"
                      stroke="#636262"
                    />
                  </svg> */}
                  <Rating
                    allowFraction={true}
                    initialValue={4}
                    readonly={true}
                  />
                </div>
                <div className={styles.visited}>
                  <div className={styles.click} style={{ display: "flex", alignItems:"center",justifyContent:"flex-start" }}>
                    <FontAwesomeIcon icon={faTrashCan} />
                    <h6>Remove item</h6>
                  </div>
                  <Link
                    to={`/shops/${savedStore?.shop?.name}/${savedStore?.shop?._id}`}
                  >
                    Visit store {">"}
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </section>
      </>
    );
}

export default SavedStores;