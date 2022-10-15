import GlobalStyle from "./GlobalStyle";
import styled from "styled-components";

const PostItem = ({ id, name, title, body }) => {
  // console.log("@props", props);
  return (
    <>
      <PI>
        <p>{`${title}`}</p>
        <p>{`${name}`}</p>
      </PI>
    </>
  );
};

const PI = styled.form`
  width: 100%;
  border: 1px solid rgba(0, 0, 0, 0.2);
  display: flex;
  justify-content: space-between;
  padding: 10px 20px;
`;

export default PostItem;
