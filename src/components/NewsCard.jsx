export default function NewsCard({ title, image, date }) {
  return (
    <div className="card bg-base-100 shadow-xl">
      <figure><img src={image} alt={title} /></figure>
      <div className="card-body">
        <h2 className="card-title">{title}</h2>
        <p className="text-sm text-gray-500">{date}</p>
        <div className="card-actions justify-end">
          <button className="btn btn-secondary">Leer más</button>
        </div>
      </div>
    </div>
  );
}
