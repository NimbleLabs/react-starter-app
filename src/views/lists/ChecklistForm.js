import LocalData from "../../LocalData";
import {useEffect, useState} from "react";
import {useNavigate, useParams} from "react-router-dom";

function ChecklistForm() {
  let navigate = useNavigate();
  let { id } = useParams();
  const [checklistName, setName] = useState('');
  const [formTitle, setFormTitle] = useState('');

  console.log('ChecklistForm')
  console.log(id)
  console.log('--------------')

  useEffect(() => {
    if(id) {
      setFormTitle('Edit')
    }
    else {
      setFormTitle('New')
    }
  });

  const onNameInputChange = event => {
    setName(event.target.value);
  };

  const onSaveClick = event => {
    let checklist = {
      name: checklistName,
      items: []
    }

    let service = new LocalData()
    service.addChecklist(checklist)
    navigate("/todo");
  };

  return <div className="m-5">

    <h2>{formTitle} Checklist</h2>

    <form onSubmit={onSaveClick}>
      <div className="mb-3">
        <label htmlFor="checklistInput" className="form-label">Name</label>
        <input type="text" className="form-control" id="checklistInput" value={checklistName} onChange={onNameInputChange}/>
      </div>
      <div className="mb-3">
        <button type="submit" className="btn btn-primary">Save</button>
        <a href="/todo" className="ms-2 btn btn-secondary">Cancel</a>
      </div>
    </form>
  </div>
}

export default ChecklistForm;
