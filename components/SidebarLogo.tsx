"use client"
import { Twitter } from "lucide-react";
// import { useRouter } from "next/router"


export default function SidebarLogo() {
    // const router = useRouter();

    return (
        <div
            // onClick={ () => router.push('/') } 
            className="rounded-full h-14 w-14 p-4 flex items-center justify-center hover:bg-blue-300 hover:bg-opacity-10 cursor-pointer transition"
        >
            <Twitter className="" />
        </div>
    )
}