import Image from "next/image";

import { Button } from "@/shared/ui/Button";

interface IServiceCardProps {
  icon: string;
  title: string;
}

export default function ServiceCard({ icon, title }: IServiceCardProps) {
  return (
    <div className="bg-white p-8 rounded-lg shadow-md text-center">
      <div className="bg-blue-50 w-20 h-20 mx-auto rounded-lg flex items-center justify-center mb-6">
        <Image
          src={icon}
          alt={title}
          className="w-12 h-12"
          width={256}
          height={256}
        />
      </div>
      <h3 className="text-lg font-semibold mb-4">{title}</h3>
      <Button
        variant="primary"
        title="Explore Product"
        ariaLabel="Explore Product"
      />
    </div>
  );
}
