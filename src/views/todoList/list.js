import React from "react";
import { HandwrittenItem } from "../../components/designElements/HandwrittenItem/index";
import { TodoListItem } from "../../components/designElements/ListItem/index";
import { HiPlus, HiX, BsStars } from "react-icons/all";

function TodoList(props) {
  return (
    <>
      {props.list.map((item, index) => (
        <HandwrittenItem key={`${item.task}-${index}`}>
          <TodoListItem
            icon={<>{item.importance && <BsStars />}</>}
            item={item.task}
            status={item.status}
            note={<small className="float">{item.note}</small>}
            handleStatus={() => props.handleStatus(item)}
            actionButton={
              <span className="delete bullet-icons hover-pointer">
                <HiX />
              </span>
            }
            handleAction={() => props.handleDelete(item)}
          />
        </HandwrittenItem>
      ))}

      {!props.showAddForm && (
        <HandwrittenItem key="new item">
          <TodoListItem
            icon={<></>}
            actionButton={<HiPlus className="hover-pointer bullet-icons" />}
            item=""
            handleAction={props.onAddItemClick}
          />
        </HandwrittenItem>
      )}
    </>
  );
}

export default TodoList;

TodoList.defaultProps = {
  showAddForm: () => {},
};
