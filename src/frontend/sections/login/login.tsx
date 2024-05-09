import { useState } from 'react';
import { login, signup } from './actions';

export default function LoginPage() {
  const [formData, setFormData] = useState(new FormData());

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    formData.set(name, value);
    setFormData(formData);
  };

  const handleLogin = () => {
    login(formData);
  };

  const handleSignup = () => {
    signup(formData);
  };

  return (
    <form>
      <label htmlFor="email">Email:</label>
      <input 
        id="email" 
        name="email" 
        type="email" 
        required 
        onChange={handleInputChange} 
      />
      <label htmlFor="password">Password:</label>
      <input 
        id="password" 
        name="password" 
        type="password" 
        required 
        onChange={handleInputChange} 
      />
      <button type="button" onClick={handleLogin}>Log in</button>
      <button type="button" onClick={handleSignup}>Sign up</button>
    </form>
  );
}
