import React, { useState, useCallback } from 'react';
import { 
  MapPin, 
  Trophy, 
  Users, 
  Heart, 
  Mail, 
  Camera,
  Star
} from 'lucide-react';
import { useWaitlist } from './hooks/useWaitlist';
import { EmailForm } from './components/EmailForm';

function App() {
  const [email, setEmail] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);
  const { addToWaitlist, isLoading, error, clearError } = useWaitlist();

  const handleSubmit = useCallback(async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !email.includes('@')) return;
    
    clearError();
    const result = await addToWaitlist(email);
    
    if (result.success) {
      setIsSubmitted(true);
      setEmail('');
    }
  }, [email, addToWaitlist, clearError]);

  const handleEmailChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-stone-50 to-orange-50">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-emerald-600 via-green-700 to-emerald-800">
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="relative px-4 py-20 mx-auto max-w-7xl sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="mb-8">
              <div className="inline-flex items-center justify-center w-20 h-20 mb-6 bg-orange-500 rounded-full shadow-lg">
                <MapPin className="w-10 h-10 text-white" />
              </div>
              <h1 className="text-5xl font-bold text-white sm:text-6xl lg:text-7xl">
                Utforsk
              </h1>
              <p className="max-w-3xl mx-auto mt-6 text-xl text-emerald-100 sm:text-2xl">
                Oppdag nye steder i nærmiljøet ditt – få daglige oppgaver, tjen poeng og vinn premier!
              </p>
            </div>

            {/* Email Signup Form */}
            <EmailForm
              email={email}
              isSubmitted={isSubmitted}
              isLoading={isLoading}
              error={error}
              onEmailChange={handleEmailChange}
              onSubmit={handleSubmit}
              className="mt-12"
            />
          </div>
        </div>
        
        {/* Decorative wave */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg className="w-full h-12 text-stone-50" viewBox="0 0 1440 48" fill="currentColor">
            <path d="M0,48 C720,0 1440,0 1440,48 L1440,48 L0,48 Z"></path>
          </svg>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 sm:text-5xl mb-4">
            Hvorfor velge Utforsk?
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            En helt ny måte å oppdage stedene rundt deg på, samtidig som du konkurrerer og støtter en god sak.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
          {/* Feature 1 */}
          <div className="group p-8 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
            <div className="w-16 h-16 bg-emerald-100 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-emerald-200 transition-colors">
              <MapPin className="w-8 h-8 text-emerald-600" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-4">Daglige oppgaver</h3>
            <p className="text-gray-600 leading-relaxed">
              Få spennende oppgaver som tilpasses hvor du er. Oppdage nye steder du aldri har vært før.
            </p>
          </div>

          {/* Feature 2 */}
          <div className="group p-8 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
            <div className="w-16 h-16 bg-orange-100 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-orange-200 transition-colors">
              <Trophy className="w-8 h-8 text-orange-600" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-4">Vinn premier</h3>
            <p className="text-gray-600 leading-relaxed">
              Konkurrer om pengepremier og andre belønninger. Jo mer du utforsker, jo mer kan du vinne.
            </p>
          </div>

          {/* Feature 3 */}
          <div className="group p-8 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
            <div className="w-16 h-16 bg-blue-100 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-blue-200 transition-colors">
              <Users className="w-8 h-8 text-blue-600" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-4">Lokal konkurranse</h3>
            <p className="text-gray-600 leading-relaxed">
              Sammenlign poeng med venner og naboer via leaderboard. Se hvem som utforsker mest!
            </p>
          </div>

          {/* Feature 4 */}
          <div className="group p-8 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
            <div className="w-16 h-16 bg-pink-100 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-pink-200 transition-colors">
              <Heart className="w-8 h-8 text-pink-600" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-4">Støtt en god sak</h3>
            <p className="text-gray-600 leading-relaxed">
              En del av premien doneres til ideelle organisasjoner. Utforsk og gjør en forskjell samtidig.
            </p>
          </div>
        </div>
      </section>

      {/* How it Works Section */}
      <section className="py-20 px-4 bg-gradient-to-br from-gray-50 to-stone-100">
        <div className="mx-auto max-w-4xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 sm:text-5xl mb-4">
              Slik fungerer det
            </h2>
            <p className="text-xl text-gray-600">
              Kom i gang på få minutter og start din utforskningsreise
            </p>
          </div>

          <div className="space-y-8">
            {/* Step 1 */}
            <div className="flex items-start space-x-6 p-6 bg-white rounded-2xl shadow-lg">
              <div className="flex-shrink-0 w-12 h-12 bg-emerald-500 text-white rounded-full flex items-center justify-center font-bold text-lg">
                1
              </div>
              <div className="flex-1">
                <h3 className="text-xl font-bold text-gray-900 mb-2">Meld deg på venteliste</h3>
                <p className="text-gray-600">
                  Registrer din e-postadresse og bli varslet når appen lanseres.
                </p>
              </div>
              <Mail className="w-8 h-8 text-emerald-500 flex-shrink-0" />
            </div>

            {/* Step 2 */}
            <div className="flex items-start space-x-6 p-6 bg-white rounded-2xl shadow-lg">
              <div className="flex-shrink-0 w-12 h-12 bg-orange-500 text-white rounded-full flex items-center justify-center font-bold text-lg">
                2
              </div>
              <div className="flex-1">
                <h3 className="text-xl font-bold text-gray-900 mb-2">Motta daglige oppgaver basert på lokasjon</h3>
                <p className="text-gray-600">
                  Få personlige oppgaver tilpasset området ditt og interessene dine.
                </p>
              </div>
              <MapPin className="w-8 h-8 text-orange-500 flex-shrink-0" />
            </div>

            {/* Step 3 */}
            <div className="flex items-start space-x-6 p-6 bg-white rounded-2xl shadow-lg">
              <div className="flex-shrink-0 w-12 h-12 bg-blue-500 text-white rounded-full flex items-center justify-center font-bold text-lg">
                3
              </div>
              <div className="flex-1">
                <h3 className="text-xl font-bold text-gray-900 mb-2">Ta bilde og last opp for å fullføre oppgaven</h3>
                <p className="text-gray-600">
                  Dokumenter oppdagelsen din og del den med fellesskapet.
                </p>
              </div>
              <Camera className="w-8 h-8 text-blue-500 flex-shrink-0" />
            </div>

            {/* Step 4 */}
            <div className="flex items-start space-x-6 p-6 bg-white rounded-2xl shadow-lg">
              <div className="flex-shrink-0 w-12 h-12 bg-purple-500 text-white rounded-full flex items-center justify-center font-bold text-lg">
                4
              </div>
              <div className="flex-1">
                <h3 className="text-xl font-bold text-gray-900 mb-2">Tjen poeng, konkurrer og vinn premier</h3>
                <p className="text-gray-600">
                  Samle poeng, klatre på leaderboard og vinn fantastiske premier.
                </p>
              </div>
              <Star className="w-8 h-8 text-purple-500 flex-shrink-0" />
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-gradient-to-r from-emerald-600 to-green-700">
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Klar til å starte utforskningsreisen?
          </h2>
          <p className="text-xl text-emerald-100 mb-8 max-w-2xl mx-auto">
            Bli en av de første til å oppleve Utforsk. Registrer deg på ventelisten i dag!
          </p>
          
          <EmailForm
            email={email}
            isSubmitted={isSubmitted}
            isLoading={isLoading}
            error={error}
            onEmailChange={handleEmailChange}
            onSubmit={handleSubmit}
          />
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12 px-4">
        <div className="mx-auto max-w-7xl">
          <div className="text-center">
            <div className="flex items-center justify-center mb-6">
              <div className="w-12 h-12 bg-orange-500 rounded-full flex items-center justify-center mr-3">
                <MapPin className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-2xl font-bold">Utforsk</h3>
            </div>
            
            <div className="mb-8">
              <p className="text-gray-400 mb-4">
                Har du spørsmål? Ta kontakt med oss:
              </p>
              <a 
                href="mailto:kontakt@utforsk.org" 
                className="text-orange-400 hover:text-orange-300 transition-colors font-medium"
              >
                kontakt@utforsk.org
              </a>
            </div>

            <div className="border-t border-gray-800 pt-8">
              <div className="flex flex-col sm:flex-row justify-between items-center space-y-4 sm:space-y-0">
                <p className="text-gray-400 text-sm">
                  © 2025 Utforsk. All rights reserved.
                </p>
                <div className="flex space-x-6">
                  <a href="#" className="text-gray-400 hover:text-white transition-colors text-sm">
                    Personvern
                  </a>
                  <a href="#" className="text-gray-400 hover:text-white transition-colors text-sm">
                    Vilkår
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;