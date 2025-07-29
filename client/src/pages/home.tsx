import { ServerInfo } from "@/components/server-info";
import { FeedbackForm } from "@/components/feedback-form";
import { RecentFeedback } from "@/components/recent-feedback";
import { Box, Clock, Star, MessageSquare } from "lucide-react";

export default function Home() {
  return (
    <div className="min-h-screen bg-[var(--minecraft-dark)] text-white">
      {/* Header */}
      <header className="bg-[var(--minecraft-gray)] border-b-4 border-[var(--minecraft-green)] shadow-lg">
        <div className="container mx-auto px-4 py-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <div className="w-12 h-12 bg-[var(--minecraft-green)] pixelated flex items-center justify-center rounded">
                <Box className="text-white text-xl" />
              </div>
              <div>
                <h1 className="font-minecraft text-[var(--minecraft-bright-green)] text-xl lg:text-2xl">
                  BadWolf24PS
                </h1>
                <p className="text-gray-400 text-sm font-gaming">Minecraft Server</p>
              </div>
            </div>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8">
        {/* Server Information */}
        <section className="mb-8">
          <div className="minecraft-card p-6">
            <h2 className="font-minecraft text-[var(--minecraft-bright-green)] text-lg mb-6 flex items-center">
              <Box className="mr-3" />
              Server Information
            </h2>
            <ServerInfo />
          </div>
        </section>

        {/* Server Schedule */}
        <section className="mb-8">
          <div className="minecraft-card p-6">
            <h2 className="font-minecraft text-[var(--minecraft-bright-green)] text-lg mb-6 flex items-center">
              <Clock className="mr-3" />
              Server Schedule
            </h2>
            
            <div className="bg-[var(--minecraft-dark)] p-6 rounded-lg border border-[var(--minecraft-green)]">
              <div className="text-center mb-4">
                <div className="text-3xl font-gaming text-[var(--minecraft-bright-green)] mb-2">
                  8:00 AM - 12:00 PM
                </div>
                <div className="text-gray-400 font-gaming">Daily Server Hours</div>
              </div>
              
              <div className="grid md:grid-cols-3 gap-4 mt-6">
                <div className="text-center p-4 bg-[var(--minecraft-gray)] rounded-lg border border-[var(--minecraft-green)]">
                  <div className="text-yellow-400 text-2xl mb-2">☀️</div>
                  <div className="font-gaming text-[var(--minecraft-bright-green)]">Opens: 8:00 AM</div>
                  <div className="text-sm text-gray-400">Server Start Time</div>
                </div>
                <div className="text-center p-4 bg-[var(--minecraft-gray)] rounded-lg border border-[var(--minecraft-green)]">
                  <div className="text-[var(--minecraft-bright-green)] text-2xl mb-2">⏳</div>
                  <div className="font-gaming text-white">4 Hours Daily</div>
                  <div className="text-sm text-gray-400">Session Duration</div>
                </div>
                <div className="text-center p-4 bg-[var(--minecraft-gray)] rounded-lg border border-[var(--minecraft-green)]">
                  <div className="text-blue-400 text-2xl mb-2">🌙</div>
                  <div className="font-gaming text-[var(--minecraft-bright-green)]">Closes: 12:00 PM</div>
                  <div className="text-sm text-gray-400">Server End Time</div>
                </div>
              </div>
              
              <div className="mt-6 text-center p-4 bg-[var(--minecraft-green)] rounded-lg">
                <div className="font-gaming text-white">
                  Current Server Time: {new Date().toLocaleTimeString('en-US', { 
                    hour: 'numeric', 
                    minute: '2-digit',
                    hour12: true 
                  })}
                </div>
                <div className="text-sm text-green-100 mt-1">
                  Status: <span className="font-bold">ACTIVE</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Feedback Form */}
        <section className="mb-8">
          <div className="minecraft-card p-6">
            <h2 className="font-minecraft text-[var(--minecraft-bright-green)] text-lg mb-6 flex items-center">
              <Star className="mr-3" />
              Rate Our Server
            </h2>
            <FeedbackForm />
          </div>
        </section>

        {/* Recent Feedback */}
        <section className="mb-8">
          <div className="minecraft-card p-6">
            <h2 className="font-minecraft text-[var(--minecraft-bright-green)] text-lg mb-6 flex items-center">
              <MessageSquare className="mr-3" />
              Recent Player Reviews
            </h2>
            <RecentFeedback />
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-[var(--minecraft-gray)] border-t-4 border-[var(--minecraft-green)] mt-12">
        <div className="container mx-auto px-4 py-8">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <h3 className="font-minecraft text-[var(--minecraft-bright-green)] mb-4">BadWolf24PS</h3>
              <p className="text-gray-400 text-sm font-gaming">
                Premium Minecraft server experience with daily sessions from 8 AM to 12 PM.
              </p>
            </div>
            <div>
              <h4 className="font-gaming text-[var(--minecraft-bright-green)] mb-4">Quick Links</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="#" className="text-gray-400 hover:text-[var(--minecraft-bright-green)] transition-colors">Server Rules</a></li>
                <li><a href="#" className="text-gray-400 hover:text-[var(--minecraft-bright-green)] transition-colors">Discord Community</a></li>
                <li><a href="https://aternos.org" className="text-gray-400 hover:text-[var(--minecraft-bright-green)] transition-colors">Aternos Panel</a></li>
                <li><a href="#" className="text-gray-400 hover:text-[var(--minecraft-bright-green)] transition-colors">Ban Appeals</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-gaming text-[var(--minecraft-bright-green)] mb-4">Server Info</h4>
              <div className="space-y-2 text-sm text-gray-400">
                <div>Version: <span className="text-white">1.20.1</span></div>
                <div>Max Players: <span className="text-white">20</span></div>
                <div>Game Mode: <span className="text-white">Survival</span></div>
                <div>Difficulty: <span className="text-white">Normal</span></div>
              </div>
            </div>
          </div>
          <div className="border-t border-[var(--minecraft-green)] mt-8 pt-8 text-center">
            <p className="text-gray-400 text-sm font-gaming">
              © 2024 BadWolf24PS Minecraft Server. Powered by{" "}
              <a href="https://aternos.org" className="text-[var(--minecraft-bright-green)] hover:underline">
                Aternos
              </a>
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
