import { Grid } from "@chakra-ui/react";
import Greeting from "./Components/Greeting/Greeting";
import Time from "./Components/Time/Time";
import Todo from "./Components/Todo/Todo";
import Bookmarks from "./Components/Bookmarks/Bookmarks";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Grid templateColumns={{ sm: "1fr", md: "1fr 1fr" }}>
        <Greeting />
        <Time gridColumn={{ sm: "1 / -1", md: "2" }} />
        <Todo gridColumn={{ sm: "1 / -1", md: "2" }} />
        <Bookmarks />
      </Grid>
    </div>
  );
}

export default App;
