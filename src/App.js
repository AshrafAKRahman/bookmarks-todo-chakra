import { Grid } from "@chakra-ui/react";
import Greeting from "./Components/Greeting/Greeting";
import Time from "./Components/Time/Time";
import Todo from "./Components/Todo/Todo";
import Bookmarks from "./Components/Bookmarks/Bookmarks";
import "./App.css";
import { ImBookmarks } from "react-icons/im";

function App() {
  return (
    <div className="App">
      <Grid templateColumns="1fr 1fr">
        <Greeting />
        <Time gridColumn="2" />
        <Todo gridColumn="2" />
        <Bookmarks />
      </Grid>
    </div>
  );
}

export default App;
