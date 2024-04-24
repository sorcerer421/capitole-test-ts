import React from 'react';
import Image from 'next/image';

interface PodcastDetailCardProps {
  imageUrl: string;
  title: string;
  author: string;
  description: string;
  onClick: () => void;
}

const PodcastDetailCard: React.FC<PodcastDetailCardProps> = ({ imageUrl, title, author, description, onClick }) => {
  return (
    <div className="bg-white rounded-lg shadow-lg p-4 max-w-1/4">
      <div className="p-4">
      <Image 
        src={imageUrl} 
        alt="Podcast Image" 
        className="object-cover rounded-t-lg h-48 w-48"  
        width={300} 
        height={300} 
        onClick={onClick}
        />
      <hr className="my-4" />
        <h2 className="text-xl font-bold">{title}</h2>
        <p className="text-gray-500" onClick={onClick}>by {author}</p>
        <hr className="my-4" />
        <p className="text-gray-700">Description</p>
        <p className="text-gray-700" dangerouslySetInnerHTML={{ __html: description }}></p>
      </div>
    </div>
  );
};


export default PodcastDetailCard;