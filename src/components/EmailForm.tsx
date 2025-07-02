import React from 'react';
import { Mail, CheckCircle, ArrowRight, AlertCircle } from 'lucide-react';

interface EmailFormProps {
  email: string;
  isSubmitted: boolean;
  isLoading: boolean;
  error: string | null;
  onEmailChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onSubmit: (e: React.FormEvent) => void;
  className?: string;
}

export function EmailForm({
  email,
  isSubmitted,
  isLoading,
  error,
  onEmailChange,
  onSubmit,
  className = ""
}: EmailFormProps) {
  return (
    <div className={`max-w-md mx-auto ${className}`}>
      {!isSubmitted ? (
        <form onSubmit={onSubmit} className="space-y-4">
          <div className="flex flex-col gap-3 sm:flex-row">
            <div className="relative flex-1">
              <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="email"
                value={email}
                onChange={onEmailChange}
                placeholder="Din e-postadresse"
                className="w-full pl-10 pr-4 py-4 text-gray-900 bg-white rounded-xl border-0 shadow-lg focus:ring-4 focus:ring-orange-200 focus:outline-none text-lg"
                required
                autoComplete="email"
              />
            </div>
            <button
              type="submit"
              disabled={isLoading || !email}
              className="px-8 py-4 text-lg font-semibold text-white bg-orange-500 rounded-xl hover:bg-orange-600 focus:ring-4 focus:ring-orange-200 focus:outline-none shadow-lg transition-all duration-200 transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
            >
              {isLoading ? (
                <div className="flex items-center justify-center">
                  <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin mr-2"></div>
                  Melder på...
                </div>
              ) : (
                <>
                  Meld deg på venteliste
                  <ArrowRight className="inline-block w-5 h-5 ml-2" />
                </>
              )}
            </button>
          </div>
          {error && (
            <div className="flex items-center p-4 bg-red-50 border border-red-200 rounded-xl">
              <AlertCircle className="w-5 h-5 text-red-500 mr-3 flex-shrink-0" />
              <p className="text-red-700 text-sm">{error}</p>
            </div>
          )}
        </form>
      ) : (
        <div className="flex items-center justify-center p-6 bg-white rounded-xl shadow-lg">
          <CheckCircle className="w-8 h-8 text-green-500 mr-3" />
          <div className="text-left">
            <p className="text-lg font-semibold text-gray-900">Takk for påmeldingen!</p>
            <p className="text-gray-600">Vi kontakter deg når appen er klar.</p>
          </div>
        </div>
      )}
    </div>
  );
}