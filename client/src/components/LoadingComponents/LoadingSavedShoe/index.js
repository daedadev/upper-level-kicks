export default function LoadingSavedShoe() {
  var images = ["/DunkPlaceHolder.PNG", "/JordanPlaceHolder.PNG"];
  var image = images[Math.floor(Math.random() * images.length)];
  return (
    <div className="small-saved-shoe-holder">
      <div className="saved-top-holder">
        <img src={image}></img>
        <h1>Shoe Name</h1>
      </div>
      <div className="saved-bottom-holder">
        <h1>Shoe Brand</h1>
      </div>
    </div>
  );
}
