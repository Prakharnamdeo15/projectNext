// import "./cutter.css";
// import { useEffect, useRef, useState } from 'react';
// import WaveSurfer from 'wavesurfer.js';


// export default function cutter(){
//     const [audioFile, setAudioFile] = useState<File | null>(null);
//     const waveformRef = useRef<HTMLDivElement | null>(null);
//     const wavesurferRef = useRef<WaveSurfer | null>(null);
//     useEffect(() => {
//         if (waveformRef.current) {
//           wavesurferRef.current = WaveSurfer.create({
//             container: waveformRef.current,
//             waveColor: '#ddd',
//             progressColor: '#007bff',
//             barWidth: 2,
//             height: 100,
//           });
//         }
    
//         return () => {
//           if (wavesurferRef.current) {
//             wavesurferRef.current.destroy();
//           }
//         };
//       }, []);

//       const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
//         const file = event.target.files?.[0] ?? null; // Default to null if file is undefined
//         setAudioFile(file);
      
//         if (file) {
//           const objectUrl = URL.createObjectURL(file);
//           wavesurferRef.current?.load(objectUrl);
//         }
//       };


//     return(
//         <div className="cover">
            
//             <div className="cutter_container">
//                 <div className="men">
//                     <div className="menItems">HOW IT WORKS</div>
//                     <div className="menItems">JOINER</div>
//                 </div>
//                 <div className="heading">Audio Cutter</div>
//                 <h3 className="des">Free editor to trim and cut any audio file online</h3>
//                 <input  type="file" accept="audio/*" onChange={handleFileChange} id="inputButton" hidden/>
//                 <label className="label" htmlFor="inputButton">Browse my files</label>
//             </div>
//             <div ref={waveformRef} style={{ width: '100%', marginTop: '20px' }} />
            
//     </div>
//     )
// }
"use client"
import "./cutter.css";
import { useEffect, useRef, useState } from 'react';
import WaveSurfer from 'wavesurfer.js';

export default function Cutter() {
    const [audioFile, setAudioFile] = useState<File | null>(null);
    const waveformRef = useRef<HTMLDivElement | null>(null);
    const wavesurferRef = useRef<WaveSurfer | null>(null);

    // Initialize Wavesurfer
    useEffect(() => {
        if (waveformRef.current) {
            wavesurferRef.current = WaveSurfer.create({
                container: waveformRef.current,
                waveColor: '#ddd',
                progressColor: '#007bff',
                barWidth: 2,
                height: 100,
            });
        }

        return () => {
            if (wavesurferRef.current) {
                wavesurferRef.current.destroy();
            }
        };
    }, []);

    // Handle file change
    const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const file = event.target.files?.[0] ?? null; // Default to null if file is undefined
        setAudioFile(file);
    
        if (file) {
            const objectUrl = URL.createObjectURL(file);
            console.log("Loading audio file:", objectUrl); // Log the URL for debugging
            wavesurferRef.current?.load(objectUrl);
        }
    };

    return (
        <div className="cover">
            {audioFile === null ? (
                <div className="cutter_container">
                    <div className="men">
                        <div className="menItems">HOW IT WORKS</div>
                        <div className="menItems">JOINER</div>
                    </div>
                    <div className="heading">Audio Cutter</div>
                    <h3 className="des">Free editor to trim and cut any audio file online</h3>
                    <input type="file" accept="audio/*" onChange={handleFileChange} id="inputButton" hidden />
                    <label className="label" htmlFor="inputButton">Browse my files</label>
                </div>
            ) : (
                <div>
                    {/* This will show the waveform container when an audio file is uploaded */}
                    <div ref={waveformRef} style={{ width: '100%', marginTop: '20px' }} />
                </div>
            )}
        </div>
    );
}
