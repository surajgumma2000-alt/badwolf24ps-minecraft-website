import { useQuery } from "@tanstack/react-query";
import { Copy, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";
import type { ServerStatus } from "@shared/schema";

export function ServerInfo() {
  const { toast } = useToast();
  
  const { data: serverStatus, isLoading } = useQuery<ServerStatus>({
    queryKey: ["/api/server-status"],
    refetchInterval: 30000, // Refresh every 30 seconds
  });

  const copyServerInfo = async () => {
    const serverInfo = "ip-badwolf24ps.aternos:57180";
    try {
      await navigator.clipboard.writeText(serverInfo);
      toast({
        title: "Copied!",
        description: "Server IP copied to clipboard",
      });
    } catch (error) {
      toast({
        title: "Copy Failed",
        description: "Could not copy to clipboard. Server IP: " + serverInfo,
        variant: "destructive",
      });
    }
  };

  if (isLoading) {
    return (
      <div className="animate-pulse">
        <div className="grid md:grid-cols-2 gap-6">
          <div className="space-y-4">
            <div className="connection-info p-4 rounded-lg">
              <div className="h-4 bg-gray-600 rounded mb-3"></div>
              <div className="space-y-2">
                <div className="h-3 bg-gray-700 rounded"></div>
                <div className="h-3 bg-gray-700 rounded"></div>
                <div className="h-3 bg-gray-700 rounded"></div>
              </div>
            </div>
          </div>
          <div className="space-y-4">
            <div className="bg-[var(--minecraft-dark)] p-4 rounded-lg border border-[var(--minecraft-green)]">
              <div className="h-4 bg-gray-600 rounded mb-3"></div>
              <div className="grid grid-cols-2 gap-4">
                <div className="h-12 bg-gray-700 rounded"></div>
                <div className="h-12 bg-gray-700 rounded"></div>
                <div className="h-12 bg-gray-700 rounded"></div>
                <div className="h-12 bg-gray-700 rounded"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="grid md:grid-cols-2 gap-6">
      {/* Connection Details */}
      <div className="space-y-4">
        <div className="connection-info p-4 rounded-lg">
          <h3 className="font-gaming text-[var(--minecraft-bright-green)] mb-3">Connection Details</h3>
          <div className="space-y-2 text-sm">
            <div className="flex justify-between">
              <span className="text-gray-400">Server IP:</span>
              <span className="text-white font-mono">ip-badwolf24ps.aternos</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-400">Port:</span>
              <span className="text-white font-mono">57180</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-400">Version:</span>
              <span className="text-white">{serverStatus?.version || "1.20.1"}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-400">Status:</span>
              <span className={`font-bold ${serverStatus?.isOnline ? "text-[var(--server-online)]" : "text-[var(--server-offline)]"}`}>
                {serverStatus?.isOnline ? "ONLINE" : "OFFLINE"}
              </span>
            </div>
          </div>
          <Button 
            onClick={copyServerInfo}
            className="minecraft-button w-full mt-4 py-2 px-4 text-white font-gaming"
          >
            <Copy className="w-4 h-4 mr-2" />
            Copy Server IP
          </Button>
        </div>
      </div>
      
      {/* Server Statistics */}
      <div className="space-y-4">
        <div className="bg-[var(--minecraft-dark)] p-4 rounded-lg border border-[var(--minecraft-green)]">
          <h3 className="font-gaming text-[var(--minecraft-bright-green)] mb-3">Server Stats</h3>
          <div className="grid grid-cols-2 gap-4 text-center">
            <div>
              <div className="text-2xl font-gaming text-white">
                {serverStatus?.onlinePlayers || 0}
              </div>
              <div className="text-xs text-gray-400">Players Online</div>
            </div>
            <div>
              <div className="text-2xl font-gaming text-white">
                {serverStatus?.maxPlayers || 20}
              </div>
              <div className="text-xs text-gray-400">Max Players</div>
            </div>
            <div>
              <div className="text-2xl font-gaming text-[var(--minecraft-bright-green)]">
                {serverStatus?.uptime || 98}%
              </div>
              <div className="text-xs text-gray-400">Uptime</div>
            </div>
            <div>
              <div className="text-2xl font-gaming text-[var(--minecraft-bright-green)]">
                {serverStatus?.ping || 45}ms
              </div>
              <div className="text-xs text-gray-400">Ping</div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Quick Connect Button */}
      <div className="md:col-span-2 text-center mt-6">
        <a 
          href="https://aternos.org" 
          target="_blank" 
          rel="noopener noreferrer"
          className="minecraft-button inline-flex items-center px-6 py-3 text-white font-gaming"
        >
          <ExternalLink className="w-4 h-4 mr-2" />
          Connect via Aternos
        </a>
      </div>
    </div>
  );
}
