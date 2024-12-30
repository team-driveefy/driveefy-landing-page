interface IClientCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

export default function ClientCard({
  icon,
  title,
  description,
}: IClientCardProps) {
  return (
    <div className="bg-white p-8 rounded-lg shadow-md">
      <div className="mb-6">{icon}</div>
      <h3 className="text-2xl font-bold mb-4">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
}
