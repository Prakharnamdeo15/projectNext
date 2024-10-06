import "./pitcher.css"
export default function pitcher(){
    return(
        <div className="cover">
             <div className="cutter_container">
                <div className="men">
                    <div className="menItems">HOW IT WORKS</div>
                </div>
                <div className="heading">Audio Speed and Pitch Changer</div>
                <h3 className="des">Changes pitch and tempo of the song by adjusting musical key and bpm sliders</h3>
                <input  type="file" accept="audio/*" id="inputButton" hidden/>
                <label className="label" htmlFor="inputButton">Browse my files</label>
            </div>
    </div>
    )
}