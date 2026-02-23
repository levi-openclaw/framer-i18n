import { useState } from 'react'
import { Language } from '../types'

interface EditorScreenProps {
  state: {
    languages: Language[]
    translations: Record<string, Record<string, string>>
    selectedKey: string | null
  }
  setState: any
  onBack: () => void
}

export function EditorScreen({ state, setState, onBack }: EditorScreenProps) {
  const [selectedLang, setSelectedLang] = useState(state.languages[0]?.code || 'en')
  const [newKey, setNewKey] = useState('')
  const [showAddKey, setShowAddKey] = useState(false)

  const keys = state.translations[selectedLang] 
    ? Object.keys(state.translations[selectedLang])
    : []

  const addKey = () => {
    if (!newKey.trim()) return
    
    const updated = { ...state.translations }
    for (const lang of state.languages) {
      if (!updated[lang.code]) updated[lang.code] = {}
      updated[lang.code][newKey.trim()] = ''
    }
    
    setState({
      ...state,
      translations: updated,
      selectedKey: newKey.trim()
    })
    setNewKey('')
    setShowAddKey(false)
  }

  const updateTranslation = (key: string, value: string) => {
    const updated = { ...state.translations }
    if (!updated[selectedLang]) updated[selectedLang] = {}
    updated[selectedLang][key] = value
    
    setState({
      ...state,
      translations: updated
    })
  }

  const deleteKey = (key: string) => {
    const updated = { ...state.translations }
    for (const lang of state.languages) {
      if (updated[lang.code]) {
        delete updated[lang.code][key]
      }
    }
    setState({
      ...state,
      translations: updated
    })
  }

  return (
    <div className="editor-screen">
      <header className="editor-header">
        <button className="back-btn" onClick={onBack}>← Back</button>
        <h2>Translations</h2>
        <div className="lang-tabs">
          {state.languages.map((lang) => (
            <button
              key={lang.code}
              className={`lang-tab ${selectedLang === lang.code ? 'active' : ''}`}
              onClick={() => setSelectedLang(lang.code)}
            >
              {lang.flag} {lang.code.toUpperCase()}
            </button>
          ))}
        </div>
      </header>

      <div className="editor-toolbar">
        <input
          type="text"
          placeholder="Search keys..."
          className="search-input"
        />
        <button className="add-key-btn" onClick={() => setShowAddKey(true)}>
          + Add Key
        </button>
      </div>

      {showAddKey && (
        <div className="add-key-modal">
          <input
            type="text"
            placeholder="e.g., hero.title"
            value={newKey}
            onChange={(e) => setNewKey(e.target.value)}
            onKeyDown={(e) => e.key === 'Enter' && addKey()}
            autoFocus
          />
          <button onClick={addKey}>Add</button>
          <button onClick={() => setShowAddKey(false)}>Cancel</button>
        </div>
      )}

      <div className="translation-list">
        {keys.length === 0 ? (
          <div className="empty-state">
            <p>No translation keys yet.</p>
            <button onClick={() => setShowAddKey(true)}>Add your first key</button>
          </div>
        ) : (
          keys.map((key) => (
            <div key={key} className="translation-row">
              <div className="key-info">
                <div className="key-name">{key}</div>
                <button className="delete-key-btn" onClick={() => deleteKey(key)}>
                  🗑️
                </button>
              </div>
              <textarea
                value={state.translations[selectedLang]?.[key] || ''}
                onChange={(e) => updateTranslation(key, e.target.value)}
                placeholder={`Translation for ${selectedLang}`}
                rows={2}
              />
              <div className="other-langs-preview">
                {state.languages
                  .filter((l) => l.code !== selectedLang)
                  .map((lang) => (
                    <div key={lang.code} className="mini-preview">
                      <span className="mini-flag">{lang.flag}</span>
                      <span className="mini-text">
                        {state.translations[lang.code]?.[key] || '(empty)'}
                      </span>
                    </div>
                  ))}
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  )
}
