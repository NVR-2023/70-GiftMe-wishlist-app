// Page to create a new user
import { useState } from 'react'; 
import axios from 'axios'; 

// const API_BASE_URL = process.env.NODE_ENV === 'development' ? 'http://localhost:10000' : 'https://giftme-backend-1jl1.onrender.com';
const API_BASE_URL = 'https://giftme-backend-1jl1.onrender.com';

export default function CreateUserPage() {
  const [userData, setUserData] = useState({
    name: '',
    surname: '',
    avatarImage: '',
    email: '',
    password: '',
    birthDate: '',
    primaryAddress: '',
    secondaryAddress: ''
  }); 

  const createUser = async () => {
    try {
      const response = await axios.post(`${API_BASE_URL}/api/create-user`, userData)
      console.log('UserData:', userData )
      console.log('User created succesfully', response)
    }
    catch (error: any) {
        console.error('User creation error:', error);
    }
  }; 
  
  const handleFormSubmit = (event: React.FormEvent) => {
    event.preventDefault(); 
    createUser(); 
  }


  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    if (name === 'birthDate') {
      // Ensure that the date is in the correct format (e.g., YYYY-MM-DD)
      const formattedDate = value; 
      setUserData(prevState => ({
        ...prevState,
        [name]: formattedDate
      }));
    } else {
      setUserData(prevState => ({
        ...prevState,
        [name]: value
      }));
    }
  }; 

  return (
    <form onSubmit={handleFormSubmit}>
      <label htmlFor="name">Name:</label>
      <input 
        id="name" 
        name="name" 
        type="text"  
        value={userData.name} 
        onChange={handleInputChange} 
      />
      <label htmlFor="surname">Surname:</label>
      <input 
        id="surname" 
        name="surname" 
        type="text" 
        value={userData.surname} 
        onChange={handleInputChange} 
      />
      <label htmlFor="avatarImage">Avatar Image:</label>
      <input 
        id="avatarImage" 
        name="avatarImage" 
        type="text" 
        value={userData.avatarImage} 
        onChange={handleInputChange} 
      />
      <label htmlFor="email">Email:</label>
      <input 
        id="email" 
        name="email" 
        type="text" 
        required 
        value={userData.email} 
        onChange={handleInputChange} 
      />
      <label htmlFor="password">Password:</label>
      <input 
        id="password" 
        name="password" 
        type="text" 
        required 
        value={userData.password} 
        onChange={handleInputChange} 
      />
      <label htmlFor="birthDate">Birthdate:</label>
      <input 
        id="birthDate" 
        name="birthDate" 
        type="text" 
        value={userData.birthDate} 
        onChange={handleInputChange} 
      />
      <label htmlFor="primaryAddress">Primary Address:</label>
      <input 
        id="primaryAddress" 
        name="primaryAddress" 
        type="text" 
        value={userData.primaryAddress} 
        onChange={handleInputChange} 
      />
      <label htmlFor="secondaryAddress">Secondary Address:</label>
      <input 
        id="secondaryAddress" 
        name="secondaryAddress" 
        type="text" 
        value={userData.secondaryAddress} 
        onChange={handleInputChange} 
      />
      <button type="submit">Create User</button>
    </form>
  )
}