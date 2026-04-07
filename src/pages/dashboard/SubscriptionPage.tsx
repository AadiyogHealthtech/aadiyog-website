import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "../../components/ui/card";
import { Button } from "../../components/ui/button";
import { Badge } from "../../components/ui/badge";
import { Check, AlertTriangle, CreditCard, Calendar } from "lucide-react";

interface SubscriptionPageProps {
  onNavigate: (page: string) => void;
}

export function SubscriptionPage({ onNavigate }: SubscriptionPageProps) {
  return (
    <div className="space-y-8">
      <div>
        <h2 className="text-3xl font-bold tracking-tight text-foreground">Subscription</h2>
        <p className="text-muted-foreground mt-1">
          Manage your plan, billing cycle, and payment methods.
        </p>
      </div>

      <div className="grid gap-8 md:grid-cols-3">
        {/* Current Plan Card */}
        <Card className="md:col-span-2 border-[#f37003]/20 shadow-sm relative overflow-hidden">
          <div className="absolute top-0 right-0 p-4">
            <Badge className="bg-[#f37003] hover:bg-[#d86302]">Active</Badge>
          </div>
          <CardHeader>
            <CardTitle className="text-2xl">Pro Plan</CardTitle>
            <CardDescription>Billed monthly</CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="flex items-baseline">
              <span className="text-4xl font-bold text-foreground">$29</span>
              <span className="text-muted-foreground ml-2">/ month</span>
            </div>
            
            <div className="space-y-2">
              <h4 className="text-sm font-medium text-foreground">Includes:</h4>
              <ul className="grid gap-2 sm:grid-cols-2">
                {[
                  "Unlimited AI Pose Analysis",
                  "Personalized Workout Plans",
                  "Advanced Progress Tracking",
                  "Diet & Nutrition Logs",
                  "Priority Support",
                  "Ad-free Experience"
                ].map((feature, i) => (
                  <li key={i} className="flex items-center text-sm text-muted-foreground">
                    <Check className="h-4 w-4 text-[#f37003] mr-2" />
                    {feature}
                  </li>
                ))}
              </ul>
            </div>

            <div className="flex items-center gap-2 text-sm text-muted-foreground bg-muted/30 p-3 rounded-lg">
              <Calendar className="h-4 w-4" />
              <span>Next billing date: <span className="font-medium text-foreground">March 8, 2026</span></span>
            </div>
          </CardContent>
          <CardFooter className="flex flex-col sm:flex-row gap-4 border-t bg-muted/10 p-6">
            <Button 
              className="w-full sm:w-auto bg-[#f37003] hover:bg-[#d86302]"
              onClick={() => onNavigate('dashboard-upgrade')}
            >
              Change Plan
            </Button>
            <Button 
              variant="outline" 
              className="w-full sm:w-auto"
              onClick={() => onNavigate('dashboard-cancel')}
            >
              Cancel Subscription
            </Button>
          </CardFooter>
        </Card>

        {/* Payment Method Card */}
        <Card>
          <CardHeader>
            <CardTitle>Payment Method</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex items-center gap-4 p-4 border rounded-lg">
              <div className="h-10 w-10 rounded-md bg-muted flex items-center justify-center">
                <CreditCard className="h-5 w-5 text-foreground" />
              </div>
              <div className="flex-1">
                <p className="text-sm font-medium">Visa ending in 4242</p>
                <p className="text-xs text-muted-foreground">Expires 12/28</p>
              </div>
            </div>
          </CardContent>
          <CardFooter>
            <Button variant="outline" className="w-full">
              Update Payment Method
            </Button>
          </CardFooter>
        </Card>
      </div>

      {/* Usage/Limits (Optional) */}
      <Card>
        <CardHeader>
          <CardTitle>Usage limits</CardTitle>
          <CardDescription>Your current plan usage for this billing cycle</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-2">
            <div className="flex justify-between text-sm">
              <span className="font-medium">AI Analysis Minutes</span>
              <span className="text-muted-foreground">450 / 1000 mins</span>
            </div>
            <div className="h-2 bg-muted rounded-full overflow-hidden">
              <div className="h-full bg-[#f37003] w-[45%]" />
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
