import { useState } from "react";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "../../components/ui/card";
import { Button } from "../../components/ui/button";
import { RadioGroup, RadioGroupItem } from "../../components/ui/radio-group";
import { Label } from "../../components/ui/label";
import { Textarea } from "../../components/ui/textarea";
import { AlertTriangle, ArrowLeft } from "lucide-react";
import { Alert, AlertDescription, AlertTitle } from "../../components/ui/alert";

interface CancellationPageProps {
  onNavigate: (page: string) => void;
}

export function CancellationPage({ onNavigate }: CancellationPageProps) {
  const [step, setStep] = useState(1);
  const [reason, setReason] = useState("");

  const reasons = [
    "Too expensive",
    "Not using it enough",
    "Missing features",
    "Found a better alternative",
    "Technical issues",
    "Other"
  ];

  if (step === 1) {
    return (
      <div className="max-w-2xl mx-auto space-y-6">
        <Button variant="ghost" className="pl-0" onClick={() => onNavigate('dashboard-subscription')}>
          <ArrowLeft className="mr-2 h-4 w-4" /> Back to Subscription
        </Button>
        
        <Card>
          <CardHeader>
            <CardTitle>We're sorry to see you go</CardTitle>
            <p className="text-muted-foreground">
              Please let us know why you're cancelling so we can improve our service.
            </p>
          </CardHeader>
          <CardContent className="space-y-6">
            <RadioGroup value={reason} onValueChange={setReason}>
              {reasons.map((r) => (
                <div key={r} className="flex items-center space-x-2">
                  <RadioGroupItem value={r} id={r} />
                  <Label htmlFor={r}>{r}</Label>
                </div>
              ))}
            </RadioGroup>
            
            <div className="space-y-2">
              <Label>Anything else you'd like to share?</Label>
              <Textarea placeholder="Your feedback helps us improve..." />
            </div>
          </CardContent>
          <CardFooter className="flex justify-between">
            <Button variant="ghost" onClick={() => onNavigate('dashboard-subscription')}>
              Nevermind, stay subscribed
            </Button>
            <Button 
              variant="destructive" 
              disabled={!reason}
              onClick={() => setStep(2)}
            >
              Continue to Cancel
            </Button>
          </CardFooter>
        </Card>
      </div>
    );
  }

  return (
    <div className="max-w-2xl mx-auto space-y-6">
      <Button variant="ghost" className="pl-0" onClick={() => setStep(1)}>
        <ArrowLeft className="mr-2 h-4 w-4" /> Back
      </Button>

      <Card className="border-destructive/20 bg-destructive/5">
        <CardHeader>
          <CardTitle className="text-destructive flex items-center gap-2">
            <AlertTriangle className="h-5 w-5" />
            Final Confirmation
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <p className="font-medium">If you cancel now, you will lose access to:</p>
          <ul className="list-disc list-inside space-y-1 text-sm text-muted-foreground ml-4">
            <li>Premium AI Analysis features</li>
            <li>Your personalized workout history</li>
            <li>Saved nutrition plans</li>
            <li>Priority support</li>
          </ul>
          
          <Alert className="bg-white border-blue-200">
            <AlertTitle className="text-blue-800">Wait! A special offer for you</AlertTitle>
            <AlertDescription className="text-blue-600">
              Get 50% off your next 3 months if you stay today.
            </AlertDescription>
          </Alert>
        </CardContent>
        <CardFooter className="flex flex-col sm:flex-row gap-4">
          <Button 
            className="w-full bg-[#f37003] hover:bg-[#d86302]"
            onClick={() => onNavigate('dashboard-subscription')}
          >
            Claim Offer & Stay
          </Button>
          <Button 
            variant="outline" 
            className="w-full border-destructive text-destructive hover:bg-destructive/10"
            onClick={() => {
              // Handle actual cancellation here
              alert("Subscription cancelled");
              onNavigate('dashboard-subscription');
            }}
          >
            Confirm Cancellation
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
}
