"use client";

import { useRouter } from "next/navigation";

import PillButton from "./components/PillButton/PillButton";

export default function Home() {
  
  const router = useRouter()

  function movePage(path: string) {
    return () => {
      router.push(path)
    }
  }

  return (
    <div>
      <h1 style={{ textAlign: "center", fontSize:"400%" }}>HIGH AND ROW</h1>
      <div className="grid" style={{ textAlign: "center" }}>
        <div className="grid-clos-3">
          <PillButton label="GO GAME"/>
        </div>
        <div className="grid-clos-3">
          <PillButton label="SCORE" onClick={ movePage("/score-page") }/>
        </div>
      </div>
    </div>
  );
}
