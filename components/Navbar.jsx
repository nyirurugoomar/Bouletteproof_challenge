import React from "react";
import { signOut, useSession } from "next-auth/react";


export default function Navbar() {
  const {data:session} = useSession()
  return (
    <>
      <nav className="absolute top-0 left-0 w-full z-10 bg-transparent md:flex-row md:flex-nowrap md:justify-start flex items-center p-4">
        <div className="w-full mx-autp items-center flex justify-between md:flex-nowrap flex-wrap md:px-10 px-4">
          
          <form className="md:flex hidden flex-row flex-wrap items-center lg:ml-auto mr-3">
            <div className="relative flex w-full flex-wrap items-stretch">
              <span className="z-10 h-full leading-snug font-normal absolute text-center text-blueGray-300 absolute bg-transparent rounded text-base items-center justify-center w-8 pl-3 py-3">
                <i className="fas fa-search"></i>
                
              </span>  
            </div>
          </form>
        </div>
      </nav>
      
      <div className="flex items-center justify-between p-4 bg-bluegray-800 text-white">
        <div className="flex items-center">
          
        </div>
        <div className="flex items-center">
        <div className="flex-shrink-0">
            
            <img className="h-12 w-12 rounded-full   bg-white" src={session?.user.image} alt="Avatar" />
          </div>
          <div className="ml-4">
            <div className="text-sm font-bold">Welcame back</div>
            <div className="text-lg font-bold">{session?.user.name}</div>
            
          </div>
        </div>
      </div>
    </>
  );
}
