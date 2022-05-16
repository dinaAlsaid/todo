import React from "react";
import { HandwrittenItem } from "../designElements/HandwrittenItem/index";
import { TodoListContainer } from "../designElements/TodoListContainer";
import { TodoListItem } from "../designElements/ListItem/index";
import { HiPlus, HiX } from "react-icons/all";

function TodoList(props) {
  return (
    <TodoListContainer>
      {props.list.map((item) => (
        <HandwrittenItem key={item.text}>
          <TodoListItem
            icon={<></>}
            item={item.text}
            status={item.complete}
            note={<small className="float">Difficulty: {item.difficulty}</small>}
            handleStatus={() => props.handleComplete(item)}
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
    </TodoListContainer>
  );
}

export default TodoList;

TodoList.defaultProps = {
  showAddForm: () => {},
};
