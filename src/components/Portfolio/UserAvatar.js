import React, { useMemo } from 'react';

// Function to generate avatar text based on name
export const generateUserAvatar = (name) => {
  // Trim and split the name
  const trimmedName = name.trim();
  
  // Split into words
  const nameParts = trimmedName.split(' ');
  
  // If both first and last name are provided
  if (nameParts.length > 1) {
    return (nameParts[0][0] + nameParts[1][0]).toUpperCase();
  }
  
  // If only first name is provided
  return trimmedName.slice(0, 2).toUpperCase();
};

const UserAvatarText = ({ 
  name, 
  size = 'md', 
  className = '',
  onClick 
}) => {
  // Generate avatar text
  const avatarText = useMemo(() => generateUserAvatar(name), [name]);

  // Size variations
  const sizeClasses = {
    xs: 'text-xs font-bold',
    sm: 'text-sm font-bold',
    md: 'text-base font-bold',
    lg: 'text-2xl font-bold',
    xl: 'text-3xl font-extrabold'
  };

  return (
    <span 
      className={`
        ${sizeClasses[size]} 
        ${className}
        text-indigo-600 
        cursor-pointer 
        transition-colors 
        duration-300 
        hover:text-indigo-800
      `}
      onClick={onClick}
    >
      {avatarText}
    </span>
  );
};

export default UserAvatarText;