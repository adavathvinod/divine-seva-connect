import { useState, useRef, useEffect } from "react";
import { Play, Pause, Volume2, VolumeX, Music } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Slider } from "@/components/ui/slider";

interface Track {
  title: string;
  artist: string;
  src: string;
}

const devotionalTracks: Track[] = [
  {
    title: "Sri Venkateswara Suprabhatam",
    artist: "M.S. Subbulakshmi",
    src: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3", // Placeholder - replace with actual TTD song URL
  },
  {
    title: "Govinda Govinda",
    artist: "S.P. Balasubrahmanyam",
    src: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-2.mp3", // Placeholder
  },
  {
    title: "Srinivasa Govinda",
    artist: "Traditional",
    src: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-3.mp3", // Placeholder
  },
];

const AudioPlayer = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTrackIndex, setCurrentTrackIndex] = useState(0);
  const [volume, setVolume] = useState(0.7);
  const [isMuted, setIsMuted] = useState(false);
  const [progress, setProgress] = useState(0);
  const [duration, setDuration] = useState(0);
  const audioRef = useRef<HTMLAudioElement>(null);

  const currentTrack = devotionalTracks[currentTrackIndex];

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.volume = isMuted ? 0 : volume;
    }
  }, [volume, isMuted]);

  const togglePlay = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
      } else {
        audioRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  const toggleMute = () => {
    setIsMuted(!isMuted);
  };

  const handleTimeUpdate = () => {
    if (audioRef.current) {
      setProgress(audioRef.current.currentTime);
      setDuration(audioRef.current.duration || 0);
    }
  };

  const handleProgressChange = (value: number[]) => {
    if (audioRef.current) {
      audioRef.current.currentTime = value[0];
      setProgress(value[0]);
    }
  };

  const handleVolumeChange = (value: number[]) => {
    setVolume(value[0]);
    setIsMuted(false);
  };

  const handleTrackEnd = () => {
    const nextIndex = (currentTrackIndex + 1) % devotionalTracks.length;
    setCurrentTrackIndex(nextIndex);
    setIsPlaying(true);
    setTimeout(() => {
      audioRef.current?.play();
    }, 100);
  };

  const selectTrack = (index: number) => {
    setCurrentTrackIndex(index);
    setIsPlaying(true);
    setTimeout(() => {
      audioRef.current?.play();
    }, 100);
  };

  const formatTime = (time: number) => {
    if (isNaN(time)) return "0:00";
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    return `${minutes}:${seconds.toString().padStart(2, "0")}`;
  };

  return (
    <section className="py-12 bg-gradient-to-r from-gold/10 via-saffron/10 to-gold/10">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8">
          <span className="text-saffron font-medium text-sm uppercase tracking-wider">Divine Melodies</span>
          <h2 className="font-serif text-2xl md:text-3xl font-bold text-foreground mt-2">
            TTD Devotional Songs
          </h2>
        </div>

        <div className="max-w-2xl mx-auto">
          {/* Main Player Card */}
          <div className="bg-card rounded-2xl shadow-elevated border border-gold/20 overflow-hidden">
            {/* Now Playing */}
            <div className="gradient-gold p-6 text-center">
              <div className="w-16 h-16 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center mx-auto mb-4">
                <Music className="h-8 w-8 text-primary-foreground" />
              </div>
              <h3 className="font-serif text-xl font-bold text-primary-foreground mb-1">
                {currentTrack.title}
              </h3>
              <p className="text-primary-foreground/80 text-sm">{currentTrack.artist}</p>
            </div>

            {/* Controls */}
            <div className="p-6 space-y-4">
              {/* Progress Bar */}
              <div className="space-y-2">
                <Slider
                  value={[progress]}
                  max={duration || 100}
                  step={1}
                  onValueChange={handleProgressChange}
                  className="cursor-pointer"
                />
                <div className="flex justify-between text-xs text-muted-foreground">
                  <span>{formatTime(progress)}</span>
                  <span>{formatTime(duration)}</span>
                </div>
              </div>

              {/* Play Controls */}
              <div className="flex items-center justify-center gap-4">
                <Button
                  variant="gold"
                  size="lg"
                  onClick={togglePlay}
                  className="w-14 h-14 rounded-full p-0"
                >
                  {isPlaying ? (
                    <Pause className="h-6 w-6" />
                  ) : (
                    <Play className="h-6 w-6 ml-1" />
                  )}
                </Button>
              </div>

              {/* Volume Control */}
              <div className="flex items-center gap-3 max-w-xs mx-auto">
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={toggleMute}
                  className="h-8 w-8"
                >
                  {isMuted || volume === 0 ? (
                    <VolumeX className="h-4 w-4" />
                  ) : (
                    <Volume2 className="h-4 w-4" />
                  )}
                </Button>
                <Slider
                  value={[isMuted ? 0 : volume]}
                  max={1}
                  step={0.01}
                  onValueChange={handleVolumeChange}
                  className="flex-1"
                />
              </div>
            </div>

            {/* Track List */}
            <div className="border-t border-border">
              <div className="p-4">
                <p className="text-sm font-medium text-muted-foreground mb-3">Playlist</p>
                <div className="space-y-2">
                  {devotionalTracks.map((track, index) => (
                    <button
                      key={index}
                      onClick={() => selectTrack(index)}
                      className={`w-full flex items-center gap-3 p-3 rounded-lg transition-all ${
                        currentTrackIndex === index
                          ? "bg-gold/20 border border-gold/30"
                          : "hover:bg-muted"
                      }`}
                    >
                      <div
                        className={`w-8 h-8 rounded-full flex items-center justify-center ${
                          currentTrackIndex === index
                            ? "gradient-gold"
                            : "bg-muted"
                        }`}
                      >
                        {currentTrackIndex === index && isPlaying ? (
                          <Pause className="h-4 w-4 text-primary-foreground" />
                        ) : (
                          <Play className="h-4 w-4 text-primary-foreground ml-0.5" />
                        )}
                      </div>
                      <div className="text-left flex-1">
                        <p
                          className={`font-medium text-sm ${
                            currentTrackIndex === index
                              ? "text-gold-dark"
                              : "text-foreground"
                          }`}
                        >
                          {track.title}
                        </p>
                        <p className="text-xs text-muted-foreground">{track.artist}</p>
                      </div>
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <p className="text-center text-xs text-muted-foreground mt-4">
            🙏 Listen to sacred TTD devotional songs while you browse
          </p>
        </div>

        {/* Hidden Audio Element */}
        <audio
          ref={audioRef}
          src={currentTrack.src}
          onTimeUpdate={handleTimeUpdate}
          onEnded={handleTrackEnd}
          onLoadedMetadata={handleTimeUpdate}
        />
      </div>
    </section>
  );
};

export default AudioPlayer;
