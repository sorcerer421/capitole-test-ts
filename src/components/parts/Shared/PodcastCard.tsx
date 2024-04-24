
import React from 'react';
import Image from 'next/image';

interface PodcastCardProps {
  id: string;
  title: string;
  imageUrl: string;
  author: string;
  handleClick: (id: string) => void;
}

const PodcastCard: React.FC<PodcastCardProps> = ({id, title, imageUrl, author, handleClick}) => {

  return (
    <div className="flex justify-center items-center h-full w-48 min-w-68" onClick={() => handleClick(id)}>
      <div className="max-w-sm rounded overflow-hidden shadow-lg items-center">
      <div className="flex items-center justify-center">
        <Image className="rounded-full" src={imageUrl} alt={title} width={100} height={100}/>
      </div>
        <div className="px-6 py-4">
          <div className="font-bold text-xl mb-2 truncate">{title}</div>
          <p className="text-gray-700 text-base truncate">
            Author: {author}
          </p>
        </div>
      </div>
    </div>
  );
};

export default PodcastCard;