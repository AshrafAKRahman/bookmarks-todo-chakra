import { useEffect, useState } from "react";
import BookmarkList from "./BookmakList/BookmarkList";
import BookmarkForm from "./BookmarkForm/BookmarkForm";
// import "./Bookmarks.css";

const Bookmarks = () => {
  const storedBookmarks = localStorage.getItem("bookmarks");
  const [bookmarks, setBookmarks] = useState(
    storedBookmarks ? JSON.parse(storedBookmarks) : []
  );
  const [showForm, setShowForm] = useState(false);

  const addBookmark = (bookmark) => {
    setBookmarks((prevBookmarks) => [...prevBookmarks, { ...bookmark }]);
    setShowForm(false);
  };

  const deleteBookmark = (id) => {
    setBookmarks((prevBookmarks) => prevBookmarks.filter((bm) => bm.id !== id));
    console.log(id);
  };
  const openForm = () => {
    setShowForm(true);
  };

  const closeForm = () => {
    setShowForm(false);
  };

  useEffect(() => {
    localStorage.setItem("bookmarks", JSON.stringify(bookmarks));
  }, [bookmarks]);

  return (
    <div className="bookmarks">
      {showForm ? (
        <div className="bookmarks-container">
          <div className="backdrop">
            <BookmarkForm addBookmark={addBookmark} closeForm={closeForm} />
          </div>
          <BookmarkList
            bookmarks={bookmarks}
            deleteBookmark={deleteBookmark}
            openForm={openForm}
          />
        </div>
      ) : (
        <BookmarkList
          bookmarks={bookmarks}
          deleteBookmark={deleteBookmark}
          openForm={openForm}
        />
      )}
    </div>
  );
};

export default Bookmarks;
