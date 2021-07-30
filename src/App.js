import styled from "styled-components";
import React, { useState } from "react";
import Axios from "axios";
import DialogTitle from "@material-ui/core/DialogTitle";
import Dialog from "@material-ui/core/Dialog";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import { DialogActions } from "@material-ui/core";
import "./App.css";
import {
  Header,
  AppNameComponent,
  AppIcon,
  SearchComponent,
  SearchInput,
} from "./components/headerComponent";
import {
  RecipeListContainer,
  RecipeContainer,
  CoverImg,
  RecipeName,
  Ingredients,
  SeeComplete,
} from "./components/recipeComponent";

const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

const Placeholder = styled.img`
  opacity: 0.7;
  width: 700px;
`;

const RecipeComponent = (props) => {
  const [show, setShow] = React.useState(false);
  const { recipeObj } = props;
  return (
    <React.Fragment>
      <Dialog open={show}>
        <DialogTitle id="alert-dialog-slide-title"></DialogTitle>
        <DialogContent>
          <table>
            <thead>
              <th classname="mid">Ingredients</th>
              <th>Weight (grams) </th>
            </thead>
            <br></br>
            <tbody>
              {recipeObj.ingredients.map((ingredientObj) => (
                <tr>
                  <td>{ingredientObj.text}</td>
                  <td className="flright">{ingredientObj.weight}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </DialogContent>
        <DialogActions>
          <button className="asd" onClick={() => setShow(false)}>
            Close
          </button>
        </DialogActions>
      </Dialog>
      <RecipeContainer>
        <CoverImg src={recipeObj.image}></CoverImg>
        <RecipeName>{recipeObj.label}</RecipeName>
        <div className="wrapper"></div>
        <Ingredients onClick={() => setShow(true)}>Ingredients</Ingredients>
        <SeeComplete onClick={() => window.open(recipeObj.url)}>
          See Complete Recipe
        </SeeComplete>
      </RecipeContainer>
    </React.Fragment>
  );
};

function App() {
  const [timeoutId, updateTimeoutId] = useState();
  const [recipeList, updateRecipeList] = useState([]);

  const fetchRecipe = async (searchString) => {
    const response = await Axios.get(
      `https://api.edamam.com/search?q=${searchString}&app_id=509fa791&app_key=c95f01b7774cbec8622e4a97a0ebedac`
    );
    updateRecipeList(response.data.hits);
  };

  const SearchChangeFunction = (event) => {
    clearTimeout(timeoutId);
    const timeout = setTimeout(() => fetchRecipe(event.target.value), 500);
    updateTimeoutId(timeout);
  };

  return (
    <Container>
      <Header>
        <AppNameComponent>
          <AppIcon src="/hungericon.png"></AppIcon>
          Food Recipes
        </AppNameComponent>
        <SearchComponent>
          <img src="./search-icon.svg"></img>
          <SearchInput
            placeholder="Search for recipes"
            onChange={SearchChangeFunction}
          ></SearchInput>
        </SearchComponent>
      </Header>
      <RecipeListContainer>
        {recipeList.length ? (
          recipeList.map((recipeObj) => (
            <RecipeComponent recipeObj={recipeObj.recipe}></RecipeComponent>
          ))
        ) : (
          <Placeholder src="./hunger.svg"></Placeholder>
        )}
      </RecipeListContainer>
    </Container>
  );
}

export default App;
