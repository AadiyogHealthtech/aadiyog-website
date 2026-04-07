import { Card, CardContent, CardHeader, CardTitle } from "../../components/ui/card";
import { Button } from "../../components/ui/button";
import { ArrowRight, Calendar, CreditCard, Activity, TrendingUp, Settings } from "lucide-react";

interface DashboardHomeProps {
  onNavigate: (page: string) => void;
}

export function DashboardHome({ onNavigate }: DashboardHomeProps) {
  return (
    <div className="space-y-8">
      {/* Welcome Section */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h2 className="text-3xl font-bold tracking-tight text-foreground">
            Welcome back, Priya
          </h2>
          <p className="text-muted-foreground mt-1">
            Here's an overview of your wellness journey.
          </p>
        </div>
        <Button 
          onClick={() => onNavigate('dashboard-upgrade')}
          className="bg-[#f37003] hover:bg-[#d86302] text-white"
        >
          Upgrade Plan
        </Button>
      </div>

      {/* Stats Cards */}
      <div className="grid gap-4 md:grid-cols-3">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Current Plan</CardTitle>
            <CreditCard className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">Pro Plan</div>
            <p className="text-xs text-muted-foreground">
              Renews on March 8, 2026
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Workout Streak</CardTitle>
            <Activity className="h-4 w-4 text-[#f37003]" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">12 Days</div>
            <p className="text-xs text-muted-foreground">
              Keep it up! Personal best: 15
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Next Session</CardTitle>
            <Calendar className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">Today, 6 PM</div>
            <p className="text-xs text-muted-foreground">
              Hatha Yoga with AI Coach
            </p>
          </CardContent>
        </Card>
      </div>

      {/* Recent Activity */}
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-7">
        <Card className="col-span-4">
          <CardHeader>
            <CardTitle>Recent Activity</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-8">
              {[
                {
                  title: "Completed Morning Yoga Flow",
                  time: "2 hours ago",
                  icon: Activity,
                  color: "text-green-500",
                  bg: "bg-green-500/10"
                },
                {
                  title: "Plan Renewal Successful",
                  time: "Yesterday",
                  icon: CreditCard,
                  color: "text-blue-500",
                  bg: "bg-blue-500/10"
                },
                {
                  title: "New Personal Best: Tree Pose",
                  time: "2 days ago",
                  icon: TrendingUp,
                  color: "text-[#f37003]",
                  bg: "bg-[#f37003]/10"
                }
              ].map((activity, i) => (
                <div key={i} className="flex items-center">
                  <div className={`h-9 w-9 rounded-full ${activity.bg} flex items-center justify-center mr-4`}>
                    <activity.icon className={`h-4 w-4 ${activity.color}`} />
                  </div>
                  <div className="space-y-1">
                    <p className="text-sm font-medium leading-none">{activity.title}</p>
                    <p className="text-xs text-muted-foreground">{activity.time}</p>
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-6">
              <Button variant="outline" className="w-full text-xs h-8">
                View All Activity
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Quick Actions / Promo */}
        <Card className="col-span-3">
          <CardHeader>
            <CardTitle>Quick Actions</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <Button 
                variant="outline" 
                className="h-24 flex flex-col gap-2 hover:border-[#f37003]/50 hover:bg-[#f37003]/5"
                onClick={() => onNavigate('dashboard-settings')}
              >
                <div className="h-8 w-8 rounded-full bg-muted flex items-center justify-center">
                  <Settings className="h-4 w-4" />
                </div>
                Edit Profile
              </Button>
              <Button 
                variant="outline" 
                className="h-24 flex flex-col gap-2 hover:border-[#f37003]/50 hover:bg-[#f37003]/5"
                onClick={() => onNavigate('dashboard-billing')}
              >
                <div className="h-8 w-8 rounded-full bg-muted flex items-center justify-center">
                  <CreditCard className="h-4 w-4" />
                </div>
                Billing
              </Button>
            </div>
            
            <div className="rounded-xl bg-gradient-to-br from-[#f37003] to-[#ff8533] p-4 text-white mt-4">
              <h4 className="font-semibold mb-1">Refer a friend</h4>
              <p className="text-sm opacity-90 mb-3">
                Get 1 month free when you invite friends to Aadiyog.
              </p>
              <Button size="sm" variant="secondary" className="w-full text-[#f37003]">
                Copy Invite Link
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
