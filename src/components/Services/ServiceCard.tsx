interface IServiceCardProps {
  icon: string;
  title: string;
}

export default function ServiceCard({ icon, title }: IServiceCardProps) {
  return (
    <div className="bg-white p-8 rounded-lg shadow-md text-center">
      <div className="bg-blue-50 w-20 h-20 mx-auto rounded-lg flex items-center justify-center mb-6">
        <img src={icon} alt={title} className="w-12 h-12" />
      </div>
      <h3 className="text-lg font-semibold mb-4">{title}</h3>
      <button className="bg-blue-700 text-white px-6 py-2 rounded-lg hover:bg-blue-800">
        Explore Product
      </button>
    </div>
  );
}