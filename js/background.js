const images=["0.jpeg","1.jpeg","2.jpeg"];//사진 늘릴때마다 const images=["0.jpeg","1.jpeg","2.jpeg"];처럼

const choosenImage=images[Math.floor(Math.random()*images.length)];
const body=document.querySelector("body");

const bgImage=document.createElement("img");

bgImage.src=`img/${choosenImage}`;

document.body.prepend(bgImage);

bgImage.className="bgimg";
