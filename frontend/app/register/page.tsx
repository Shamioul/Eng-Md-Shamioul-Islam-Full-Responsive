"use client";

import { useState } from "react";
import Lamp from "./Lamp";
import LoginForm from "./LoginForm";
import Background from "./Background";
import Particles from "./Particles";

export default function Page() {

  const [lampOn,setLampOn] = useState(false);

  return (

    <main
      className={`
      relative
      min-h-screen
      overflow-hidden
      flex
      items-center
      justify-center
      transition-all
      duration-700
      ${lampOn ? "bg-neutral-900":"bg-black"}
      `}
    >

      <Background isOn={lampOn}/>

      <Particles active={lampOn}/>
      <div
      className="
      relative
      z-20
      flex
      flex-col
      lg:flex-row
      items-center
      justify-center
      gap-20
      p-5
      "
      >

        <Lamp
        isOn={lampOn}
        onToggle={()=>setLampOn(!lampOn)}
        />


        <LoginForm
        isOpen={lampOn}
        />

      </div>


    </main>

  )
}