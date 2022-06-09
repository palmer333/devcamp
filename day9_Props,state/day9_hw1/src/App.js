import "./App.css";
import React from "react";
import PictureCard from "./PictureCard";

let data = [
  {
    id: "001",
    img: "https://picsum.photos/901",
    createdBy: "Kim",
    likeCount: 12,
    commentCount: 13,
  },
  {
    id: "002",
    img: "https://picsum.photos/902",
    createdBy: "Tar",
    likeCount: 1,
    commentCount: 18,
  },
  {
    id: "003",
    img: "https://picsum.photos/903",
    createdBy: "Tommy",
    likeCount: 9,
    commentCount: 16,
  },
  {
    id: "004",
    img: "https://picsum.photos/802",
    createdBy: "Jeff",
    likeCount: 6,
    commentCount: 7,
  },
];

function App() {
  return (
    <div style={{ textAlign: "center" }}>
      {data.map((x) => {
        return (
          <PictureCard
            key={x.id}
            id={x.id}
            img={x.img}
            createdBy={x.createdBy}
            likeCount={x.likeCount}
            commentCount={x.commentCount}
          />
        );
      })}
    </div>
  );
}

export default App;