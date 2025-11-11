
import React from 'react';
import { AuthorshipClassification } from '../types';
import { Bot, User, HelpCircle } from 'lucide-react';

interface AuthorshipBadgeProps {
  classification: AuthorshipClassification;
}

const AuthorshipBadge: React.FC<AuthorshipBadgeProps> = ({ classification }) => {
  const getBadgeStyle = () => {
    switch (classification) {
      case AuthorshipClassification.AI:
        return {
          bgColor: 'bg-red-500/20',
          textColor: 'text-red-400',
          icon: <Bot className="h-8 w-8" />,
        };
      case AuthorshipClassification.HUMAN:
        return {
          bgColor: 'bg-green-500/20',
          textColor: 'text-green-400',
          icon: <User className="h-8 w-8" />,
        };
      case AuthorshipClassification.UNCLEAR:
      default:
        return {
          bgColor: 'bg-yellow-500/20',
          textColor: 'text-yellow-400',
          icon: <HelpCircle className="h-8 w-8" />,
        };
    }
  };

  const { bgColor, textColor, icon } = getBadgeStyle();

  return (
    <div className={`flex flex-col items-center justify-center p-6 rounded-lg ${bgColor} ${textColor}`}>
      {icon}
      <p className="mt-2 text-lg font-bold">{classification}</p>
    </div>
  );
};

export default AuthorshipBadge;
