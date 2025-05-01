import React, { useState } from 'react';
import  "../css/CreateAccount.css"

function CreateAccount() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
  });
  const [agency, setAgency] = useState("yes");
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Account Created:', formData);
    alert(`Account created for ${formData.name}`);
    // You could send this data to a backend API here
  };

  return (
    <div style={{ maxWidth: '400px', margin: '0 auto' }}>
      <h2> Create your Pop-x Account</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Full Name:</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>
        <div style={{ marginTop: '10px' }}>
          <label>Phone Number:</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>  
      
        <div style={{ marginTop: '10px' }}>
          <label>Password:</label>
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            required
          />
        </div>
        <div style={{ marginTop: '10px' }}>
          <label>Company Name:</label>
          <input
            type="string"
            name="company name"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>

        <label for="Agency">Are you an Agency?*</label>
                    <input
                        type="radio"
                        name="agency"
                        value="yes"
                        id="yes"
                        checked={agency === "yes"}
                        onChange={(e) =>
                            setAgency(e.target.value)
                        }
                    />
                    yes
                    <input
                        type="radio"
                        name="agency"
                        value="no"
                        id="no"
                        checked={agency === "no"}
                        onChange={(e) =>
                            setAgency(e.target.value)
                        }
                    />
                    no
                   

        <button type="submit" style={{ marginTop: '20px' }}>Create Account</button>
      </form>
    </div>
  );
}

export default CreateAccount;
