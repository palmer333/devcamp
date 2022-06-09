import React, { useState } from "react";

const css = {
  display: "inline-block",
  width: "22%",
  margin: "1%",
  backgroundColor: "#ffdab9",
  borderRadius: "10px",
};

const PictureCard = (props) => {
  const [like, setLike] = useState(props.likeCount);
  const [comment, setComment] = useState(props.commentCount);

  const onClickFunction = () => {
    setLike(like + 1);
  };

  const enterComment = (e) => {
    if (e.keyCode === 13) {
      alert("Thank you for your comment");
      setComment(comment + 1);
      e.target.value = "";
    }
  };

  return (
    <div style={css}>
      <p>ID : {props.id}</p>
      <div style={{ padding: "10px" }}>
        <img style={{ maxWidth: "100%" }} src={props.img} alt={props.id} />
      </div>
      <p>Created by : {props.createdBy}</p>
      {like > 0 && <p>LIKE : {like}</p>}
      <p>Comments : {comment}</p>
      <input type="button" value="LIKE" onClick={onClickFunction} />
      <br />
      <input type="text" onKeyUp={enterComment} />
    </div>
  );
};

export default PictureCard;