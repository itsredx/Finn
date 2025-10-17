import React, { useState, useRef, ReactNode } from 'react';
import { CheckmarkIcon } from './Icons';

interface FileUploadCardProps {
  icon: ReactNode;
  title: string;
  description: string;
}

const FileUploadCard: React.FC<FileUploadCardProps> = ({ icon, title, description }) => {
  const [file, setFile] = useState<File | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && event.target.files.length > 0) {
      setFile(event.target.files[0]);
    }
  };

  const handleButtonClick = () => {
    fileInputRef.current?.click();
  };

  return (
    <div className="bg-white p-6 rounded-2xl shadow-lg border-2 border-dashed border-gray-300 flex flex-col items-center justify-center text-center h-[270px]">
      <div className="text-[#214D76] mb-4">
        {icon}
      </div>
      <h3 className="text-lg font-bold text-black mb-1">{title}</h3>
      <p className="text-sm text-gray-500 mb-4">{description}</p>
      
      <input
        type="file"
        ref={fileInputRef}
        onChange={handleFileChange}
        className="hidden"
        aria-label={`Upload ${title}`}
      />
      
      {!file ? (
        <button 
          onClick={handleButtonClick}
          className="w-full max-w-[160px] bg-gray-200 text-black font-semibold py-2 px-4 rounded-lg hover:bg-gray-300 transition-colors"
        >
          Upload File
        </button>
      ) : (
        <div className="w-full max-w-[200px] bg-green-100 text-green-800 font-semibold py-2 px-4 rounded-lg flex items-center justify-center gap-2">
          <CheckmarkIcon className="text-green-600" />
          <span className="truncate">{file.name}</span>
        </div>
      )}
    </div>
  );
};

export default FileUploadCard;