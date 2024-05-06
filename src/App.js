
import './App.css';
import YouTubeBody from './YouTubeBody';
import YouTubeHeader from './YouTubeHeader';

function App() {
  return (
    <div className="App">

       <div>
            <YouTubeHeader/>
       </div>

    <div style={{
       display: "flex",
       flexWrap: "wrap",
       flexDirection: "row"
      
      
      }}>
      
   <YouTubeBody
    Vurl="https://i.ytimg.com/an_webp/GySi7CuOZdk/mqdefault_6s.webp?du=3000&sqp=CKKU0LEG&rs=AOn4CLCf7ySuKXaX9RtTQiXg1Tc7j0LzJw"
     Vtitle="Free Training :: Learn Linux with Shell Scripting | Mr. Ashok"
     Vspan="1.6K views 12 hours ago"/>
   <YouTubeBody
   Vurl="https://i.ytimg.com/an_webp/JMlQaTXvw5o/mqdefault_6s.webp?du=3000&sqp=CO6n0LEG&rs=AOn4CLA0hkam-c0MD6pwuyLlH0mxDS9fiQ"
   Vtitle="How to connect with AWS EC2 Instance using Git Bash | SSH Client"
   Vspan="410 views
   1 day ago"/>
   <YouTubeBody
   Vurl="https://i.ytimg.com/vi/icsxikOzfVI/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLAm7h6KHrTloxDzWsToCIXglm_o0w"
   Vtitle="DevOps with AWS Cloud | Session - 03 | @ashokit"
   Vspan="793 views
   8 days ago"/>
   <YouTubeBody
   Vurl="https://i.ytimg.com/an_webp/Y42L1i7V0-g/mqdefault_6s.webp?du=3000&sqp=CNDd0LEG&rs=AOn4CLD8qfBThwinkN0sYE0BjJXj-LMTXg"
   Vtitle="CSS Crash Course : Learn CSS in 100 Minutes"
   Vspan="487 views
   9 days ago"/>
   
   
   <YouTubeBody
   Vurl="https://i.ytimg.com/an_webp/6YSz1StukVM/mqdefault_6s.webp?du=3000&sqp=CLa30LEG&rs=AOn4CLBYhu9jbFa8ipCZmflPxCPSLWdrPw"
   Vtitle="HTML Crash Course : Learn Web Development in 60 Minutes"
   Vspan="1.4K views
   2 weeks ago"/>
   <YouTubeBody
   Vurl="https://i.ytimg.com/vi/AHTsJ2UtLlo/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLAMQwrn_u8AOAag-bTLXzaoFrQp3A"
   Vtitle="Announcement : Java Design Patterns Course Launch"
   Vspan="1.5K views
   2 weeks ago"/>
   <YouTubeBody
   Vurl="https://i.ytimg.com/vi/iw_2j_qbTrk/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLBYu4BI6_9RxQa9YPJcxud7LFWPdw"
   Vtitle="Java Constructors Tutorial with Examples | Java Programming"
   Vspan="621 views
   2 weeks ago"/>
   <YouTubeBody
   Vurl="https://i.ytimg.com/an_webp/-t8ebxZhOPw/mqdefault_6s.webp?du=3000&sqp=CLDB0LEG&rs=AOn4CLBCSoZiALuP0YpaPEewzzc7_ihtVA"
   Vtitle="Learn React JS with Real Time Project Development @ashokit"
   Vspan="941 views
   3 weeks ago"/>
   
   </div>
    </div>
  );
}

export default App;
