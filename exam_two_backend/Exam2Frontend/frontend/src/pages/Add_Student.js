import React, {useState} from 'react';
function StudentSignUp(){
    const [name, setname] = useState("");
    const [dept, setDept] = useState("");
    const [email, setEmail] = useState("");
    const [grade, setGrade] = useState("");

    const handleSubmit = () => {//event was removed from parentheses
        fetch (`http://localhost:8080/add_student`, {method: 'POST', headers: {'Content-Type': 'application/json', }, body: JSON.stringify({name, email, dept, grade}),})
            .then((response) => {
                //console.log('je;;p');
                window.location.pathname = "/Home"
            })
            .catch(error => console.log(error))
    }
    const handleDropdownChange = (event) => {
        // Update the 'choice' state with the selected value
        setGrade(event.target.value);
    };
    return (

    <div>
            <form onSubmit={handleSubmit}>
                <label>
                    <p className="pStyle">Name</p>
                    <input
                        type='text'
                        onChange={(e) => setname(e.target.value)}
                        placeholder='Enter name'
                        className="inputStyle"
                    />
                </label>
                <label>
                    <p className="pStyle">Email</p>
                    <input
                        type='email'
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder='Enter email'
                        className="inputStyle"
                    />
                </label>
                <label>
                    <p className="Department">Department</p>
                    <input
                        type='Department'
                        onChange={(e) => setDept(e.target.value)}
                        placeholder='Enter Department'
                        className="inputStyle"
                    />
                </label>
                <label htmlFor="choiceDD">
                    <p>Input Grade</p>
                </label>
                <select name="choiceDD" id="choiceDD" onChange={handleDropdownChange} value = {grade}>
                    <option value="A">A</option>
                    <option value="B">B</option>
                    <option value="C">C</option>
                    <option value="D">D</option>
                    <option value="F">F</option>
                </select>
                <div>
                    <button className="buttonStyle" type="button" onClick={handleSubmit}>Submit</button>
                </div>
                <a href={"/Home"}>Back</a>
            </form>
        </div>
    )
}

export default StudentSignUp;
