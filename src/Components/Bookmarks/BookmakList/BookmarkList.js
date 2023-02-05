import {
  Box,
  Button,
  Card,
  Flex,
  Grid,
  Heading,
  List,
  Text,
} from "@chakra-ui/react";
import Bookmark from "../Bookmark/Bookmark";
// import "./BookmarkList.css";

const BookmarkList = ({ bookmarks, deleteBookmark, openForm }) => {
  return (
    <Card
      boxShadow="2xl"
      p="6"
      rounded="md"
      maxHeight="400px"
      // overflow="scroll"
      style={{
        background: "radial-gradient(circle, #99edc3, #B2d3C2)",
        width: "550px",
        marginLeft: "30px",
        marginTop: "30px",
        borderRadius: "30px",
      }}
    >
      <Box>
        <Heading borderRadius="md" boxShadow="md" height={100}>
          <Flex align="center">
            <Text ml="20px" mt="25px">
              Bookmarks
            </Text>
            <Button
              onClick={openForm}
              ml={40}
              mt={6}
              boxShadow="inset 0 0 0 2px #FFFFFF"
              style={{
                borderRadius: "20px",
                background: "#1D2951",
                color: "white",
              }}
            >
              Add New
            </Button>
          </Flex>
        </Heading>
      </Box>
      {/* <div className="bms-container"> */}
      <List spacing={6}>
        <Grid
          templateColumns="repeat(3, minmax(0, 1fr))"
          gridGap={6}
          overflowY="scroll"
          mt={10}
          height={220}
        >
          {bookmarks.map((bm) => (
            <Bookmark key={bm.id} bm={bm} deleteBookmark={deleteBookmark} />
          ))}
        </Grid>
      </List>
      {/* </div> */}
    </Card>
  );
};

export default BookmarkList;
