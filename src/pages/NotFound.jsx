import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const NotFound = ({ title }) => {
  const navigate = useNavigate();
  const [counter, setCounter] = useState(5);

  useEffect(() => {
    document.title = "Not Found";
    setTimeout(() => {
      navigate("/");
    }, 5000);
  }, [navigate]);

  useEffect(() => {
    const timer =
      counter > 0 && setInterval(() => setCounter(counter - 1), 1000);
    return () => clearInterval(timer);
  }, [counter]);

  return (
    <div id="notfound">
      <div className="notfound">
        <div className="notfound-404">
          <h3> Oops! {title ? title : "Page"} tidak ditemukan </h3>
          <h1>
            <span>4</span>
            <span>0</span>
            <span>4</span>
          </h1>
        </div>
        <h2>Maaf, {title ? title : "page"} yang anda cari tidak tersedia</h2>
        <h3>Kembali dalam {counter} detik</h3>
      </div>
    </div>
  );
};

export default NotFound;
