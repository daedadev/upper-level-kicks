export default function Sneaker(theSneaker, key) {
  console.log(theSneaker);
  console.log(theSneaker.description);
  //var lowestResellPrice = sneaker.lowestResellPrice;
  var brand = theSneaker.brand;
  var silhouette = theSneaker.silhouette;
  var styleID = key;
  var retailPrice = theSneaker.retailPrice;
  var thumbnail = theSneaker.thumbnail;
  var releaseDate = theSneaker.releaseDate;
  var description = theSneaker.description;
  var resellLinks = theSneaker.resellLinks;

  return (
    <li id={styleID}>
      <h1>{theSneaker.shoeName}</h1>
      <h1>{brand}</h1>
    </li>
  );
}
