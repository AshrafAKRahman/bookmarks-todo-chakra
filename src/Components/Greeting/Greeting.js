import { Card, Heading, Text } from "@chakra-ui/react";
import { useState } from "react";
import { useEffect } from "react";

const Greeting = () => {
  const [greetingMessage, setGreetingMessage] = useState("");
  const [userName, setUserName] = useState("");
  const [isMade, setIsMade] = useState(true);

  const submitUserName = (e) => {
    e.preventDefault();
    console.log(userName);
    setIsMade(true);
  };

  let name;
  if (isMade) {
    name = <span>{userName}</span>;
  }

  const openNameInput = () => {
    setIsMade(false);
  };

  useEffect(() => {
    const item = localStorage.getItem("userName");
    const loadedItem = JSON.parse(item);
    if (loadedItem) {
      setUserName(loadedItem);
    }
  }, []);

  useEffect(() => {
    const json = JSON.stringify(userName);
    localStorage.setItem("userName", json);
  }, [userName]);

  useEffect(() => {
    let d = new Date();
    let h = d.getHours();

    if (h > 4 && h < 12) {
      setGreetingMessage("Good Morning");
    } else if (h > 12 && h < 17) {
      setGreetingMessage("Good Afternoon");
    } else {
      setGreetingMessage("Good Evening");
    }
  }, []);

  return (
    <Card
      boxShadow="2xl"
      p="6"
      rounded="md"
      style={{
        background: "radial-gradient(circle, #99edc3, #B2d3C2)",
        width: "350px",
        height: "150px",
        marginLeft: "30px",
        marginTop: "30px",
        borderRadius: "30px",
      }}
    >
      <Heading fontSize="2xl" m="auto">
        {greetingMessage}
      </Heading>
      <br />
      {!isMade ? (
        <form onSubmit={submitUserName}>
          <input
            type="text"
            value={userName}
            onChange={(event) => setUserName(event.target.value)}
            style={{ backgroundColor: "transparent" }}
          />
        </form>
      ) : (
        <Text m="auto" fontSize="4xl" onClick={openNameInput}>
          {name}!
        </Text>
      )}
    </Card>
  );
};

export default Greeting;
