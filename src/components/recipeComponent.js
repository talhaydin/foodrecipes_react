import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

export const RecipeListContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  padding: 30px;
  justify-content: space-evenly;
  gap: 20px;
`;

export const RecipeContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 10px;
  width: 300px;
  box-shadow: rgba(14, 30, 37, 0.12) 0px 2px 4px 0px,
    rgba(14, 30, 37, 0.32) 0px 2px 16px 0px;
  border-radius: 10px;
`;

export const CoverImg = styled.img`
  height: 200px;
  width: 300px;
  border-radius: 10px;
`;

export const RecipeName = styled.span`
  font-size: 18px;
  font-weight: bold;
  colour: black;
  margin: 10 px;
  max-height: 23px;
  margin-top: 15px;
`;

export const Ingredients = styled.button`
  margin-top: 30px;
  margin-bottom: 15px;
  box-shadow: inset 0px 1px 0px 0px #bbdaf7;
  background-color: #4481bd;
  border-radius: 6px;
  border: 1px solid #e5f2ff;
  display: inline-block;
  cursor: pointer;
  color: #ffffff;
  font-size: 18px;
  padding: 20px;
  font-weight: bold;
  padding: 6px 24px;
  text-decoration: none;
  text-shadow: 0px 1px 0px #528ecc;
`;

export const SeeComplete = styled.button`
  margin: 15px 0px;
  box-shadow: inset 0px 1px 0px 0px #bbdaf7;
  background-color: #4481bd;
  border-radius: 6px;
  border: 1px solid #e5f2ff;
  display: inline-block;
  cursor: pointer;
  color: #ffffff;
  font-size: 18px;
  padding: 20px;
  font-weight: bold;
  padding: 6px 24px;
  text-decoration: none;
  text-shadow: 0px 1px 0px #528ecc;
`;
