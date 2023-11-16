import React, {useState} from 'react';
function StudentSignUp(){
    const [title, setTitle] = useState("");
    const [genres, setgenres] = useState("");
    const [movieYear, setmovieYear] = useState("");
    const [rottenTomatoesScore, setrottenTomatoesScore] = useState("");
    const [leadStudio, setleadStudio] = useState("");
    const [errorMessage, setErrorMessage] = React.useState("");
    const handleSubmit = () => {//event was removed from parentheses
        console.log(title + " " + genres + " " + movieYear + " " + rottenTomatoesScore + " " + leadStudio + " " + errorMessage)
        fetch (`http://localhost:8080/movie/create`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded'
            },
            body: {title, genres, movieYear, rottenTomatoesScore, leadStudio},
            mode: 'no-cors',
        })
            .then((response ) => {
                   // window.location.pathname = "/Home"
            })
            .catch(error => console.log(error))
    }
    return (

    <div>
            <form onSubmit={handleSubmit}>
                <label>
                    <p className="pStyle">Title</p>
                    <input
                        type='text'
                        onChange={(e) => setTitle(e.target.value)}
                        placeholder='Enter Title'
                        className="inputStyle"
                    />
                </label>
                <label>
                    <p className="pStyle">genres</p>
                    <input
                        type='text'
                        onChange={(e) => setgenres(e.target.value)}
                        placeholder='Enter genres'
                        className="inputStyle"
                    />
                </label>
                <label>
                    <p className="pStyle">movieYear</p>
                    <input
                        type='text'
                        onChange={(e) => setmovieYear(e.target.value)}
                        placeholder='Enter movieYear'
                        className="inputStyle"
                    />
                </label>
                <label>
                    <p className="pStyle">rottenTomatoesScore</p>
                    <input
                        type='text'
                        onChange={(e) => setrottenTomatoesScore(e.target.value)}
                        placeholder='Enter rottenTomatoesScore'
                        className="inputStyle"
                    />
                </label>
                <label>
                    <p className="pStyle">leadStudio</p>
                    <input
                        type='text'
                        onChange={(e) => setleadStudio(e.target.value)}
                        placeholder='Enter leadStudio'
                        className="inputStyle"
                    />
                </label>
                <div>
                    <button className="buttonStyle" type="button" onClick={handleSubmit}>Submit</button>
                </div>
                <a href={"/Home"}>Back</a>
                {errorMessage && <div className="error"> {errorMessage} </div>}
            </form>
        </div>
    )
}

export default StudentSignUp;
