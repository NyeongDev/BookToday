import GlobalStyle from "./GlobalStyle";
import { useSelector } from "react-redux";
import PostItem from "./PostItem";
import styled from "styled-components";

const PostList = () => {
  const posts = useSelector(state => state.bookslice);
  // console.log("@리스트유즈셀렉트", posts);
  return (
    <PL>
      <LT>오늘은 어떤 책을 읽어볼까요?</LT>
      {posts.map(post => {
        const { name, title, body, id } = post;
        return (
          <PostItem key={id} id={id} name={name} title={title} body={body} />
        );
      })}
    </PL>
  );
};

const PL = styled.div`
  width: 550px;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 50px auto 0 auto;
`;

const LT = styled.div`
  margin-bottom: 20px;
  font-size: 20px;
  font-weight: bold;
`;

export default PostList;
