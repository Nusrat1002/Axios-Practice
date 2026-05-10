import { useState } from "react";

const App = () => {
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
    phone: "",
  });

  const handleChange =(e)=>{
    const {name, value} =e.target;
    setForm({ ...form, [name]: value});
  };

  return (
    <form action="" className="flex flex-col gap-4 m-5">
      <input
        className="border-2 border-black p-5"
        placeholder="First Name"
        type="text"
        name="firstName"
        onChange={(e)=> handleChange(e)}
        value={form.firstName}
      />
      <input
        className="border-2 border-black p-5"
        placeholder="Last Name"
        type="text"
        name="lastName"
        onChange={(e)=> handleChange(e)}
        value={form.lastName}
      />
      <input
        className="border-2 border-black p-5"
        placeholder="Email"
        type="email"
        name="email"
        onChange={(e)=> handleChange(e)}
        value={form.email}
      />
      <input
        className="border-2 border-black p-5"
        placeholder="Password"
        type="password"
        name="password"
        onChange={(e)=> handleChange(e)}
        value={form.password}
      />
      <input
        className="border-2 border-black p-5"
        placeholder="Confirm Password"
        type="password"
        name="confirmPassword"
        onChange={(e)=> handleChange(e)}
        value={form.confirmPassword}
      />
      <input
        className="border-2 border-black p-5"
        placeholder="Phone"
        type="tel"
        name="phone"
        onChange={(e)=> handleChange(e)}
        value={form.phone}
      />
      <button>Submit</button>
    </form>
  );
};

export default App;
