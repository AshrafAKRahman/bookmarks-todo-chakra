import React, { useState, useRef, useEffect } from "react";
import { v4 as uuidv4 } from "uuid";
import { AiFillCloseCircle } from "react-icons/ai";
import { Button, Card, Input } from "@chakra-ui/react";
// import "./BookmarkForm.css";

const BookmarkForm = (props) => {
  const [bmTitle, setBmTitle] = useState("");
  const [bmLink, setBmLink] = useState("");
  const titleRef = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();
    props.addBookmark({ id: uuidv4(), bmTitle: bmTitle, bmLink: bmLink });
  };

  const closeFormHandler = () => {
    props.closeForm();
  };

  useEffect(() => {
    titleRef.current.focus();
  }, []);
  return (
    <Card
      boxShadow="2xl"
      p="6"
      rounded="md"
      style={{
        background: "radial-gradient(circle, #99edc3, #B2d3C2)",
        width: "550px",
        marginLeft: "30px",
        marginTop: "30px",
        borderRadius: "30px",
      }}
    >
      <div className="card">
        <form onSubmit={handleSubmit}>
          <div className="form-control">
            <label htmlFor="">Title</label>
            <Input
              id="bmTitle"
              type="text"
              maxlength="10"
              onChange={(e) => setBmTitle(e.target.value)}
              ref={titleRef}
              autoFocus={props.showForm}
              style={{ borderRadius: "60px" }}
              ml="10px"
              size="lg"
              width="300px"
            />
          </div>
          <div className="form-control">
            <label htmlFor="">URL</label>
            <Input
              id="bmLink"
              type="text"
              onChange={(e) => setBmLink(e.target.value)}
              style={{ borderRadius: "60px" }}
              ml="10px"
              mt="10px"
              size="lg"
              width="300px"
            />
          </div>
          <Button
            className="btn-cancel"
            onClick={closeFormHandler}
            ml="80px"
            mt="30px"
            boxShadow="inset 0 0 0 2px #FFFFFF"
            style={{
              borderRadius: "20px",
              background: "#1D2951",
              color: "white",
            }}
          >
            Cancel
          </Button>
          <Button
            className="btn-add"
            type="submit"
            ml="80px"
            mt="30px"
            boxShadow="inset 0 0 0 2px #FFFFFF"
            style={{
              borderRadius: "20px",
              background: "#1D2951",
              color: "white",
            }}
          >
            Add Bookmark
          </Button>
        </form>
      </div>
    </Card>
  );
};
export default React.memo(BookmarkForm);
