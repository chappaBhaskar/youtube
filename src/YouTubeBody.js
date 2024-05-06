function YouTubeBody(props){
    return(
   <div>
    <img 
    src={props.Vurl} 
    alt="ashokIt"></img>
    <div>
        <p>
        {props.Vtitle}
        </p>
        <span>{props.Vspan}</span>
    </div>


   </div>
    )
}

export default YouTubeBody