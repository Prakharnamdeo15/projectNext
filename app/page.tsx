"use client";
import { useState } from "react";
import Image from "next/image";
import styles from "./page.module.css";

import KeyBpm from "./keyBpm/page";
import Cutter from "./cutter/page"
import Joiner from "./joiner/page";
import Karaoke from "./karaoke/page";
import Pitcher from "./pitcher/page";
import Recorder from "./recorder/page";
import Remover from "./remover/page";
import Splitter from "./splitter/page";

import Rem from "../public/share_off_42dp_E8EAED_FILL0_wght400_GRAD0_opsz40.svg";
import Split from "../public/arrow_split_40dp_E8EAED_FILL0_wght400_GRAD0_opsz40.svg";
import Pitch from "../public/graphic_eq_42dp_E8EAED_FILL0_wght400_GRAD0_opsz40.svg";
import Bpm from "../public/cadence_42dp_E8EAED_FILL0_wght400_GRAD0_opsz40.svg";
import Cut from "../public/content_cut_42dp_E8EAED_FILL0_wght400_GRAD0_opsz40.svg";
import Join from "../public/join_inner_42dp_E8EAED_FILL0_wght400_GRAD0_opsz40.svg";
import Record from "../public/mic_42dp_E8EAED_FILL0_wght400_GRAD0_opsz40.svg";
import Kara from "../public/album_42dp_E8EAED_FILL0_wght400_GRAD0_opsz40.svg";
import Menu from "../public/menu_42dp_E8EAED_FILL0_wght400_GRAD0_opsz40.svg";


export default function Home() {
const [menu,setMenu] = useState("show");
const[active,setActive] = useState("cutter");
const hideMenu =()=>{
if(menu==="show")setMenu("hide");
else{
  setMenu("show");
}
}

const handleRemover =()=>{
  setActive("remover");
  console.log(active)
}
const handleSplitter = ()=>{
  setActive("splitter");
  console.log(active)

}
const handlePitcher = ()=>{
  setActive("pitcher");
  console.log(active)

}
const handleBpm =()=>{
  setActive("bpm");
  console.log(active)

}
const handleCutter = ()=>{
  setActive("cutter");
  console.log(active)

}
const handleJoiner = ()=>{
  setActive("joiner");
  console.log(active)

}
const handleRecord = ()=>{
  setActive("record");
  console.log(active)

}
const handleKaraoke = ()=>{
  setActive("karaoke");
    console.log(active)

}


  return (
    <div>
    <Image className="menu" onClick={hideMenu} priority src={Menu} alt="F"/>
    <div className="container">
      <div className={menu==="show"?"leftBar":"leftBar_hid"} id="lbar">
        <div className="upper">
        <div className="ico" onClick={handleRemover}><Image className="img"  priority src={Rem} alt="F"/>Remover</div>
        <div className="ico" onClick={handleSplitter}><Image className="img"  priority src={Split} alt="F"/>Splitter</div>
        <div className="ico" onClick={handlePitcher}><Image className="img"  priority src={Pitch} alt="F"/>Pitcher</div>
        <div className="ico" onClick={handleBpm}><Image className="img"  priority src={Bpm} alt="F"/>Key BPM Finder</div>
        <div className="ico" onClick={handleCutter}><Image className="img"  priority src={Cut} alt="F"/>Cutter</div>
        <div className="ico" onClick={handleJoiner}><Image className="img"  priority src={Join} alt="F"/>Joiner</div>
        <div className="ico" onClick={handleRecord}><Image className="img"  priority src={Record} alt="F"/>Recorder</div>
        <div className="ico" onClick={handleKaraoke}><Image  className="img" priority src={Kara} alt="F"/>Karaoke</div>
        </div>
      </div>
      {/* <Recorder/> */}
      {active==="remover" && <Remover/>}
      {active ==="splitter"&&<Splitter/>}
      {active==="pitcher" &&<Pitcher/>}
      {active==="bpm" && <KeyBpm/>}
      {active ==="cutter" && <Cutter/>}
      {active ==="joiner" &&<Joiner/>}
      {active ==="record" && <Recorder/>}
      {active ==="karaoke"&&<Karaoke/>}
         </div>
         <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@40,400,0,0" /> 
      </div>
  );
}
