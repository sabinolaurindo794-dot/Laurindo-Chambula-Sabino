// Web Audio API & Speech Synthesis audio engine for Lau Quiz

class SoundEngine {
  private audioCtx: AudioContext | null = null;
  private isMuted: boolean = false;
  private pianoInterval: NodeJS.Timeout | null = null;
  private isPianoPlaying: boolean = false;

  private getContext(): AudioContext | null {
    if (typeof window === 'undefined') return null;
    if (!this.audioCtx) {
      const AudioContextClass = window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
      if (AudioContextClass) {
        this.audioCtx = new AudioContextClass();
      }
    }
    if (this.audioCtx && this.audioCtx.state === 'suspended') {
      this.audioCtx.resume().catch(() => {});
    }
    return this.audioCtx;
  }

  public toggleMute(): boolean {
    this.isMuted = !this.isMuted;
    if (this.isMuted) {
      this.stopReflectionSound();
    }
    return this.isMuted;
  }

  public getIsMuted(): boolean {
    return this.isMuted;
  }

  // Synthesize a soft piano note key strike using Web Audio
  private playPianoNote(freq: number, startTime: number, duration: number = 2.0, volume: number = 0.08) {
    const ctx = this.getContext();
    if (!ctx) return;

    try {
      // Fundamental oscillator (Warm sine wave)
      const osc1 = ctx.createOscillator();
      const osc2 = ctx.createOscillator();
      const gain = ctx.createGain();

      osc1.type = 'sine';
      osc1.frequency.setValueAtTime(freq, startTime);

      // Overtone for piano hammer warmth
      osc2.type = 'triangle';
      osc2.frequency.setValueAtTime(freq * 2, startTime);

      // Soft piano envelope: fast attack, natural acoustic decay
      gain.gain.setValueAtTime(0.001, startTime);
      gain.gain.linearRampToValueAtTime(volume, startTime + 0.03); // Hammer impact
      gain.gain.exponentialRampToValueAtTime(volume * 0.3, startTime + 0.3); // Decay
      gain.gain.exponentialRampToValueAtTime(0.0001, startTime + duration); // Release

      osc1.connect(gain);
      osc2.connect(gain);
      gain.connect(ctx.destination);

      osc1.start(startTime);
      osc2.start(startTime);
      osc1.stop(startTime + duration);
      osc2.stop(startTime + duration);
    } catch (e) {
      console.warn('Piano synthesis error:', e);
    }
  }

  // Soft piano background ambient chords during reflection phase
  public startReflectionSound() {
    if (this.isMuted || this.isPianoPlaying) return;
    const ctx = this.getContext();
    if (!ctx) return;

    this.isPianoPlaying = true;

    // Soothing Ambient Piano Arpeggiated Chords (Cmaj7 -> Am9 -> Fmaj7 -> G)
    const chords = [
      [261.63, 329.63, 392.00, 493.88], // C4, E4, G4, B4 (Cmaj7)
      [220.00, 261.63, 329.63, 392.00], // A3, C4, E4, G4 (Am7)
      [174.61, 261.63, 329.63, 349.23], // F3, C4, E4, F4 (Fmaj7)
      [196.00, 246.94, 293.66, 392.00], // G3, B3, D4, G4 (G)
    ];

    let chordIdx = 0;

    const playChordSequence = () => {
      if (!this.isPianoPlaying || this.isMuted) return;
      const now = ctx.currentTime;
      const currentChord = chords[chordIdx % chords.length];

      // Play notes spaced out like a gentle piano touch
      currentChord.forEach((noteFreq, noteIndex) => {
        this.playPianoNote(noteFreq, now + noteIndex * 0.22, 2.5, 0.06);
      });

      chordIdx++;
    };

    playChordSequence();
    this.pianoInterval = setInterval(playChordSequence, 2400);
  }

  // Stop ambient piano sound
  public stopReflectionSound() {
    this.isPianoPlaying = false;
    if (this.pianoInterval) {
      clearInterval(this.pianoInterval);
      this.pianoInterval = null;
    }
  }

  // Play a soft chime tone on correct answer
  public playCorrectTone() {
    if (this.isMuted) return;
    const ctx = this.getContext();
    if (!ctx) return;

    try {
      const now = ctx.currentTime;
      // Soft high piano chord (C5, E5, G5)
      this.playPianoNote(523.25, now, 1.5, 0.12);
      this.playPianoNote(659.25, now + 0.1, 1.5, 0.12);
      this.playPianoNote(783.99, now + 0.2, 2.0, 0.15);
    } catch (e) {
      console.warn('Audio play error:', e);
    }
  }

  // Play soft low tone on wrong answer
  public playWrongTone() {
    if (this.isMuted) return;
    const ctx = this.getContext();
    if (!ctx) return;

    try {
      const now = ctx.currentTime;
      // Soft low minor chord
      this.playPianoNote(220.0, now, 1.2, 0.1);
      this.playPianoNote(207.65, now + 0.15, 1.5, 0.1);
    } catch (e) {
      console.warn('Audio play error:', e);
    }
  }

  // Speak female voice welcome greeting "Bem-vindo ao EidQuiz!"
  public speakWelcome(text: string = 'Bem-vindo ao EidQuiz!') {
    if (this.isMuted || typeof window === 'undefined' || !('speechSynthesis' in window)) return;

    try {
      this.getContext();
      if (window.speechSynthesis.paused) {
        window.speechSynthesis.resume();
      }
      window.speechSynthesis.cancel(); // Cancel any ongoing speech

      const speak = () => {
        const utterance = new SpeechSynthesisUtterance(text);
        utterance.lang = 'pt-PT';
        utterance.rate = 0.95;
        utterance.pitch = 1.35; // Higher warm female pitch

        const voices = window.speechSynthesis.getVoices();
        
        // Priority for Portuguese female voice
        const ptVoices = voices.filter(v => v.lang.toLowerCase().startsWith('pt'));
        const femaleVoice = ptVoices.find(v => 
          /female|feminina|luciana|joana|francisca|helena|fernanda|maria|victoria|racquel|camila|soraia|marcia|siri|google/i.test(v.name)
        ) || ptVoices.find(v => !/male|masculino|ricardo|george|felipe|daniel|diego|bruno/i.test(v.name)) 
          || voices.find(v => /female|feminina|samantha|victoria|karen|zira/i.test(v.name))
          || ptVoices[0] 
          || voices[0];

        if (femaleVoice) {
          utterance.voice = femaleVoice;
        }

        if (window.speechSynthesis.paused) {
          window.speechSynthesis.resume();
        }
        window.speechSynthesis.speak(utterance);
      };

      const voices = window.speechSynthesis.getVoices();
      if (!voices || voices.length === 0) {
        window.speechSynthesis.onvoiceschanged = () => {
          speak();
          window.speechSynthesis.onvoiceschanged = null;
        };
        // Fallback speak call after short timeout in case onvoiceschanged does not fire
        setTimeout(() => speak(), 250);
      } else {
        speak();
      }
    } catch (e) {
      console.warn('Speech synthesis error:', e);
    }
  }
}

export const soundEngine = new SoundEngine();

