import { useState } from "react";

function HomePage() {
  const [likes, setLikes] = useState(0);

  function handleClick() {
    console.log(likes);
    setLikes(likes + 1);
  }

  return (
    <div>
      {/* ... */}
      <button onClick={handleClick}>Likes ({likes})</button>
    </div>
  );
}

export default HomePage;
