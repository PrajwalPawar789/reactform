import { useState } from "react";

function App() {
  const [formData, setFormData] = useState({
    firstname: "",
    lastname: "",
    email: "",
    comment: "",
    isVisible: false,
    mode: "",
    favcar: "",
  });

  function changeHandler(event) {
    setFormData((prevFormData) => {
      const { name, value, type, checked } = event.target;
      return {
        ...prevFormData,
        [name]: type === "checkbox" ? checked : value,
      };
    });
  }

  function submitHandler(event) {
    event.preventDefault();
    console.log("Printing all form data...");
    console.log(formData);
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-200">
      <form onSubmit={submitHandler} className="bg-white p-8 rounded-md shadow-lg">
        <h2 className="text-2xl font-bold mb-6 text-gray-800">Feedback Form</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="mb-4">
            <label htmlFor="firstname" className="block text-sm font-medium text-gray-600">
              First Name
            </label>
            <input
              type="text"
              placeholder="First Name"
              onChange={changeHandler}
              name="firstname"
              value={formData.firstname}
              className="mt-1 p-2 w-full border rounded-md focus:outline-none focus:ring focus:border-blue-300"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="lastname" className="block text-sm font-medium text-gray-600">
              Last Name
            </label>
            <input
              type="text"
              placeholder="Last Name"
              onChange={changeHandler}
              name="lastname"
              value={formData.lastname}
              className="mt-1 p-2 w-full border rounded-md focus:outline-none focus:ring focus:border-blue-300"
            />
          </div>
        </div>
        <div className="mb-4">
          <label htmlFor="email" className="block text-sm font-medium text-gray-600">
            Email
          </label>
          <input
            type="email"
            placeholder="Email"
            onChange={changeHandler}
            name="email"
            value={formData.email}
            className="mt-1 p-2 w-full border rounded-md focus:outline-none focus:ring focus:border-blue-300"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="comment" className="block text-sm font-medium text-gray-600">
            Comment
          </label>
          <textarea
            placeholder="Enter your comment"
            onChange={changeHandler}
            name="comment"
            value={formData.comment}
            className="mt-1 p-2 w-full border rounded-md focus:outline-none focus:ring focus:border-blue-300"
          ></textarea>
        </div>
        <div className="mb-4">
          <input
            type="checkbox"
            onChange={changeHandler}
            name="isVisible"
            id="isVisible"
            checked={formData.isVisible}
          />
          <label htmlFor="isVisible" className="ml-2 text-sm font-medium text-gray-600">
            Am I visible?
          </label>
        </div>
        <div className="mb-4">
          <fieldset>
            <legend className="text-sm font-medium text-gray-600">Mode:</legend>
            <label className="block text-sm">
              <input
                type="radio"
                onChange={changeHandler}
                name="mode"
                value="online-mode"
                checked={formData.mode === "online-mode"}
              />
              <span className="ml-2">Online Mode</span>
            </label>
            <label className="block text-sm">
              <input
                type="radio"
                onChange={changeHandler}
                name="mode"
                value="offline-mode"
                checked={formData.mode === "offline-mode"}
              />
              <span className="ml-2">Offline Mode</span>
            </label>
          </fieldset>
        </div>
        <div className="mb-4">
          <label htmlFor="favcar" className="block text-sm font-medium text-gray-600">
            Favorite Car:
          </label>
          <select
            onChange={changeHandler}
            name="favcar"
            value={formData.favcar}
            id="favcar"
            className="mt-1 p-2 w-full border rounded-md focus:outline-none focus:ring focus:border-blue-300"
          >
            <option value="scarpio">Scarpio</option>
            <option value="thar">Thar</option>
            <option value="defender">Defender</option>
            <option value="lambo">Lambo</option>
            <option value="ferari">Ferari</option>
            <option value="bmw">Bmw</option>
          </select>
        </div>
        <button className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-700 focus:outline-none focus:ring focus:border-blue-300">
          Submit
        </button>
      </form>
    </div>
  );
}

export default App;
