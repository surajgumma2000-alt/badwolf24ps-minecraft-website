import { useQuery } from "@tanstack/react-query";
import { Star } from "lucide-react";
import type { Feedback } from "@shared/schema";

export function RecentFeedback() {
  const { data: feedback, isLoading } = useQuery<Feedback[]>({
    queryKey: ["/api/feedback"],
    refetchInterval: 60000, // Refresh every minute
  });

  const renderStars = (rating: number) => {
    return (
      <div className="flex text-yellow-400">
        {[1, 2, 3, 4, 5].map((star) => (
          <Star
            key={star}
            className={`w-4 h-4 ${star <= rating ? "fill-current" : "text-gray-600"}`}
          />
        ))}
      </div>
    );
  };

  const formatDate = (dateString: string | Date) => {
    const date = new Date(dateString);
    const now = new Date();
    const diffTime = Math.abs(now.getTime() - date.getTime());
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    
    if (diffDays === 1) return "1 day ago";
    if (diffDays < 7) return `${diffDays} days ago`;
    if (diffDays < 14) return "1 week ago";
    if (diffDays < 30) return `${Math.floor(diffDays / 7)} weeks ago`;
    return date.toLocaleDateString();
  };

  const getInitial = (username: string) => {
    return username.charAt(0).toUpperCase();
  };

  if (isLoading) {
    return (
      <div className="space-y-4">
        {[1, 2, 3].map((i) => (
          <div key={i} className="bg-[var(--minecraft-dark)] p-4 rounded-lg border border-[var(--minecraft-green)] animate-pulse">
            <div className="flex items-center justify-between mb-2">
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 bg-gray-600 rounded"></div>
                <div className="h-4 bg-gray-600 rounded w-24"></div>
              </div>
              <div className="h-4 bg-gray-600 rounded w-20"></div>
            </div>
            <div className="h-3 bg-gray-700 rounded mb-2"></div>
            <div className="h-3 bg-gray-700 rounded w-20"></div>
          </div>
        ))}
      </div>
    );
  }

  if (!feedback || feedback.length === 0) {
    return (
      <div className="text-center py-8">
        <p className="text-gray-400 font-gaming">No reviews yet. Be the first to leave feedback!</p>
      </div>
    );
  }

  return (
    <div className="space-y-4">
      {feedback.map((review) => (
        <div key={review.id} className="bg-[var(--minecraft-dark)] p-4 rounded-lg border border-[var(--minecraft-green)]">
          <div className="flex items-center justify-between mb-2">
            <div className="flex items-center space-x-3">
              <div className="w-8 h-8 bg-[var(--minecraft-green)] rounded pixelated flex items-center justify-center">
                <span className="text-white text-xs font-minecraft">
                  {getInitial(review.minecraftUsername)}
                </span>
              </div>
              <span className="font-gaming text-[var(--minecraft-bright-green)]">
                {review.minecraftUsername}
              </span>
            </div>
            {renderStars(review.overallRating)}
          </div>
          
          {review.feedbackText && (
            <p className="text-gray-300 text-sm mb-2">"{review.feedbackText}"</p>
          )}
          
          {review.suggestions && (
            <p className="text-gray-400 text-sm italic mb-2">
              Suggestion: {review.suggestions}
            </p>
          )}
          
          <div className="flex justify-between items-center">
            <div className="text-xs text-gray-500">
              {formatDate(review.createdAt)}
            </div>
            
            {review.playDuration && (
              <div className="text-xs text-gray-500">
                {review.playDuration === "new" && "New Player"}
                {review.playDuration === "regular" && "Regular Player"}
                {review.playDuration === "veteran" && "Veteran Player"}
              </div>
            )}
          </div>
          
          {(review.performanceRating || review.communityRating) && (
            <div className="mt-2 pt-2 border-t border-gray-600 flex space-x-4 text-xs">
              {review.performanceRating && (
                <span className="text-gray-400">
                  Performance: {review.performanceRating}/5
                </span>
              )}
              {review.communityRating && (
                <span className="text-gray-400">
                  Community: {review.communityRating}/5
                </span>
              )}
            </div>
          )}
        </div>
      ))}
    </div>
  );
}
