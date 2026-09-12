'use client'

import { useEffect, useRef, useState } from 'react'

export default function BackgroundMusic() {
  const iframeRef = useRef<HTMLIFrameElement>(null)
  const [muted, setMuted] = useState(true)
  const unlockedRef = useRef(false)

  function sendCommand(action: 'mute' | 'unmute') {
    iframeRef.current?.contentWindow?.postMessage({ type: 'seq-music', action }, '*')
  }

  useEffect(() => {
    function unlock() {
      if (unlockedRef.current) return
      unlockedRef.current = true
      sendCommand('unmute')
      setMuted(false)
    }

    document.addEventListener('click', unlock)
    document.addEventListener('scroll', unlock)
    document.addEventListener('keydown', unlock)

    return () => {
      document.removeEventListener('click', unlock)
      document.removeEventListener('scroll', unlock)
      document.removeEventListener('keydown', unlock)
    }
  }, [])

  function toggleMute() {
    unlockedRef.current = true
    if (muted) {
      sendCommand('unmute')
      setMuted(false)
    } else {
      sendCommand('mute')
      setMuted(true)
    }
  }

  return (
    <>
      <iframe
        ref={iframeRef}
        src="/music-player.html"
        title="Background music player"
        style={{
          position: 'fixed',
          top: '-2px',
          left: '-2px',
          width: '1px',
          height: '1px',
          opacity: 0,
          pointerEvents: 'none',
          border: 'none',
        }}
        aria-hidden="true"
        tabIndex={-1}
      />
      <button
        onClick={toggleMute}
        aria-label={muted ? 'Unmute background music' : 'Mute background music'}
        title={muted ? 'Unmute music' : 'Mute music'}
        style={{
          position: 'fixed',
          bottom: '1.25rem',
          right: '1.25rem',
          zIndex: 9999,
          background: 'rgba(0,0,0,0.5)',
          color: 'white',
          border: '1px solid rgba(255,255,255,0.2)',
          borderRadius: '50%',
          width: '2.5rem',
          height: '2.5rem',
          cursor: 'pointer',
          fontSize: '1.1rem',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          backdropFilter: 'blur(4px)',
          transition: 'background 0.2s',
        }}
      >
        {muted ? '🔇' : '🔊'}
      </button>
    </>
  )
}
