import { useState } from "react";
import { Music, Play } from "lucide-react";

interface Track {
  title: string;
  artist: string;
  youtubeId: string;
}

const devotionalTracks: Track[] = [
  {
    title: "Sri Venkateswara Suprabhatam",
    artist: "M.S. Subbulakshmi",
    youtubeId: "F2HOrJqpMy4",
  },
  {
    title: "Govinda Namalu",
    artist: "S.P. Balasubrahmanyam",
    youtubeId: "OU5XH6nqT2U",
  },
  {
    title: "Sri Venkateswara Stotram",
    artist: "Traditional",
    youtubeId: "7QqNXEshako",
  },
];

const AudioPlayer = () => {
  const [currentTrackIndex, setCurrentTrackIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);

  const currentTrack = devotionalTracks[currentTrackIndex];

  const selectTrack = (index: number) => {
    setCurrentTrackIndex(index);
    setIsPlaying(true);
  };

  const startPlaying = () => {
    setIsPlaying(true);
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

        <div className="max-w-3xl mx-auto">
          {/* Main Player Card */}
          <div className="bg-card rounded-2xl shadow-elevated border border-gold/20 overflow-hidden">
            {/* YouTube Player */}
            <div className="relative aspect-video bg-black">
              {isPlaying ? (
                <iframe
                  src={`https://www.youtube.com/embed/${currentTrack.youtubeId}?autoplay=1&rel=0`}
                  title={currentTrack.title}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="w-full h-full"
                />
              ) : (
                <div 
                  className="w-full h-full flex flex-col items-center justify-center cursor-pointer group"
                  onClick={startPlaying}
                >
                  <div 
                    className="absolute inset-0 bg-cover bg-center opacity-50"
                    style={{ backgroundImage: `url(https://img.youtube.com/vi/${currentTrack.youtubeId}/maxresdefault.jpg)` }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-black/60" />
                  <div className="relative z-10 flex flex-col items-center">
                    <div className="w-20 h-20 rounded-full gradient-gold flex items-center justify-center mb-4 group-hover:scale-110 transition-transform shadow-lg">
                      <Play className="h-10 w-10 text-primary-foreground ml-1" />
                    </div>
                    <h3 className="font-serif text-xl md:text-2xl font-bold text-white mb-1 text-center px-4">
                      {currentTrack.title}
                    </h3>
                    <p className="text-white/80 text-sm">{currentTrack.artist}</p>
                    <p className="text-gold-light text-xs mt-2">Click to Play</p>
                  </div>
                </div>
              )}
            </div>

            {/* Now Playing Info (when playing) */}
            {isPlaying && (
              <div className="gradient-gold p-4 text-center">
                <div className="flex items-center justify-center gap-2">
                  <Music className="h-5 w-5 text-primary-foreground" />
                  <span className="font-serif text-lg font-bold text-primary-foreground">
                    Now Playing: {currentTrack.title}
                  </span>
                </div>
              </div>
            )}

            {/* Track List */}
            <div className="p-4">
              <p className="text-sm font-medium text-muted-foreground mb-3">🎵 Devotional Playlist</p>
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
                    <div className="w-12 h-12 rounded-lg overflow-hidden flex-shrink-0">
                      <img
                        src={`https://img.youtube.com/vi/${track.youtubeId}/mqdefault.jpg`}
                        alt={track.title}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="text-left flex-1 min-w-0">
                      <p
                        className={`font-medium text-sm truncate ${
                          currentTrackIndex === index
                            ? "text-gold-dark"
                            : "text-foreground"
                        }`}
                      >
                        {track.title}
                      </p>
                      <p className="text-xs text-muted-foreground">{track.artist}</p>
                    </div>
                    {currentTrackIndex === index && isPlaying && (
                      <div className="flex items-center gap-0.5">
                        <span className="w-1 h-3 bg-gold rounded-full animate-pulse"></span>
                        <span className="w-1 h-4 bg-gold rounded-full animate-pulse" style={{ animationDelay: '0.2s' }}></span>
                        <span className="w-1 h-2 bg-gold rounded-full animate-pulse" style={{ animationDelay: '0.4s' }}></span>
                      </div>
                    )}
                  </button>
                ))}
              </div>
            </div>
          </div>

          <p className="text-center text-xs text-muted-foreground mt-4">
            🙏 Listen to sacred TTD devotional songs while you browse
          </p>
        </div>
      </div>
    </section>
  );
};

export default AudioPlayer;
