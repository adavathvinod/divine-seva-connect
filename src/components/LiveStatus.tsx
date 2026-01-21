import { Bell, Clock } from "lucide-react";

export const LiveStatus = () => {
  return (
    <div className="bg-gradient-to-r from-saffron/10 via-gold/10 to-saffron/10 border-y border-gold/30">
      <div className="container mx-auto px-4 py-3">
        <div className="flex items-center justify-center gap-3 text-sm">
          <div className="flex items-center gap-2">
            <span className="relative flex h-3 w-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
            </span>
            <span className="font-medium text-foreground">Live Status</span>
          </div>
          <span className="text-muted-foreground">|</span>
          <div className="flex items-center gap-2 text-muted-foreground">
            <Bell className="h-4 w-4 text-saffron" />
            <span>TTD Quota Available for Special Darshan - Limited Slots!</span>
          </div>
          <span className="hidden md:inline text-muted-foreground">|</span>
          <div className="hidden md:flex items-center gap-2 text-muted-foreground">
            <Clock className="h-4 w-4 text-gold" />
            <span>Updated: Today</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LiveStatus;
