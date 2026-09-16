import React, { useEffect, useRef, useState, useCallback } from 'react';
import { Play, Pause, Volume2, Volume1, VolumeX, Music, Sparkles } from 'lucide-react';

/**
 * Ease in-out quadratic easing for organic, silky volume fading
 */
function easeInOutQuad(t: number): number {
  return t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t;
}

export default function BackgroundMusic() {
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const fadeAnimRef = useRef<number | null>(null);
  const isExplicitlyPausedRef = useRef<boolean>(false);
  const containerRef = useRef<HTMLDivElement | null>(null);

  // States
  const [isPlaying, setIsPlaying] = useState<boolean>(false);
  const [volume, setVolume] = useState<number>(0.35); // Default background level: 35%
  const [isMuted, setIsMuted] = useState<boolean>(false);
  const [isExpanded, setIsExpanded] = useState<boolean>(false);
  const [hasInteracted, setHasInteracted] = useState<boolean>(false);

  // Synchronous refs to prevent effect recreation or stale state
  const volumeRef = useRef<number>(0.35);
  const isMutedRef = useRef<boolean>(false);
  const prevVolumeRef = useRef<number>(0.35);

  // Keep refs in sync with state
  useEffect(() => {
    volumeRef.current = volume;
  }, [volume]);

  useEffect(() => {
    isMutedRef.current = isMuted;
  }, [isMuted]);

  // Throttled volume fading engine (prevents main thread & browser audio IPC flooding)
  const fadeToVolume = useCallback(
    (targetVol: number, durationMs: number = 800, onComplete?: () => void) => {
      const audio = audioRef.current;
      if (!audio) return;

      if (fadeAnimRef.current !== null) {
        cancelAnimationFrame(fadeAnimRef.current);
        fadeAnimRef.current = null;
      }

      const clampedTarget = Math.max(0, Math.min(1, targetVol));
      const startVol = audio.volume;
      const startTime = performance.now();
      let lastThrottleTime = 0;

      function step(now: number) {
        const elapsed = now - startTime;
        const progress = Math.min(elapsed / durationMs, 1);

        // Throttle audio.volume setter to ~30ms intervals to eliminate audio thread stutter & main-thread jank
        if (now - lastThrottleTime >= 30 || progress >= 1) {
          lastThrottleTime = now;
          const eased = easeInOutQuad(progress);
          const currentVol = startVol + (clampedTarget - startVol) * eased;
          if (audio) {
            audio.volume = Math.max(0, Math.min(1, currentVol));
          }
        }

        if (progress < 1) {
          fadeAnimRef.current = requestAnimationFrame(step);
        } else {
          if (audio) {
            audio.volume = clampedTarget;
          }
          fadeAnimRef.current = null;
          if (onComplete) onComplete();
        }
      }

      fadeAnimRef.current = requestAnimationFrame(step);
    },
    []
  );

  // Initiate playback with smooth fade-in
  const playAudio = useCallback(() => {
    const audio = audioRef.current;
    if (!audio) return;

    isExplicitlyPausedRef.current = false;
    audio.volume = 0;

    const playPromise = audio.play();
    if (playPromise !== undefined) {
      playPromise
        .then(() => {
          setIsPlaying(true);
          const target = isMutedRef.current ? 0 : volumeRef.current;
          fadeToVolume(target, 1000);
        })
        .catch((err) => {
          console.warn('Audio playback deferred by browser policy:', err);
          setIsPlaying(false);
        });
    }
  }, [fadeToVolume]);

  // Pause playback with smooth fade-out
  const pauseAudio = useCallback(() => {
    const audio = audioRef.current;
    if (!audio) return;

    isExplicitlyPausedRef.current = true;
    fadeToVolume(0, 600, () => {
      audio.pause();
      setIsPlaying(false);
    });
  }, [fadeToVolume]);

  // Toggle play/pause handler
  const handleTogglePlay = (e?: React.MouseEvent) => {
    if (e) e.stopPropagation();
    setHasInteracted(true);

    if (isPlaying) {
      pauseAudio();
    } else {
      playAudio();
    }
  };

  // Mute toggle handler
  const handleToggleMute = (e?: React.MouseEvent) => {
    if (e) e.stopPropagation();
    const audio = audioRef.current;
    if (!audio) return;

    if (isMutedRef.current) {
      // Unmute: restore previous volume
      const restoredVol = prevVolumeRef.current > 0 ? prevVolumeRef.current : 0.35;
      setIsMuted(false);
      setVolume(restoredVol);
      if (isPlaying) {
        fadeToVolume(restoredVol, 250);
      } else {
        audio.volume = restoredVol;
      }
    } else {
      // Mute: save current volume and fade to 0
      prevVolumeRef.current = volumeRef.current;
      setIsMuted(true);
      if (isPlaying) {
        fadeToVolume(0, 250);
      } else {
        audio.volume = 0;
      }
    }
  };

  // Volume slider change
  const handleVolumeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newVol = parseFloat(e.target.value);
    setVolume(newVol);
    const audio = audioRef.current;

    if (newVol > 0 && isMutedRef.current) {
      setIsMuted(false);
    }

    if (audio) {
      if (fadeAnimRef.current !== null) {
        cancelAnimationFrame(fadeAnimRef.current);
        fadeAnimRef.current = null;
      }
      audio.volume = newVol;
    }

    if (newVol === 0) {
      setIsMuted(true);
    }
  };

  // Persistent Audio Lifecycle & Single-Run First-Interaction Listener
  useEffect(() => {
    // Instantiate persistent single Audio object
    const audio = new Audio('/music/song.mp3');
    audio.loop = true;
    audio.preload = 'auto';
    audio.volume = 0;
    audioRef.current = audio;

    let triggered = false;

    const handleFirstInteraction = () => {
      if (triggered) return;
      triggered = true;
      setHasInteracted(true);

      INTERACTION_EVENTS.forEach((evt) => {
        window.removeEventListener(evt, handleFirstInteraction);
      });

      if (!isExplicitlyPausedRef.current && audioRef.current) {
        audioRef.current.volume = 0;
        const p = audioRef.current.play();
        if (p !== undefined) {
          p.then(() => {
            setIsPlaying(true);
            const target = isMutedRef.current ? 0 : volumeRef.current;
            fadeToVolume(target, 1000);
          }).catch((err) => {
            console.warn('First interaction playback was postponed by browser:', err);
          });
        }
      }
    };

    const INTERACTION_EVENTS: Array<keyof WindowEventMap> = [
      'click',
      'scroll',
      'keydown',
      'touchstart',
      'pointerdown',
    ];

    INTERACTION_EVENTS.forEach((evt) => {
      window.addEventListener(evt, handleFirstInteraction, { once: true, passive: true });
    });

    // Cleanup strictly on unmount
    return () => {
      INTERACTION_EVENTS.forEach((evt) => {
        window.removeEventListener(evt, handleFirstInteraction);
      });
      if (fadeAnimRef.current !== null) {
        cancelAnimationFrame(fadeAnimRef.current);
      }
      audio.pause();
      audio.src = '';
      audioRef.current = null;
    };
  }, [fadeToVolume]);

  // Close expanded panel on outside click
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (containerRef.current && !containerRef.current.contains(event.target as Node)) {
        setIsExpanded(false);
      }
    }
    document.addEventListener('mousedown', handleClickOutside, { passive: true });
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <div
      ref={containerRef}
      className="fixed bottom-20 right-4 sm:bottom-6 sm:right-6 z-40 select-none font-sans"
      onMouseEnter={() => setIsExpanded(true)}
      onMouseLeave={() => setIsExpanded(false)}
    >
      {/* Outer Sonic Ripple Rings - Rendered only when active */}
      {isPlaying && (
        <div className="absolute inset-0 pointer-events-none -z-10 flex items-center justify-end">
          <div className="music-ripple-ring music-ripple-ring-1" />
          <div className="music-ripple-ring music-ripple-ring-2" />
          <div className="music-ripple-ring music-ripple-ring-3" />
        </div>
      )}

      {/* Main Glassmorphic Music Player Capsule */}
      <div
        className={`group relative flex items-center transition-all duration-300 ease-out backdrop-blur-xl ${
          isPlaying
            ? 'bg-neutral-950/85 border-pink-500/30 shadow-[0_0_20px_-3px_rgba(255,143,194,0.3),0_8px_32px_0_rgba(0,0,0,0.5)]'
            : 'bg-neutral-950/70 border-white/15 hover:border-pink-500/30 shadow-[0_8px_32px_0_rgba(0,0,0,0.4)]'
        } border rounded-full text-neutral-200 overflow-hidden`}
      >
        {/* Expanded Controls: Track Info, Volume Slider, Mute Button */}
        <div
          className={`flex items-center transition-all duration-300 overflow-hidden ${
            isExpanded
              ? 'max-w-[260px] opacity-100 pl-3.5 pr-1 py-1.5'
              : 'max-w-0 opacity-0 px-0 py-1.5 pointer-events-none'
          }`}
          style={{ willChange: 'max-width, opacity' }}
        >
          {/* Track Info Badge */}
          <div className="flex flex-col mr-3 whitespace-nowrap">
            <div className="flex items-center gap-1 text-[11px] font-mono font-semibold tracking-wider text-pink-300">
              <Sparkles className="w-2.5 h-2.5 text-pink-400 animate-pulse" />
              <span>SAKURA BGM</span>
            </div>
            <span className="text-[9px] font-mono text-neutral-400">
              {isPlaying ? 'Now Playing' : 'Paused'} • {Math.round((isMuted ? 0 : volume) * 100)}%
            </span>
          </div>

          {/* Mute / Unmute Button */}
          <button
            type="button"
            onClick={handleToggleMute}
            aria-label={isMuted ? 'Unmute music' : 'Mute music'}
            className="p-1.5 rounded-full text-neutral-300 hover:text-pink-300 hover:bg-white/10 transition-colors focus:outline-none focus:ring-1 focus:ring-pink-400/50"
          >
            {isMuted || volume === 0 ? (
              <VolumeX className="w-4 h-4 text-neutral-400" />
            ) : volume < 0.5 ? (
              <Volume1 className="w-4 h-4 text-pink-300" />
            ) : (
              <Volume2 className="w-4 h-4 text-pink-300" />
            )}
          </button>

          {/* Volume Slider */}
          <div className="relative flex items-center w-16 mx-2">
            <input
              type="range"
              min="0"
              max="1"
              step="0.01"
              value={isMuted ? 0 : volume}
              onChange={handleVolumeChange}
              aria-label="Music volume"
              className="music-volume-slider w-full h-1 bg-neutral-800 rounded-lg appearance-none cursor-pointer focus:outline-none"
              style={{
                background: `linear-gradient(to right, #ff8fc2 0%, #ff8fc2 ${
                  (isMuted ? 0 : volume) * 100
                }%, rgba(255, 255, 255, 0.15) ${(isMuted ? 0 : volume) * 100}%, rgba(255, 255, 255, 0.15) 100%)`,
              }}
            />
          </div>
        </div>

        {/* Primary Circular Play/Pause & Equalizer Trigger Button */}
        <button
          type="button"
          onClick={handleTogglePlay}
          aria-label={isPlaying ? 'Pause background music' : 'Play background music'}
          className={`relative flex items-center justify-center gap-2 p-2.5 sm:p-3 rounded-full transition-all duration-300 focus:outline-none ${
            isPlaying
              ? 'text-pink-300 hover:bg-pink-500/10'
              : 'text-neutral-300 hover:text-white hover:bg-white/10'
          }`}
        >
          {/* Subtle Ambient Glow inside button */}
          {isPlaying && (
            <div className="absolute inset-0 rounded-full bg-pink-500/10 blur-sm pointer-events-none" />
          )}

          {/* GPU-Accelerated 4-Bar Audio Equalizer (Zero Reflow) */}
          <div
            className="flex items-end gap-[2px] h-3.5 w-3.5 justify-center"
            aria-hidden="true"
          >
            <span
              className={`w-[2px] h-[14px] rounded-full transition-colors duration-200 ${
                isPlaying
                  ? 'bg-pink-400 music-eq-bar music-eq-bar-1'
                  : 'bg-neutral-500 music-eq-bar scale-y-[0.2]'
              }`}
            />
            <span
              className={`w-[2px] h-[14px] rounded-full transition-colors duration-200 ${
                isPlaying
                  ? 'bg-pink-300 music-eq-bar music-eq-bar-2'
                  : 'bg-neutral-500 music-eq-bar scale-y-[0.4]'
              }`}
            />
            <span
              className={`w-[2px] h-[14px] rounded-full transition-colors duration-200 ${
                isPlaying
                  ? 'bg-pink-400 music-eq-bar music-eq-bar-3'
                  : 'bg-neutral-500 music-eq-bar scale-y-[0.25]'
              }`}
            />
            <span
              className={`w-[2px] h-[14px] rounded-full transition-colors duration-200 ${
                isPlaying
                  ? 'bg-pink-300 music-eq-bar music-eq-bar-4'
                  : 'bg-neutral-500 music-eq-bar scale-y-[0.5]'
              }`}
            />
          </div>

          {/* Play or Pause Icon */}
          <div className="relative">
            {isPlaying ? (
              <Pause className="w-4 h-4 fill-current transition-transform duration-200" />
            ) : (
              <Play className="w-4 h-4 fill-current translate-x-[1px] transition-transform duration-200" />
            )}
          </div>
        </button>
      </div>

      {/* First-time prompt tooltip for unobtrusive guidance */}
      {!hasInteracted && !isPlaying && (
        <div
          className="absolute -top-8 right-0 pointer-events-none flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-neutral-900/90 border border-pink-500/30 text-[10px] font-mono text-pink-300 whitespace-nowrap shadow-lg animate-bounce"
          style={{ animationDuration: '3s' }}
        >
          <Music className="w-2.5 h-2.5" />
          <span>Click to play BGM</span>
        </div>
      )}
    </div>
  );
}
