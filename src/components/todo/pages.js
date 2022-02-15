import { Pagination } from "react-bootstrap";
import { useContext,useState } from "react";


function Pages(props) {
  const [activePage, setActivePage] = useState(1);


  const filterForPages= (list) => {
    list = list.filter((item, index) => {// eslint-disable-line
      // console.log(Math.ceil(index / context.numberOfItems));

      if (Math.ceil(index / props.perPage) === activePage) {
        return item;
      }
    });
    return list;
  }




  let items = [];
  let listLength = props.items.length;

  for (let i = 1; i <= Math.ceil(listLength / props.perPage); i++) {
    items.push(
      <Pagination.Item
        key={i}
        active={i === activePage}
        onClick={() => {
          setActivePage(i);
        }}
      >
        {i}
      </Pagination.Item>
    );
  }
  return (
    <div>
      <Pagination size="sm">{items}</Pagination>
    </div>
  );
}
export default Pages;
