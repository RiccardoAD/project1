import SingleBook from "./SingleBook";

const BookList = (props) => {
  return props.arrayOfBooks.map((b) => {
    return <SingleBook myBook={b} key={b.asin} />;
  });
};

export default BookList;