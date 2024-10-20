'use client'
import Dashboard from "../components/Dashboard"
import { useEffect, useState } from "react";




export default function Home() {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);
  return (
  <>
  {!isClient ? (
        <div className="flex justify-center py-10">
          <div className="spinner-border text-primary" role="status">
            <span className="sr-only">Loading...</span>
          </div>
        </div>
      ) : (
        <main className="overflow-hidden">
         <Dashboard/>
        </main>
        
      )}
  </>
  );
}
