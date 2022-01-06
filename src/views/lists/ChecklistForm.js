import LocalData from "../../LocalData";
import {useEffect, useState} from "react";
import {useNavigate, useParams} from "react-router-dom";

function ChecklistForm(props) {
  let navigate = useNavigate();
  let { id } = useParams();
  const [currentChecklist, setChecklist] = useState({id: null, name: '', items: []});

  useEffect(() => {
    if(id && !currentChecklist.id) {
      let service = new LocalData()
      let checklist = service.getChecklist(id)
      setChecklist(checklist)
    }
  });

  const onNameInputChange = event => {
    setChecklist({id: currentChecklist.id, name: event.target.value, items: currentChecklist.items} );
  };

  const onSaveClick = event => {
    let service = new LocalData()

    if(id) {
      service.updateChecklist(currentChecklist)
    }
    else {
      service.addChecklist(currentChecklist)
    }

    navigate("/todo");
  };

  return <div className="m-5">

    <h2>{props.title} Checklist</h2>

    <form onSubmit={onSaveClick}>
      <div className="mb-3">
        <label htmlFor="checklistInput" className="form-label">Name</label>
        <input type="text" className="form-control" id="checklistInput" value={currentChecklist.name} onChange={onNameInputChange}/>
      </div>
      <div className="mb-3">
        <button type="submit" className="btn btn-primary">Save</button>
        <a href="/todo" className="ms-2 btn btn-secondary">Cancel</a>
      </div>
    </form>
  </div>
}

export default ChecklistForm;
