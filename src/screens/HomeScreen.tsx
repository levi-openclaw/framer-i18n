import { Language } from '../types'

interface HomeScreenProps {
  state: {
    languages: Language[]
    translations: Record<string, Record<string, string>>
  }
  setState: any
  onEditor: () => void
}

export function HomeScreen({ state, setState, onEditor }: HomeScreenProps) {
  const totalKeys = Object.values(state.translations)[0] 
    ? Object.keys(Object.values(state.translations)[0]).length 
    : 0
  const totalTranslations = Object.values(state.translations).reduce(
    (sum, lang) => sum + Object.keys(lang).length, 
    0
  )

  return (
    <div className="home-screen">
      <header className="header">
        <div className="logo">
          <span className="logo-icon">🌐</span>
          <h1>Framer i18n</h1>
        </div>
        <p className="tagline">Localization made simple</p>
      </header>

      <div className="stats">
        <div className="stat-card">
          <div className="stat-value">{state.languages.length}</div>
          <div className="stat-label">Languages</div>
        </div>
        <div className="stat-card">
          <div className="stat-value">{totalKeys}</div>
          <div className="stat-label">Keys</div>
        </div>
        <div className="stat-card">
          <div className="stat-value">{totalTranslations}</div>
          <div className="stat-label">Translations</div>
        </div>
      </div>

      <div className="languages-section">
        <h2>Languages</h2>
        <div className="language-chips">
          {state.languages.map((lang) => (
            <div key={lang.code} className="language-chip">
              <span className="flag">{lang.flag}</span>
              <span className="name">{lang.name}</span>
              <span className="code">({lang.code})</span>
            </div>
          ))}
          <button className="add-btn">+ Add</button>
        </div>
      </div>

      <div className="actions">
        <button className="primary-btn" onClick={onEditor}>
          Edit Translations
        </button>
        <button className="secondary-btn">
          Export JSON
        </button>
        <button className="secondary-btn">
          Import JSON
        </button>
      </div>

      <div className="quick-start">
        <h3>Quick Start</h3>
        <ol>
          <li>Add languages you need to support</li>
          <li>Create translation keys for your text</li>
          <li>Fill in translations for each language</li>
          <li>Export and use in your Framer project</li>
        </ol>
      </div>
    </div>
  )
}
