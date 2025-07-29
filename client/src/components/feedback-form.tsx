import { useState } from "react";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Star, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { useToast } from "@/hooks/use-toast";
import { apiRequest } from "@/lib/queryClient";
import { insertFeedbackSchema } from "@shared/schema";

const feedbackFormSchema = insertFeedbackSchema.extend({
  overallRating: z.number().min(1, "Please select a rating").max(5),
  minecraftUsername: z.string().min(1, "Username is required"),
});

type FeedbackFormData = z.infer<typeof feedbackFormSchema>;

export function FeedbackForm() {
  const [selectedRating, setSelectedRating] = useState(0);
  const { toast } = useToast();
  const queryClient = useQueryClient();

  const form = useForm<FeedbackFormData>({
    resolver: zodResolver(feedbackFormSchema),
    defaultValues: {
      minecraftUsername: "",
      overallRating: 0,
      performanceRating: undefined,
      communityRating: undefined,
      playDuration: "",
      feedbackText: "",
      suggestions: "",
    },
  });

  const submitFeedback = useMutation({
    mutationFn: async (data: FeedbackFormData) => {
      const response = await apiRequest("POST", "/api/feedback", data);
      return response.json();
    },
    onSuccess: () => {
      toast({
        title: "Thank you!",
        description: "Your feedback has been submitted successfully.",
      });
      form.reset();
      setSelectedRating(0);
      queryClient.invalidateQueries({ queryKey: ["/api/feedback"] });
    },
    onError: (error) => {
      toast({
        title: "Submission Failed",
        description: "Failed to submit feedback. Please try again.",
        variant: "destructive",
      });
      console.error("Feedback submission error:", error);
    },
  });

  const onSubmit = (data: FeedbackFormData) => {
    if (selectedRating === 0) {
      toast({
        title: "Rating Required",
        description: "Please select a rating before submitting.",
        variant: "destructive",
      });
      return;
    }
    
    submitFeedback.mutate({
      ...data,
      overallRating: selectedRating,
    });
  };

  const StarRating = () => {
    const ratingLabels = ["", "Poor", "Fair", "Good", "Very Good", "Excellent"];
    
    return (
      <div>
        <label className="block text-[var(--minecraft-bright-green)] font-gaming mb-3">Overall Rating</label>
        <div className="flex space-x-2 mb-4">
          {[1, 2, 3, 4, 5].map((rating) => (
            <Star
              key={rating}
              className={`w-8 h-8 cursor-pointer transition-colors ${
                rating <= selectedRating ? "text-yellow-400 fill-current" : "text-gray-600"
              }`}
              onClick={() => {
                setSelectedRating(rating);
                form.setValue("overallRating", rating);
              }}
            />
          ))}
        </div>
        <div className="text-sm text-gray-400">
          {selectedRating > 0 ? `${ratingLabels[selectedRating]} (${selectedRating}/5)` : "Click stars to rate"}
        </div>
      </div>
    );
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
        {/* Star Rating */}
        <StarRating />
        
        {/* Category Ratings */}
        <div className="grid md:grid-cols-2 gap-6">
          <FormField
            control={form.control}
            name="performanceRating"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-[var(--minecraft-bright-green)] font-gaming">
                  Server Performance
                </FormLabel>
                <Select onValueChange={(value) => field.onChange(parseInt(value))}>
                  <FormControl>
                    <SelectTrigger className="w-full bg-[var(--minecraft-dark)] border border-[var(--minecraft-green)] text-white font-gaming">
                      <SelectValue placeholder="Select Rating" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    <SelectItem value="5">Excellent (5/5)</SelectItem>
                    <SelectItem value="4">Good (4/5)</SelectItem>
                    <SelectItem value="3">Average (3/5)</SelectItem>
                    <SelectItem value="2">Below Average (2/5)</SelectItem>
                    <SelectItem value="1">Poor (1/5)</SelectItem>
                  </SelectContent>
                </Select>
                <FormMessage />
              </FormItem>
            )}
          />
          
          <FormField
            control={form.control}
            name="communityRating"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-[var(--minecraft-bright-green)] font-gaming">
                  Community
                </FormLabel>
                <Select onValueChange={(value) => field.onChange(parseInt(value))}>
                  <FormControl>
                    <SelectTrigger className="w-full bg-[var(--minecraft-dark)] border border-[var(--minecraft-green)] text-white font-gaming">
                      <SelectValue placeholder="Select Rating" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    <SelectItem value="5">Excellent (5/5)</SelectItem>
                    <SelectItem value="4">Good (4/5)</SelectItem>
                    <SelectItem value="3">Average (3/5)</SelectItem>
                    <SelectItem value="2">Below Average (2/5)</SelectItem>
                    <SelectItem value="1">Poor (1/5)</SelectItem>
                  </SelectContent>
                </Select>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
        
        {/* User Info */}
        <div className="grid md:grid-cols-2 gap-6">
          <FormField
            control={form.control}
            name="minecraftUsername"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-[var(--minecraft-bright-green)] font-gaming">
                  Minecraft Username
                </FormLabel>
                <FormControl>
                  <Input
                    {...field}
                    placeholder="Enter your username"
                    className="w-full bg-[var(--minecraft-dark)] border border-[var(--minecraft-green)] text-white font-gaming placeholder-gray-400"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          
          <FormField
            control={form.control}
            name="playDuration"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-[var(--minecraft-bright-green)] font-gaming">
                  How long have you been playing?
                </FormLabel>
                <Select onValueChange={field.onChange}>
                  <FormControl>
                    <SelectTrigger className="w-full bg-[var(--minecraft-dark)] border border-[var(--minecraft-green)] text-white font-gaming">
                      <SelectValue placeholder="Select Duration" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    <SelectItem value="new">New Player (&lt; 1 week)</SelectItem>
                    <SelectItem value="regular">Regular (1 week - 1 month)</SelectItem>
                    <SelectItem value="veteran">Veteran (1+ months)</SelectItem>
                  </SelectContent>
                </Select>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
        
        {/* Feedback Text */}
        <FormField
          control={form.control}
          name="feedbackText"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-[var(--minecraft-bright-green)] font-gaming">
                Your Feedback
              </FormLabel>
              <FormControl>
                <Textarea
                  {...field}
                  value={field.value || ""}
                  rows={4}
                  placeholder="Tell us about your experience on BadWolf24PS server..."
                  className="w-full bg-[var(--minecraft-dark)] border border-[var(--minecraft-green)] text-white font-gaming placeholder-gray-400 resize-none"
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        
        {/* Suggestions */}
        <FormField
          control={form.control}
          name="suggestions"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-[var(--minecraft-bright-green)] font-gaming">
                Suggestions for Improvement
              </FormLabel>
              <FormControl>
                <Textarea
                  {...field}
                  value={field.value || ""}
                  rows={3}
                  placeholder="Any suggestions to make our server better?"
                  className="w-full bg-[var(--minecraft-dark)] border border-[var(--minecraft-green)] text-white font-gaming placeholder-gray-400 resize-none"
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        
        {/* Submit Button */}
        <div className="text-center">
          <Button
            type="submit"
            disabled={submitFeedback.isPending}
            className="minecraft-button px-8 py-3 text-white font-gaming"
          >
            <Send className="w-4 h-4 mr-2" />
            {submitFeedback.isPending ? "Submitting..." : "Submit Feedback"}
          </Button>
        </div>
      </form>
    </Form>
  );
}
