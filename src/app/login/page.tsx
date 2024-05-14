// frontend/pages/login.tsx
"use client"

import SigninForm from '../../frontend/sections/login/login'; 
import { LoginFormProps } from "@/types/types"

const Page = ({ email, password }: LoginFormProps) => {
  return <p><SigninForm email={email} password={ password} /></p>
}; 

export default Page; 