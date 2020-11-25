import { Pagination } from 'react-bootstrap';
import { useContext } from 'react';
import {PagesContext} from '../../context/pages.js'

function Pages(props) {
  const context = useContext(PagesContext)
  // const [active, setActive] = useState(1);
  // const [filterItems]=usePages(active,props.items);
  
  let items = [];
  let listLength= props.items.length
  let perPage = props.perPage;

  console.log("pages component",Math.ceil(listLength/perPage));
  for (let i = 1; i <= Math.ceil(listLength/perPage); i++) {
    items.push(
      <Pagination.Item key={i} active={ i === context.active} onClick={()=>{context.setActive(i)}}>
        {i}
      </Pagination.Item>,
    );
  }
  return (
    <div>
      <Pagination size="sm">{items}</Pagination>
    </div>
  );


}
export default Pages;