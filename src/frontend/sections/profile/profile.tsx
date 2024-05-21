'use client'

import { useState, FC } from 'react';
import axios from 'axios';
import { UserData, CreateProfileFormProps } from '../../../types/types'

const API_BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL

const UserProfile: FC<CreateProfileFormProps> = ({ userId, userEmail }) => {

  const [profile, setProfile] = useState<UserData>({
    name: '',
    surname: '',
    avatarImage: '',
    email: userEmail,
    birthDate: '',
    primaryAddress: '',
    secondaryAddress: '',
  });

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setProfile((prevProfile) => ({ ...prevProfile, [name]: value }));
  };

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    try {
      await axios.patch(`${API_BASE_URL}/api/users/create-profile/${userId}`, profile);
      alert('Profile updated successfully');
    } catch (error) {
      console.error('Error updating profile:', error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Email:</label>
        <input type="email" name="email" value={profile.email} readOnly />
      </div>
      <div>
        <label>Name:</label>
        <input type="text" name="name" value={profile.name} onChange={handleChange} />
      </div>
      <div>
        <label>Surname:</label>
        <input type="text" name="surname" value={profile.surname} onChange={handleChange} />
      </div>
      <div>
        <label>Avatar Image URL:</label>
        <input type="text" name="avatarImage" value={profile.avatarImage} onChange={handleChange} />
      </div>
      <div>
        <label>Birth Date:</label>
        <input type="date" name="birthDate" value={profile.birthDate ? profile.birthDate.split('T')[0] : ''} onChange={handleChange} />
      </div>
      <div>
        <label>Primary Address:</label>
        <input type="text" name="primaryAddress" value={profile.primaryAddress} onChange={handleChange} />
      </div>
      <div>
        <label>Secondary Address:</label>
        <input type="text" name="secondaryAddress" value={profile.secondaryAddress} onChange={handleChange} />
      </div>
      <button type="submit">Update Profile</button>
    </form>
  );
};

export default UserProfile;
