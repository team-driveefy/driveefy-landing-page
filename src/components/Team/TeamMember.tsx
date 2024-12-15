interface ITeamMemberProps {
  image: string;
  name: string;
  role: string;
  socialLinks?: {
    linkedin?: string;
    instagram?: string;
    facebook?: string;
  };
}

export default function TeamMember({ image, name, role, socialLinks }: ITeamMemberProps) {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md relative group">
      <img src={image} alt={name} className="w-full h-64 object-cover rounded-lg mb-4" />
      <h3 className="text-xl font-bold">{name}</h3>
      <p className="text-gray-600">{role}</p>
      
      {socialLinks && (
        <div className="absolute top-4 right-4 flex flex-col space-y-2 opacity-0 group-hover:opacity-100 transition-opacity">
          {socialLinks.linkedin && (
            <a href={socialLinks.linkedin} className="bg-blue-700 p-2 rounded-full text-white">
              <img src="https://api.iconify.design/mdi:linkedin.svg" alt="LinkedIn" className="w-5 h-5" />
            </a>
          )}
          {socialLinks.instagram && (
            <a href={socialLinks.instagram} className="bg-pink-600 p-2 rounded-full text-white">
              <img src="https://api.iconify.design/mdi:instagram.svg" alt="Instagram" className="w-5 h-5" />
            </a>
          )}
          {socialLinks.facebook && (
            <a href={socialLinks.facebook} className="bg-blue-600 p-2 rounded-full text-white">
              <img src="https://api.iconify.design/mdi:facebook.svg" alt="Facebook" className="w-5 h-5" />
            </a>
          )}
        </div>
      )}
    </div>
  );
}