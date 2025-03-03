import React from "react";

const Card = () => {
  
  const Songs = [
    {
      "song_name": "Blind Lights",
      "artist_name": "The Weeknd",
      "description": "A retro-inspired synth-pop track about longing and love. Its upbeat tempo and catchy melody make it a global hit."
    },
    {
      "song_name": "Shape of You",
      "artist_name": "Ed Sheeran",
      "description": "A pop hit with a tropical house beat, centered around romance and attraction. One of the best-selling digital songs ever."
    },
    {
      "song_name": "Levitating",
      "artist_name": "Dua Lipa",
      "description": "A funky disco-pop song with futuristic vibes. It’s about feeling euphoric and unstoppable in love and fun ."
    },
    {
      "song_name": "Believer",
      "artist_name": "Imagine Dragons",
      "description": "A powerful rock anthem about overcoming pain and struggles. Its intense beats and lyrics make it an inspiring track."
    },
    {
      "song_name": "Stay",
      "artist_name": "Justin Bieber",
      "description": "A heartfelt pop song about regret and the need for love. Its energetic beats and emotional lyrics make it a fan favorite."
    }
  ]

  const handelclickedfunc = () =>alert('chal raha hai')

  return (
    <div className="w-full h-screen bg-zinc-200 flex items-center justify-center gap-10">
     {Songs.map((elem, idx)=>( 
      <div key={idx} className="w-48 px-3 py-4 bg-white rounded-md">
        <h2 className="font-bold text-2xl">{elem.song_name}</h2>
        <h4 className="font-semibold mt-1">{elem.artist_name}</h4>
        <p className="mt-1 text-sm">{elem.description}</p>
        <button onClick={handelclickedfunc} 
        className="px-2 py-1 bg-blue-400 rounded-md mt-3 text-white active:scale-95">download now</button>
      </div>))}
    </div>
  );
};

export default Card;
