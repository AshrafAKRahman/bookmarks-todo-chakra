import { DeleteIcon } from "@chakra-ui/icons";
import { Box, Flex, Image, List, ListItem, Text } from "@chakra-ui/react";

const Bookmark = ({ bm, deleteBookmark }) => {
  return (
    <List>
      <ListItem mr={6}>
        <Flex align="center">
          <Box
            borderWidth="1px"
            borderRadius="30px"
            boxShadow="md"
            width={150}
            background="#1D2951"
            height={100}
            overflowY="hidden"
            style={{
              color: "white",
            }}
          >
            <a href={bm.bmLink} target="blank">
              <Image
                src={
                  "https://t3.gstatic.com/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&url=" +
                  bm.bmLink +
                  "&size=24"
                }
                alt=""
                pl={12}
                pt={2}
              />
              <Text pl={8}>{bm.bmTitle}</Text>
            </a>
            <Box pl={12}>
              <DeleteIcon onClick={() => deleteBookmark(bm.id)} />
            </Box>
          </Box>
        </Flex>
      </ListItem>
    </List>
  );
};

export default Bookmark;
