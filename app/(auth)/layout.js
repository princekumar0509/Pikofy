import { Sparkles, DollarSign, Users, Wallet, TrendingUp, Receipt, CreditCard, PieChart } from "lucide-react";

const AuthLayout = ({ children }) => {
  return (
    <div className="min-h-screen relative overflow-hidden bg-gradient-to-br from-blue-50 via-cyan-50 to-indigo-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
      {/* Animated Background Decorations */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Floating Icons - Left Side */}
        <div className="absolute left-[5%] top-[15%] animate-float-slow">
          <div className="p-4 rounded-2xl bg-gradient-to-br from-blue-400/20 to-cyan-400/20 backdrop-blur-sm border border-blue-300/30 shadow-lg">
            <DollarSign className="h-12 w-12 text-blue-600" />
          </div>
        </div>
        
        <div className="absolute left-[10%] top-[45%] animate-float-medium">
          <div className="p-3 rounded-xl bg-gradient-to-br from-cyan-400/20 to-indigo-400/20 backdrop-blur-sm border border-cyan-300/30 shadow-lg">
            <Users className="h-10 w-10 text-cyan-600" />
          </div>
        </div>
        
        <div className="absolute left-[8%] top-[75%] animate-float-fast">
          <div className="p-3 rounded-xl bg-gradient-to-br from-indigo-400/20 to-blue-400/20 backdrop-blur-sm border border-indigo-300/30 shadow-lg">
            <Wallet className="h-8 w-8 text-indigo-600" />
          </div>
        </div>

        {/* Floating Icons - Right Side */}
        <div className="absolute right-[8%] top-[20%] animate-float-fast">
          <div className="p-4 rounded-2xl bg-gradient-to-br from-purple-400/20 to-pink-400/20 backdrop-blur-sm border border-purple-300/30 shadow-lg">
            <Receipt className="h-12 w-12 text-purple-500" />
          </div>
        </div>
        
        <div className="absolute right-[12%] top-[50%] animate-float-slow">
          <div className="p-3 rounded-xl bg-gradient-to-br from-pink-400/20 to-red-400/20 backdrop-blur-sm border border-pink-300/30 shadow-lg">
            <CreditCard className="h-10 w-10 text-pink-500" />
          </div>
        </div>
        
        <div className="absolute right-[6%] top-[70%] animate-float-medium">
          <div className="p-3 rounded-xl bg-gradient-to-br from-orange-400/20 to-yellow-400/20 backdrop-blur-sm border border-orange-300/30 shadow-lg">
            <PieChart className="h-8 w-8 text-orange-500" />
          </div>
        </div>

        {/* Additional Decorative Elements - Bottom */}
        <div className="absolute left-[15%] bottom-[10%] animate-float-medium opacity-60">
          <div className="p-2 rounded-lg bg-gradient-to-br from-blue-400/20 to-cyan-400/20 backdrop-blur-sm">
            <TrendingUp className="h-6 w-6 text-blue-600" />
          </div>
        </div>
        
        <div className="absolute right-[20%] bottom-[15%] animate-float-slow opacity-60">
          <div className="p-2 rounded-lg bg-gradient-to-br from-cyan-400/20 to-indigo-400/20 backdrop-blur-sm">
            <Sparkles className="h-6 w-6 text-cyan-600" />
          </div>
        </div>

        {/* Gradient Orbs for depth */}
        <div className="absolute -left-20 top-1/4 w-72 h-72 bg-blue-300/30 rounded-full blur-3xl animate-pulse-slow"></div>
        <div className="absolute -right-20 bottom-1/4 w-96 h-96 bg-cyan-300/30 rounded-full blur-3xl animate-pulse-slower"></div>
        <div className="absolute left-1/3 -bottom-20 w-80 h-80 bg-indigo-300/20 rounded-full blur-3xl animate-pulse-slow"></div>
      </div>

      {/* Main Content - Centered */}
      <div className="relative z-10 min-h-screen flex items-center justify-center px-4 py-12">
        <div className="w-full max-w-md">
          {/* Logo & Branding - Centered */}
          <div className="text-center mb-8 animate-fade-in">
            <div className="inline-flex items-center justify-center gap-3 mb-4">
              <div className="p-3 rounded-2xl bg-gradient-to-br from-blue-600 to-cyan-500 shadow-lg animate-bounce-slow">
                <Sparkles className="h-8 w-8 text-white" />
              </div>
              <h1 className="text-5xl font-extrabold gradient-title">Equinex</h1>
            </div>
            <p className="text-lg text-muted-foreground mb-2 font-medium">Split expenses, settle up smart</p>
            <p className="text-sm text-muted-foreground max-w-sm mx-auto">
              Track shared expenses and split bills with friends, family, and groups
            </p>
          </div>
          
          {/* Clerk Auth Form - Centered with Beautiful Card */}
          <div className="bg-white/95 dark:bg-gray-800/95 rounded-2xl shadow-2xl p-8 border-2 border-gray-100 dark:border-gray-700 backdrop-blur-md animate-slide-up">
            {children}
          </div>

          {/* Footer Text - Centered */}
          <p className="text-center text-sm text-muted-foreground mt-6 animate-fade-in-delay">
            🔒 Secure authentication powered by Clerk
          </p>
        </div>
      </div>
    </div>
  );
};

export default AuthLayout;