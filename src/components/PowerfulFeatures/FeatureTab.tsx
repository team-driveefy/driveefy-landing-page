interface IFeatureTabProps {
  title: string;
  isActive: boolean;
  onClick: () => void;
}

export default function FeatureTab({ title, isActive, onClick }: IFeatureTabProps) {
  return (
    <button
      onClick={onClick}
      className={`px-6 py-3 rounded-lg transition-all ${
        isActive
          ? 'bg-blue-700 text-white'
          : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
      }`}
    >
      {title}
    </button>
  );
}