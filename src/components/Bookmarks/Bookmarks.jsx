import PropTypes from "prop-types";
import Bookmark from "../Bookmark/Bookmark";

const Bookmarks = ({ bookmarks, readingTime }) => {
  return (
    <div className="md:w-1/3 bg-[#1111110D] p-4 ml-6">
      <div>
        <h3 className="text-3xl">Reading Time: {readingTime}</h3>
      </div>
      <h2 className="text-2xl font-bold">
        Bookmarked Blogs: {bookmarks.length}{" "}
      </h2>
      {bookmarks.map((bookmark, idx) => (
        <Bookmark key={idx} bookmark={bookmark}></Bookmark>
      ))}
    </div>
  );
};
Bookmarks.propTypes = {
  bookmarks: PropTypes.array,
  readingTime: PropTypes.number,
};
export default Bookmarks;
