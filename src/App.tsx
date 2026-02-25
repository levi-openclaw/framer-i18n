import { useState } from 'react'
import { HomeScreen } from './screens/HomeScreen'
import { EditorScreen } from './screens/EditorScreen'
import { Language } from './types'

export type AppState = {
  languages: Language[]
  translations: Record<string, Record<string, string>> // lang -> key -> value
  selectedKey: string | null
}

export function App() {
  const [screen, setScreen] = useState<'home' | 'editor'>('home')
  const [state, setState] = useState<AppState>({
    languages: [
      { code: 'en', name: 'English', flag: '🇺🇸' },
      { code: 'es', name: 'Spanish', flag: '🇪🇸' },
      { code: 'fr', name: 'French', flag: '🇫🇷' },
      { code: 'de', name: 'German', flag: '🇩🇪' },
    ],
    translations: {
      en: {
        'hero.title': 'Welcome to our site',
        'hero.subtitle': 'We make amazing things',
        'cta.button': 'Get Started',
        'nav.home': 'Home',
        'nav.about': 'About',
        'nav.contact': 'Contact',
      },
      es: {
        'hero.title': 'Bienvenido a nuestro sitio',
        'hero.subtitle': 'Hacemos cosas increíbles',
        'cta.button': 'Empezar',
        'nav.home': 'Inicio',
        'nav.about': 'Nosotros',
        'nav.contact': 'Contacto',
      },
      fr: {
        'hero.title': 'Bienvenue sur notre site',
        'hero.subtitle': 'Nous faisons des choses incroyables',
        'cta.button': 'Commencer',
        'nav.home': 'Accueil',
        'nav.about': 'À propos',
        'nav.contact': 'Contact',
      },
      de: {
        'hero.title': 'Willkommen auf unserer Seite',
        'hero.subtitle': 'Wir machen erstaunliche Dinge',
        'cta.button': 'Loslegen',
        'nav.home': 'Startseite',
        'nav.about': 'Über uns',
        'nav.contact': 'Kontakt',
      },
    },
    selectedKey: null,
  })

  return (
    <div className="app">
      {screen === 'home' ? (
        <HomeScreen state={state} setState={setState} onEditor={() => setScreen('editor')} />
      ) : (
        <EditorScreen state={state} setState={setState} onBack={() => setScreen('home')} />
      )}
    </div>
  )
}
