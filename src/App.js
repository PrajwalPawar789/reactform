import "./App.css";
import { useState } from "react";

function App() {
  // const [firstname, setFirstname] = useState("");
  // const [lastname, setLastname] = useState("");

  // console.log('firstname', firstname);
  // console.log('lastname', lastname);

  // function changelastNameHandler(event) {
  //   // console.log(event.target.value);
  //   setLastname(event.target.value);
  // }

  // function changefirstNameHandler(event){
  //   // console.log(event.target.value);
  //   setFirstname(event.target.value);
  // }

  const [formData, setFormData] = useState({
    firstname: "",
    lastname: "",
    email: "",
    comment: "",
    isVisible: false,
    mode: "",
    favcar: "",
  });
  // console.log(formData);

  function changeHandler(event) {
    setFormData((prevFormData) => {
      const { name, value, type, checked } = event.target;
      return {
        ...prevFormData,
        [name]: type === "checkbox" ? checked : value,
        // [event.target.name]: event.target.value
      }; 
    });
  }

  function submitHandler(event) {
    event.preventDefault();
    //printing
    console.log("Printing all form data...");
    console.log(formData);
  }

  return (
    <div className="App">
      <form onSubmit={submitHandler}>
        <input
          type="text"
          placeholder="first name"
          onChange={changeHandler}
          name="firstname"
          value={formData.firstname}
        ></input>
        <br></br>
        <br></br>
        <input
          type="text"
          placeholder="last name"
          onChange={changeHandler}
          name="lastname"
          value={formData.lastname}
        ></input>
        <br></br>
        <input
          type="email"
          placeholder="email"
          onChange={changeHandler}
          name="email"
          value={formData.email}
        ></input>
        <br></br>
        <br></br>
        <textarea
          placeholder="enter your comment"
          onChange={changeHandler}
          name="comment"
          value={formData.comment}
        ></textarea>
        <br />
        <br />
        <input
          type="checkbox"
          onChange={changeHandler}
          name="isVisible"
          id="isVisible"
          checked={formData.isVisible}
        />
        <label htmlFor="isVisible">Am I visible ?</label>
        <br />
        <br />
        <br />

        <fieldset>
          <legend>Mode:</legend>
          <input
            type="radio"
            onChange={changeHandler}
            name="mode"
            value="online-mode"
            id="online-mode"
            checked={formData.mode === "online-mode"}
          />
          <label htmlFor="online-mode">Online Mode</label>

          <input
            type="radio"
            onChange={changeHandler}
            name="mode"
            value="Offline-mode"
            id="Offline-mode"
            chekced={formData.mode === "Offline-mode"}
          />
          <label htmlFor="Offline-mode">Offline Mode</label>
        </fieldset>
        <label htmlFor="favcar">Tell me your favcar</label>
        <select
          onChange={changeHandler}
          name="favcar"
          value={formData.favcar}
          id="favcar"
        >
          
          <option value="scarpio">Scarpio</option>
          <option value="Thar">Thar</option>
          <option value="Defender">Defender</option>
          <option value="Lambo">Lambo</option>
          <option value="Ferari">Ferari</option>
          <option value="Bmw">Bmw</option>
        </select>
        <button>
          submit
        </button>

      </form>
    </div>
  );
}

export default App;
