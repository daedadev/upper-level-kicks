export default function LoadingResultItem() {
  const stockImage =
    "https://stockx-assets.imgix.net/media/Product-Placeholder-Default-20210415.jpg?fit=fill&bg=FFFFFF&auto=compress&q=90&dpr=1&trim=color&w=480&h=320&fm=avif";

  return (
    <div className="result-item-holder">
      <img src={stockImage} loading="lazy"></img>
      <h1>Loading</h1>
    </div>
  );
}
