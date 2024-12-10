import { Component, ErrorInfo, ReactNode } from 'react';
import { AlertCircle } from 'lucide-react';

interface Props {
  children: ReactNode;
}

interface State {
  hasError: boolean;
  error: Error | null;
}

export class ErrorBoundary extends Component<Props, State> {
  public state: State = {
    hasError: false,
    error: null
  };

  public static getDerivedStateFromError(error: Error): State {
    return { hasError: true, error };
  }

  public componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error('Uncaught error:', error, errorInfo);
  }

  private formatErrorMessage(message: string): string {
    if (message.includes('VITE_GEMINI_API_KEY')) {
      return 'נדרש מפתח API של Gemini. אנא עקוב אחר ההוראות בקובץ README או .env.example כדי להגדיר את המפתח שלך.';
    }
    return message || 'אירעה שגיאה בלתי צפויה. אנא נסה שוב מאוחר יותר.';
  }

  public render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-lg shadow-lg p-6 max-w-md w-full text-center" dir="rtl">
            <div className="flex justify-center mb-4">
              <AlertCircle className="w-12 h-12 text-red-600" />
            </div>
            <h2 className="text-xl font-bold text-red-600 mb-4">שגיאה במערכת</h2>
            <p className="text-gray-600 mb-6 whitespace-pre-line">
              {this.formatErrorMessage(this.state.error?.message || '')}
            </p>
            <button
              onClick={() => window.location.reload()}
              className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors"
            >
              טען מחדש
            </button>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}