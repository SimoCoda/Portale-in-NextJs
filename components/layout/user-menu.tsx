"use client"

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { createClient } from "@/utils/supabase/client";
import { User } from "@supabase/supabase-js";
import Image from "next/image";
import { useRouter } from "next/navigation";

interface UserMenuProps{
  user:User;
}

const UserMenu = ({user}:UserMenuProps) => {
  const router = useRouter();
  const logout = async () => {
    const supabaseClient = createClient();
    const { error } = await supabaseClient.auth.signOut()
    if(!error){
      router.refresh();
    }
  }
  
  return (
    <div>
      <DropdownMenu>
        <DropdownMenuTrigger><Image src="/avatar.png" width={50} height={70} className="rounded-full" alt="" /></DropdownMenuTrigger>
        <DropdownMenuContent>
          <DropdownMenuLabel>{user.email}</DropdownMenuLabel>
          <DropdownMenuSeparator />
          <DropdownMenuItem>Courses</DropdownMenuItem>
          <DropdownMenuItem onClick={logout}>Logout</DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
};

export default UserMenu;

