import { Scale } from 'lucide-react';
import { TextToSpeech } from './TextToSpeech';
import { ContrastToggle } from './ContrastToggle';

export function Header() {
  return (
    <div className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white py-6 px-8 flex items-center justify-between">
      <div className="flex items-center gap-4">
      <div className="bg-white p-3 rounded-full">
        <Scale className="w-8 h-8 text-indigo-600" />
      </div>
      <h1 className="text-3xl font-bold">SmartLawyer</h1>
      </div>
      <div className="flex items-center gap-4">
        <ContrastToggle />
        <TextToSpeech />
      </div>
    </div>
  );
}
