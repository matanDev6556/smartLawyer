import { Lightbulb } from 'lucide-react';

export const HelpfulTip = () => {
  return (
    <div className="bg-yellow-100 border-l-4 border-yellow-500 text-yellow-700 p-4 mt-4 rounded">
      <div className="flex items-center">
        <Lightbulb className="w-5 h-5 mr-2" />
        <p className="font-bold">טיפ מועיל:</p>
      </div>
      <p className="mt-2">
        כדי לקבל את התשובה הטובה ביותר, נסה לספק כמה שיותר פרטים רלוונטיים בשאלתך. זה יעזור ל-AI להבין טוב יותר את המצב שלך ולספק מידע מדויק יותר.
      </p>
    </div>
  );
};

