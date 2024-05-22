// pages/profile.tsx
import UserProfile from "@/frontend/sections/profile/profile";
import { redirect } from 'next/navigation'
import { createClient } from '@/utils/supabase/server'

export default async function UserProfilePage () {

  const supabase = createClient()

  const { data, error } = await supabase.auth.getUser()
  if (error || !data?.user) {
    redirect('/login')
  }

  const userId = data.user.id
  const userEmail = data.user.email || ""

  return (
    <div>
      <UserProfile userId={userId} userEmail={userEmail} />
      <p>Hello {data.user.email}</p>
    </div>
  );
};

