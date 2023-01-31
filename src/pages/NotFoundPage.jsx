import React from "react";

const NotFoundPage = () => {
  return (
    <div>
      <h2
        style={{
          display: "flex",
          margin: "auto",
          justifyContent: "center",
          color: "black",
        }}
      >
        404
      </h2>
      <h4
        style={{
          display: "flex",
          margin: "auto",
          justifyContent: "center",
          color: "black",
        }}
      >
        Page Not Found
      </h4>
      <img
        style={{
          display: "flex",
          margin: "auto",
          justifyContent: "center",
          width: "100%",
          height: "100%",
        }}
        src="https://cdn.eksmo.ru/v2/ITD000000001279465/COVER/cover1__w220.jpg"
        alt=""
      />
    </div>
  );
};

export default NotFoundPage;
