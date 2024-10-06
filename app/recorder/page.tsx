import "./recorder.css"
import Image from "next/image"
import norec from "../../public/mic_off_42dp_E8EAED_FILL0_wght400_GRAD0_opsz40.svg";
export default function recorder(){
    return(
        <div className="cover">
             <div className="cutter_container">
                <div className="men">
                    <Image  className="noMic"  src={norec} alt="noMIc"/>
                </div>
                <div className="heading">Access Denied</div>
                <h3 className="des">Please allow browser to access your microphone. You can do this in browser settings or in the address bar.</h3>
            </div>
    </div>
    )
}