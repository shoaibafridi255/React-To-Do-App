// import { useState } from "react";

// const Form = () => {
//   const [formData, setFormData] = useState({
//     name: "",
//     email: "",
//     password: "",
//   });

//   const [submittedData, setSubmittedData] = useState(null);

//   const handelOnchange = (e) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   const handelSubmit = (e) => {
//     e.preventDefault();

//     if (
//       formData.name === "" ||
//       formData.email === "" ||
//       formData.password === ""
//     ) {
//       alert("Please fill the Form Correctly");
//       return;
//     }

//     setSubmittedData(formData);
//     setFormData({
//       name: "",
//       email: "",
//       password: "",
//     });
//     console.log("Submitted Data :", formData);
//   };

//   return (
//     <>
//       <div classNameName="container">
//         <div classNameName="row">
//           <h1 classNameName="text-center">Form handeling Using useReducer</h1>
//           <div classNameName="col-3 mt-5">
//             <form onSubmit={handelSubmit}>
//               <input
//                 type="text"
//                 classNameName={`form-control`}
//                 placeholder="Enter your Name"
//                 name="name"
//                 value={formData.name}
//                 onChange={handelOnchange}
//               />
//               <br />
//               <input
//                 type="email"
//                 classNameName={`form-control `}
//                 placeholder="Enter your email"
//                 name="email"
//                 value={formData.email}
//                 onChange={handelOnchange}
//               />
//               <br />
//               <input
//                 type="password"
//                 classNameName={`form-control `}
//                 placeholder="Enter your password"
//                 name="password"
//                 value={formData.password}
//                 onChange={handelOnchange}
//               />
//               <br />

//               <button classNameName="btn btn-success"> Submit</button>
//             </form>
//           </div>
//           {submittedData ? (
//             <div classNameName="col-5 mt-5">
//               <h3> Name : {submittedData.name} </h3>
//               <h3> Email : {submittedData.email} </h3>
//               <h3> Password :{submittedData.password} </h3>
//             </div>
//           ) : null}
//         </div>
//       </div>
//     </>
//   );
// };

// export default Form;

import { useState } from "react";

const Form = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const [submittedData, setSubmittedData] = useState(null);
  const [errors, setErrors] = useState({
    name: false,
    email: false,
    password: false,
  });

  const handelOnchange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });

    // Remove error border on typing
    setErrors({ ...errors, [name]: false });
  };

  const handelSubmit = (e) => {
    e.preventDefault();

    const newErrors = {
      name: formData.name === "",
      email: formData.email === "",
      password: formData.password === "",
    };

    setErrors(newErrors);

    const isError = Object.values(newErrors).some((error) => error);
    if (isError) {
      alert("Please fill the form correctly");
      return;
    }

    setSubmittedData(formData);
    setFormData({
      name: "",
      email: "",
      password: "",
    });
    setErrors({
      name: false,
      email: false,
      password: false,
    });

    console.log("Submitted Data:", formData);
  };

  return (
    <div classNameName="container">
      <div classNameName="row">
        <h1 classNameName="text-center">Form handling using useState</h1>
        <div classNameName="col-3 mt-5">
          <form onSubmit={handelSubmit}>
            <input
              type="text"
              classNameName={`form-control ${
                errors.name ? "border border-danger" : ""
              }`}
              placeholder="Enter your Name"
              name="name"
              value={formData.name}
              onChange={handelOnchange}
            />
            <br />
            <input
              type="email"
              classNameName={`form-control ${
                errors.email ? "border border-danger" : ""
              }`}
              placeholder="Enter your email"
              name="email"
              value={formData.email}
              onChange={handelOnchange}
            />
            <br />
            <input
              type="password"
              classNameName={`form-control ${
                errors.password ? "border border-danger" : ""
              }`}
              placeholder="Enter your password"
              name="password"
              value={formData.password}
              onChange={handelOnchange}
            />
            <br />

            <button classNameName="btn btn-success">Submit</button>
          </form>
        </div>

        {submittedData && (
          <div classNameName="col-5 mt-5">
            <h3>Name: {submittedData.name}</h3>
            <h3>Email: {submittedData.email}</h3>
            <h3>Password: {submittedData.password}</h3>
          </div>
        )}
      </div>
    </div>
  );
};

export default Form;
