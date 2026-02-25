import { useState } from 'react'
import { Language } from '../types'
import { AppState } from '../App'

interface HomeScreenProps {
  state: AppState
  setState: React.Dispatch<React.SetStateAction<AppState>>
  onEditor: () => void
}

export function HomeScreen({ state, setState, onEditor }: HomeScreenProps) {
  const [showAddLang, setShowAddLang] = useState(false)
  const [newLangCode, setNewLangCode] = useState('')
  const [newLangName, setNewLangName] = useState('')
  const [newLangFlag, setNewLangFlag] = useState('')

  const totalKeys = Object.values(state.translations)[0]
    ? Object.keys(Object.values(state.translations)[0]).length
    : 0
  const totalTranslations = Object.values(state.translations).reduce(
    (sum, lang) => sum + Object.keys(lang).length,
    0
  )

  const addLanguage = () => {
    const code = newLangCode.trim().toLowerCase()
    const name = newLangName.trim()
    if (!code || !name) return
    if (state.languages.some((l) => l.code === code)) return

    const existingKeys = Object.values(state.translations)[0]
      ? Object.keys(Object.values(state.translations)[0])
      : []

    const newLangTranslations: Record<string, string> = {}
    for (const key of existingKeys) {
      newLangTranslations[key] = ''
    }

    setState({
      ...state,
      languages: [...state.languages, { code, name, flag: newLangFlag.trim() || '🏳️' }],
      translations: { ...state.translations, [code]: newLangTranslations },
    })
    setNewLangCode('')
    setNewLangName('')
    setNewLangFlag('')
    setShowAddLang(false)
  }

  const exportJSON = () => {
    const data = JSON.stringify(state.translations, null, 2)
    const blob = new Blob([data], { type: 'application/json' })
    const url = URL.createObjectURL(blob)
    const a = document.createElement('a')
    a.href = url
    a.download = 'translations.json'
    a.click()
    URL.revokeObjectURL(url)
  }

  const importJSON = () => {
    const input = document.createElement('input')
    input.type = 'file'
    input.accept = '.json'
    input.onchange = (e) => {
      const file = (e.target as HTMLInputElement).files?.[0]
      if (!file) return
      const reader = new FileReader()
      reader.onload = (ev) => {
        try {
          const data = JSON.parse(ev.target?.result as string) as Record<string, Record<string, string>>
          const langCodes = Object.keys(data)
          if (langCodes.length === 0) return

          const newLanguages: Language[] = langCodes.map((code) => {
            const existing = state.languages.find((l) => l.code === code)
            return existing || { code, name: code.toUpperCase(), flag: '🏳️' }
          })

          setState({
            ...state,
            languages: newLanguages,
            translations: data,
          })
        } catch {
          // Invalid JSON — silently ignore
        }
      }
      reader.readAsText(file)
    }
    input.click()
  }

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
          <button className="add-btn" onClick={() => setShowAddLang(true)}>+ Add</button>
        </div>
      </div>

      {showAddLang && (
        <div className="add-lang-modal">
          <input
            type="text"
            placeholder="Code (e.g. ja)"
            value={newLangCode}
            onChange={(e) => setNewLangCode(e.target.value)}
            autoFocus
          />
          <input
            type="text"
            placeholder="Name (e.g. Japanese)"
            value={newLangName}
            onChange={(e) => setNewLangName(e.target.value)}
          />
          <input
            type="text"
            placeholder="Flag emoji"
            value={newLangFlag}
            onChange={(e) => setNewLangFlag(e.target.value)}
          />
          <div className="add-lang-actions">
            <button onClick={addLanguage}>Add</button>
            <button onClick={() => setShowAddLang(false)}>Cancel</button>
          </div>
        </div>
      )}

      <div className="actions">
        <button className="primary-btn" onClick={onEditor}>
          Edit Translations
        </button>
        <button className="secondary-btn" onClick={exportJSON}>
          Export JSON
        </button>
        <button className="secondary-btn" onClick={importJSON}>
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
