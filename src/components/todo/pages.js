import { Pagination } from "react-bootstrap";

function Pages(props) {

  return (
    <div>
      <Pagination size="sm">
        {props.items.map((item, i) => {
          return (
            <Pagination.Item
              key={i}
              active={i === props.activePage}
              onClick={() => {
                props.setActivePage(i);
              }}
            >
              {i}
            </Pagination.Item>
          );
        })}
      </Pagination>
    </div>
  );
}
export default Pages;
