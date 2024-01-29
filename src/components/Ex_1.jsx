import "./Ex_1.css";
import {  useFormik } from "formik";
const Ex_1 = () => {
  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      password: "",
    },
    onSubmit:values=>{
     alert(JSON.stringify(values));
    }
  });
  return (
    <div>
      <div className="container">
        <h1>react formik</h1>
        <form action="" onSubmit={formik.handleSubmit}>
          <label htmlFor="name">Name</label>
          <input type="text" id="name" onChange={formik.handleChange} />
          <label htmlFor="email">Email</label>
          <input
            type="email"
            required
            onChange={formik.handleChange}
            id="email"
          />
          <label htmlFor="password">Password</label>
          <input
            type="text"
            required
            onChange={formik.handleChange}
            id="password"
          />
          <input type="submit" />
        </form>
      </div>
    </div>
  );
};

export default Ex_1;
