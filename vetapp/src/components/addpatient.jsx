import Button from 'react-bootstrap/Button'

const AddPatient = () => {
    return ( <div className="col-sm" style={{border:"white solid 1px", padding:"1.3em 1.3em"}}>
        <h5>Add Patient</h5>
        <form>
            <div className="form-row align-items-left">
                <div className="col">   
        <label htmlFor="name">Name: </label>
        <input className="form-control-sm" type="text" id="name" name="inputName"></input>
        </div>
        <div className="col">
        <label htmlFor="weight">Weight: </label>
        <input className="form-control-sm" type="number" id="weight" name="weight" placeholder="kg"></input>
        </div>
        <div className="col">

        <select className="form-control-sm" name="specie">
            <option>Feline</option>
            <option>Canine</option>
        </select>
        </div>
        </div>
        <div className="d-grid gap-2 container mt-5">
    <Button variant="outline-light" size="lg">Add</Button>
    </div>
    </form>
    </div> );
}
 
export default AddPatient;