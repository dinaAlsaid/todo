import React from "react";
import { TodoListItem } from "../../components/designElements/ListItem/index";
import { HiPlus, HiX, BsStars } from "react-icons/all";

function TodoList(props) {
  return (
    <>
      {props.list.map((item, index) => (
        <TodoListItem
          key={`${item.task}-${index}`}
          icon={<>{item.importance && <BsStars />}</>}
          item={item.task}
          status={item.status}
          note={<small className="float">{item.note}</small>}
          handleStatus={() => props.handleStatus(item)}
          actionButton={<HiX />}
          handleAction={() => props.handleDelete(item)}
        />
      ))}

      {!props.showAddForm && (
        <TodoListItem
          key="new item"
          icon={<></>}
          actionButton={<HiPlus />}
          item=""
          handleAction={props.onAddItemClick}
        />
      )}
    </>
  );
}

export default TodoList;

TodoList.defaultProps = {
  showAddForm: () => {},
};
