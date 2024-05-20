import { useState, useEffect } from "react";

export const EffectOnLoad = () => {
  const [myName, setMyName] = useState("David");
useEffect(() => {
	setMyName("Ziggy Stardust");
}, []);
useEffect(() => {
    // Imagina que esto fuese la respuesta de una API
    setTimeout(() => {
      setMyName("Ziggy Stardust");
    }, 15000);
  }, []);
  return (
    <>
      <h4>{myName}</h4>
      <input
        type="text"
        value={myName}
        onChange={(e) => setMyName(e.target.value)}
      />
      
    </>
  );
};