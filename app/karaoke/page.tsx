import "./karaoke.css"
export default function karaoke(){
    return (
        <div className="cover">
             <div className="cutter_container">
                <div className="heading">Recording Voice Over a Song</div>
                <h3 className="des">Sing & record, tune voice and save complete song. Choose karaoke track you want to sing with</h3>
                <input  type="file" accept="audio/*" id="inputButton" hidden/>
                <label className="label" htmlFor="inputButton">Browse my files</label>
            </div>
    </div>
    )
}