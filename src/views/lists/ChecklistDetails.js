import { useParams } from "react-router-dom";

function ChecklistDetails() {

  let { id } = useParams();

  return <div>
    <h2>ChecklistDetails: {id}</h2>

    <a href={"/edit-checklist/" + id} className="ms-2 btn btn-primary">Edit</a>
    <a href="/todo" className="ms-2 btn btn-secondary">Back</a>
  </div>;
}

export default ChecklistDetails;
