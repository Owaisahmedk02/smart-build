import { MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

const ChatButton = () => {
  return (
    <Button
      size="lg"
      className="fixed bottom-6 right-6 z-50 rounded-full h-14 w-14 p-0 bg-accent hover:bg-accent-muted text-primary shadow-gold hover:shadow-xl transition-smooth hover:scale-110 animate-bounce"
      aria-label="Chat with an agent"
    >
      <MessageCircle className="h-6 w-6" />
    </Button>
  );
};

export default ChatButton;
