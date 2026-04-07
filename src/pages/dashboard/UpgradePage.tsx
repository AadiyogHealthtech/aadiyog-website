import { useState } from "react";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "../../components/ui/card";
import { Button } from "../../components/ui/button";
import { Check, ArrowLeft } from "lucide-react";
import { Switch } from "../../components/ui/switch";
import { Label } from "../../components/ui/label";

interface UpgradePageProps {
  onNavigate: (page: string) => void;
}

export function UpgradePage({ onNavigate }: UpgradePageProps) {
  const [billingCycle, setBillingCycle] = useState<'monthly' | 'annual'>('monthly');

  const plans = [
    {
      name: "Free",
      price: 0,
      description: "Essential tools for beginners",
      features: [
        "Basic Pose Analysis",
        "3 Workouts per week",
        "Community Access"
      ],
      current: false
    },
    {
      name: "Pro",
      price: billingCycle === 'monthly' ? 29 : 290,
      description: "For dedicated practitioners",
      features: [
        "Unlimited AI Pose Analysis",
        "Personalized Workout Plans",
        "Diet & Nutrition Tracking",
        "Priority Support",
        "Ad-free Experience"
      ],
      current: true,
      popular: true
    },
    {
      name: "Enterprise",
      price: billingCycle === 'monthly' ? 99 : 990,
      description: "For studios and coaches",
      features: [
        "Everything in Pro",
        "Multi-user Management",
        "Analytics Dashboard",
        "White-label Reports",
        "API Access"
      ],
      current: false
    }
  ];

  return (
    <div className="max-w-5xl mx-auto space-y-8">
      <div className="flex items-center gap-4">
        <Button variant="ghost" size="icon" onClick={() => onNavigate('dashboard-subscription')}>
          <ArrowLeft className="h-4 w-4" />
        </Button>
        <div>
          <h2 className="text-3xl font-bold tracking-tight text-foreground">Upgrade Plan</h2>
          <p className="text-muted-foreground">Choose the perfect plan for your wellness journey.</p>
        </div>
      </div>

      {/* Billing Toggle */}
      <div className="flex items-center justify-center gap-4 py-4">
        <Label 
          className={`cursor-pointer ${billingCycle === 'monthly' ? 'text-foreground font-bold' : 'text-muted-foreground'}`}
          onClick={() => setBillingCycle('monthly')}
        >
          Monthly
        </Label>
        <Switch 
          checked={billingCycle === 'annual'}
          onCheckedChange={(c) => setBillingCycle(c ? 'annual' : 'monthly')}
        />
        <Label 
          className={`cursor-pointer ${billingCycle === 'annual' ? 'text-foreground font-bold' : 'text-muted-foreground'}`}
          onClick={() => setBillingCycle('annual')}
        >
          Annual <span className="text-[#f37003] text-xs ml-1 font-normal">(Save 20%)</span>
        </Label>
      </div>

      {/* Plans Grid */}
      <div className="grid md:grid-cols-3 gap-8">
        {plans.map((plan) => (
          <Card 
            key={plan.name} 
            className={`flex flex-col relative ${plan.popular ? 'border-[#f37003] shadow-lg scale-105 z-10' : ''}`}
          >
            {plan.popular && (
              <div className="absolute top-0 inset-x-0 -mt-3 flex justify-center">
                <span className="bg-[#f37003] text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wide">
                  Most Popular
                </span>
              </div>
            )}
            
            <CardHeader>
              <CardTitle className="text-2xl">{plan.name}</CardTitle>
              <CardDescription>{plan.description}</CardDescription>
            </CardHeader>
            <CardContent className="flex-1 space-y-6">
              <div className="flex items-baseline">
                <span className="text-4xl font-bold">${plan.price}</span>
                <span className="text-muted-foreground ml-2">/ {billingCycle === 'monthly' ? 'mo' : 'yr'}</span>
              </div>

              <ul className="space-y-3">
                {plan.features.map((feature, i) => (
                  <li key={i} className="flex items-center text-sm">
                    <Check className="h-4 w-4 text-[#f37003] mr-2 shrink-0" />
                    <span className="text-muted-foreground">{feature}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
            <CardFooter>
              <Button 
                className={`w-full ${plan.current ? 'bg-muted text-muted-foreground' : 'bg-[#f37003] hover:bg-[#d86302]'}`}
                disabled={plan.current}
              >
                {plan.current ? 'Current Plan' : 'Select Plan'}
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>

      {/* Terms */}
      <p className="text-center text-xs text-muted-foreground mt-8">
        By continuing, you agree to our Terms of Service and Privacy Policy. 
        You can cancel anytime from your subscription settings.
      </p>
    </div>
  );
}
