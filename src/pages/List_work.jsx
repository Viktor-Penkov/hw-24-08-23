import React, { useEffect,useState } from "react";
import fetchData from "../utils/list_data";
import ReactPlayer from "react-player";


const ListWork = (props) => {
    const[video, setVideo]=useState([]);
    
    useEffect(()=>{
        const fechVideoData =async()=>{
            try{const music_data=await fetchData();
                setVideo(music_data.mvids);




            }catch(error){
                console.log(error);
            }
        }
        fechVideoData()
    },[]);



    console.log(props);
    return (
        <div>
            {video.map((list)=>{
                return (
                <div>
                    <h1>{list.strTrack}</h1>
                    {/* <p>{list.strTrackThumb}</p> */}
                    <img src={list.strTrackThumb} alt="" />
                    <ReactPlayer url={list.strMusicVid} playing={false} controls={false}/>
                </div>);
            })}
        </div>
    );
}

export default ListWork;
