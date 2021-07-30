import styled from "styled-components";

export const Header = styled.div`
  color: white;
  background-color: #142281;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 20px;
  font-size: 25px;
  font-weight: bold;
  box-shadow: 0 3px 6px 0 #555;
`;

export const AppNameComponent = styled.div`
  display: flex;
  align-items: center;
  font-size: 32px;
`;
export const SearchComponent = styled.div`
display: flex;
flex-direction; row;
background-color: white; 
padding: 10px;
border-radius: 6px;
width: 900px; 
margin-left: 20px;`;
export const AppIcon = styled.img`
  width: 50px;
  height: 50px;
  margin: 15px;
`;

export const SearchInput = styled.input`
  border: none;
  outline: none;
  font-size: 20px;
  font-weight: bold;
  text-color: black;
`;
