'use client'

import { useEffect, useRef, useState } from 'react'
import Script from 'next/script'

declare global {
  interface Window {
    YT: {
      Player: new (el: HTMLElement, opts: object) => YTPlayer
      PlayerState: { PLAYING: number }
    }
    onYouTubeIframeAPIReady: () => void
  }
}

interface YTPlayer {
  playVideo(): void
  mute(): void
  unMute(): void
  seekTo(seconds: number, allowSeekAhead: boolean): void
  getPlayerState(): number
  destroy(): void
}

const VIDEO_ID = 'zSAJ0l4OBHM'
const START_TIME = 161

export default function BackgroundMusic() {
  const playerRef = useRef<YTPlayer | null>(null)
  const divRef = useRef<HTMLDivElement>(null)
  const [muted, setMuted] = useState(true)
  const unlockedRef = useRef(false)

  useEffect(() => {
    // YouTube IFrame API pushes entries to window.history (same-URL state changes)
    // which corrupts Next.js App Router's navigation stack and causes "page couldn't
    // load" errors on internal link clicks. Patch history to block those calls while
    // still letting Next.js (identified by its __NA state key) navigate normally.
    const origPushState = window.history.pushState.bind(window.history)
    const origReplaceState = window.history.replaceState.bind(window.history)

    function isNextjs(state: unknown): boolean {
      return (
        state != null &&
        typeof state === 'object' &&
        ('__NA' in (state as Record<string, unknown>) ||
          '__PRIVATE_NEXTJS_INTERNALS_TREE' in (state as Record<string, unknown>))
      )
    }

    window.history.pushState = function (state, title, url) {
      if (isNextjs(state) || (url != null && String(url) !== window.location.href)) {
        origPushState(state, title, url)
      }
    }

    window.history.replaceState = function (state, title, url) {
      if (isNextjs(state) || (url != null && String(url) !== window.location.href)) {
        origReplaceState(state, title, url)
      }
    }

    function initPlayer() {
      if (!divRef.current || !window.YT?.Player) return
      playerRef.current = new window.YT.Player(divRef.current, {
        height: '1',
        width: '1',
        videoId: VIDEO_ID,
        playerVars: {
          autoplay: 1,
          start: START_TIME,
          mute: 1,
          controls: 0,
          disablekb: 1,
          fs: 0,
          iv_load_policy: 3,
          modestbranding: 1,
          rel: 0,
          playsinline: 1,
        },
        events: {
          onReady(e: { target: YTPlayer }) {
            e.target.seekTo(START_TIME, true)
            e.target.playVideo()
            if (unlockedRef.current) {
              e.target.unMute()
              setMuted(false)
            }
          },
        },
      })
    }

    window.onYouTubeIframeAPIReady = initPlayer
    if (window.YT?.Player) initPlayer()

    function unlock() {
      if (unlockedRef.current) return
      unlockedRef.current = true
      if (!playerRef.current) return // onReady will handle unmute via unlockedRef
      try {
        playerRef.current.unMute()
        setMuted(false)
        if (playerRef.current.getPlayerState() !== 1) {
          playerRef.current.seekTo(START_TIME, true)
          playerRef.current.playVideo()
        }
      } catch (_) {}
    }

    document.addEventListener('click', unlock)
    document.addEventListener('scroll', unlock)
    document.addEventListener('keydown', unlock)

    return () => {
      window.history.pushState = origPushState
      window.history.replaceState = origReplaceState
      document.removeEventListener('click', unlock)
      document.removeEventListener('scroll', unlock)
      document.removeEventListener('keydown', unlock)
      try { playerRef.current?.destroy() } catch (_) {}
      playerRef.current = null
    }
  }, [])

  function toggleMute() {
    if (!playerRef.current) return
    try {
      if (muted) {
        playerRef.current.unMute()
        setMuted(false)
        unlockedRef.current = true
        if (playerRef.current.getPlayerState() !== 1) {
          playerRef.current.seekTo(START_TIME, true)
          playerRef.current.playVideo()
        }
      } else {
        playerRef.current.mute()
        setMuted(true)
      }
    } catch (_) {}
  }

  return (
    <>
      <Script src="https://www.youtube.com/iframe_api" strategy="afterInteractive" />
      <div
        ref={divRef}
        style={{
          position: 'fixed',
          top: '-2px',
          left: '-2px',
          width: '1px',
          height: '1px',
          opacity: 0,
          pointerEvents: 'none',
          overflow: 'hidden',
        }}
        aria-hidden="true"
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
