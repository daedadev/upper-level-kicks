export default function LoadingResultItem() {
  var images = ["/DunkPlaceHolder.PNG", "/JordanPlaceHolder.PNG"];
  var image = images[Math.floor(Math.random() * images.length)];
  return (
    <div className="result-item-holder">
      <img className="loading-image" src={image} loading="lazy"></img>
      <h1>Loading</h1>
    </div>
  );
}
