import React, { useEffect, useState } from 'react';

interface GeneralFormProps {
  fields: string[];
  onSubmit: (details: Record<string, string>) => void;
  isLoading: boolean;
}

export function GeneralForm({ fields, onSubmit, isLoading }: GeneralFormProps) {
  const [details, setDetails] = useState<Record<string, string>>({});

  useEffect(() => {
    setDetails({}); // איפוס השדות
  }, [fields]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (isLoading) return;
    onSubmit(details);
  };

  const handleInputChange = (field: string, value: string) => {
    setDetails((prev) => ({ ...prev, [field]: value }));
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      {fields.map((field) => (
        <div key={field}>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            {field}
          </label>
          <textarea
            value={details[field] || ''}
            onChange={(e) => handleInputChange(field, e.target.value)}
            className="w-full p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500 resize-none min-h-[100px]"
            dir="rtl"
            required
          />
        </div>
      ))}

      {/* 
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">
          קישור למקור (אופציונלי)
        </label>
        <input
          type="url"
          value={sourceUrl}
          onChange={(e) => setSourceUrl(e.target.value)}
          className="w-full p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500"
          dir="ltr"
          placeholder="https://..."
        />
      </div>
      */}

      <button
        type="submit"
        disabled={isLoading || !Object.values(details).some((v) => v.trim())}
        className={`w-full py-3 px-4 rounded-lg bg-indigo-600 text-white font-medium transition-colors
          ${
            isLoading ? 'opacity-50 cursor-not-allowed' : 'hover:bg-indigo-700'
          }`}
      >
        {isLoading ? 'עורך דין בדרך...' : 'שלח'}
      </button>
    </form>
  );
}
