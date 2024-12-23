import { ArrowRight } from 'lucide-react';

interface IFeatureContentProps {
  title: string;
  description: string;
  stats: {
    students: string;
    experience: string;
    percentage: number;
  };
}

export default function FeatureContent({ title, description, stats }: IFeatureContentProps) {
  return (
    <div className="bg-white rounded-lg p-8 shadow-lg">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div>
          <h3 className="text-2xl font-bold mb-4">{title}</h3>
          <p className="text-gray-600 mb-6">{description}</p>
          <button className="text-primary flex items-center space-x-2 hover:text-blue-800">
            <span>Know More About us</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
        <div className="flex items-center justify-center">
          <div className="relative">
            <div className="w-32 h-32 rounded-full border-8 border-blue-100 flex items-center justify-center">
              <span className="text-2xl font-bold text-primary">{stats.percentage}%</span>
            </div>
            <div className="absolute top-full mt-4 text-center w-full">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <p className="font-bold text-lg">{stats.students}</p>
                  <p className="text-sm text-gray-600">Students</p>
                </div>
                <div>
                  <p className="font-bold text-lg">{stats.experience}</p>
                  <p className="text-sm text-gray-600">Experience</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}