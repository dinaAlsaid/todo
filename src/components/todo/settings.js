import React, { useContext } from 'react';
import { Form } from 'react-bootstrap';
import { SettingsContext } from '../../context/settings.js';


function Settings() {
  const context = useContext(SettingsContext)
  return (
    <>
      <Form>
        <Form.Label><span>Number of notes per page</span></Form.Label>
        <Form.Control 
        type="range" 
        defaultValue="3" 
        min="3" max="7" 
        name="numberOfNotes" 
        onChange={context.setNumOfNotes} 
        />
        <Form.Check
          type="switch"
          id="custom-switch"
          label="Show completed items"
          onChange={context.toggleShowCompleted}
        />
        <Form.Check
          onClick={context.sortBy}
          name='sort'
          type='radio'
          label='No sort'
          value='None'
        />
        <Form.Check
          onClick={context.sortBy}
          name='sort'
          type='radio'
          label='Rating'
          value='rating'
        />

      </Form>
    </>
  );
}
export default Settings;
// let active = 2;
// let items = [];
// for (let number = 1; number <= 5; number++) {
//   items.push(
//     <Pagination.Item key={number} active={number === active}>
//       {number}
//     </Pagination.Item>,
//   );
// }

// const paginationBasic = (
//   <div>
//     <Pagination>{items}</Pagination>
//     <br />

//     <Pagination size="lg">{items}</Pagination>
//     <br />

//     <Pagination size="sm">{items}</Pagination>
//   </div>
// );

// render(paginationBasic);