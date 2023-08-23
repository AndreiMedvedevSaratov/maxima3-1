import styled from "styled-components";

const MyStyledDiv = styled.div`
  width: 250px;
  height: 30px;
  background-color: rgb(189, 252, 252);
  color: rgb(57, 40, 140);
  border: solid 1px;
  border-radius: 10px;
  font-size: 20px;
  line-height: 20px;
  padding-left: 10px;
  padding-top: 5px;
  cursor: pointer;

  &:hover {
    background-color: rgb(18, 134, 134);
  }
`;

function Button4() {
  return (
    <div>
      <MyStyledDiv>Показать больше</MyStyledDiv>
    </div>
  );
}

export default Button4;
