import { Card, Heading, Text } from "@chakra-ui/react";
import { useState } from "react";

const Time = () => {
  const [currentTime, setCurrentTime] = useState("");

  let now = new Date();
  now = now.toDateString().slice(0, 11);
  console.log(now);

  const updateTime = () => {
    let date = new Date();

    let hours = date.getHours();
    let minutes = date.getMinutes();
    if (minutes < 10) minutes = "0" + minutes;
    if (hours < 10) hours = "0" + hours;

    date = hours + ":" + minutes;
    setCurrentTime(date);

    console.log(date);
  };

  setTimeout(updateTime, 1000);
  return (
    <Card
      boxShadow="2xl"
      p="6"
      rounded="md"
      bg="white"
      style={{
        background: "radial-gradient(circle, #99edc3, #B2d3C2)",
        width: "250px",
        height: "150px",
        marginLeft: "30px",
        marginTop: "30px",
        borderRadius: "30px",
      }}
    >
      <Heading m="auto">{currentTime}</Heading>
      <Text m="auto" fontSize="4xl">
        {" "}
        {now}
      </Text>
    </Card>
  );
};

export default Time;
