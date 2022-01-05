import LocalData from "../../LocalData";
import {useState} from "react";

function Checklists() {
  let service = new LocalData()
  let initialChecklists = service.getChecklists()
  const [lists, setChecklists] = useState(initialChecklists);

  return <div className="m-5">
    <h2>To do lists</h2>

    <a href="/new-checklist" className="btn btn-primary my-2">New Checklist</a>

    <ul>
      {lists.map(checklist => (
        <li key={checklist.id}>
          <a href={"/checklist/" + checklist.id}>{checklist.name}</a>
        </li>
      ))}
    </ul>

  </div>;
}

export default Checklists;
