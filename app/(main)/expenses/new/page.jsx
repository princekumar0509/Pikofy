"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { ExpenseForm } from "./components/expense-form";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent } from "@/components/ui/card";
import { User, Users, Plus, Sparkles } from "lucide-react";

export default function NewExpensePage() {
  const router = useRouter();
  const [activeTab, setActiveTab] = useState("individual");

  return (
    <div className="container max-w-4xl mx-auto py-8 px-4">
      <div className="mb-8 text-center">
        <div className="flex items-center justify-center gap-2 mb-3">
          <div className="p-2.5 rounded-xl bg-gradient-to-br from-blue-600 to-cyan-500 shadow-lg">
            <Plus className="h-7 w-7 text-white" />
          </div>
        </div>
        <h1 className="text-5xl md:text-6xl gradient-title mb-3">
          Add New Expense
        </h1>
        <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
          Split bills with friends, family, or groups. Track who paid and who owes what.
        </p>
      </div>

      <Card className="border-2 shadow-xl">
        <CardContent className="p-6 md:p-8">
          <Tabs className="pb-2" value={activeTab} onValueChange={setActiveTab}>
            <TabsList className="grid w-full grid-cols-2 h-14 p-1.5 bg-muted/50 mb-4 rounded-xl">
              <TabsTrigger 
                value="individual" 
                className="text-base font-semibold flex items-center gap-2 data-[state=active]:bg-gradient-to-r data-[state=active]:from-blue-600 data-[state=active]:to-cyan-500 data-[state=active]:text-white data-[state=active]:shadow-lg data-[state=active]:scale-[1.02] transition-all duration-200"
              >
                <User className="h-5 w-5" />
                <span className="hidden sm:inline">Individual</span>
                <span className="sm:hidden">1:1</span>
              </TabsTrigger>
              <TabsTrigger 
                value="group" 
                className="text-base font-semibold flex items-center gap-2 data-[state=active]:bg-gradient-to-r data-[state=active]:from-blue-600 data-[state=active]:to-cyan-500 data-[state=active]:text-white data-[state=active]:shadow-lg data-[state=active]:scale-[1.02] transition-all duration-200"
              >
                <Users className="h-5 w-5" />
                Group
              </TabsTrigger>
            </TabsList>
            
            <TabsContent value="individual" className="mt-0">
              {/* Visual indicator */}
              <div className="mb-6 p-3 bg-gradient-to-r from-blue-50 to-cyan-50 dark:from-blue-950/20 dark:to-cyan-950/20 border-l-4 border-blue-600 rounded-lg">
                <div className="flex items-center gap-2 text-sm">
                  <User className="h-4 w-4 text-blue-600 dark:text-blue-400" />
                  <span className="font-semibold text-blue-900 dark:text-blue-100">Individual Expense</span>
                  <span className="text-blue-700 dark:text-blue-300">- Split with one person</span>
                </div>
              </div>
              
              {activeTab === "individual" && (
                <ExpenseForm
                  type="individual"
                  onSuccess={(id) => router.push(`/person/${id}`)}
                />
              )}
            </TabsContent>
            
            <TabsContent value="group" className="mt-0">
              {/* Visual indicator */}
              <div className="mb-6 p-3 bg-gradient-to-r from-cyan-50 to-indigo-50 dark:from-cyan-950/20 dark:to-indigo-950/20 border-l-4 border-cyan-600 rounded-lg">
                <div className="flex items-center gap-2 text-sm">
                  <Users className="h-4 w-4 text-cyan-600 dark:text-cyan-400" />
                  <span className="font-semibold text-cyan-900 dark:text-cyan-100">Group Expense</span>
                  <span className="text-cyan-700 dark:text-cyan-300">- Split with multiple people</span>
                </div>
              </div>
              
              {activeTab === "group" && (
                <ExpenseForm
                  type="group"
                  onSuccess={(id) => router.push(`/groups/${id}`)}
                />
              )}
            </TabsContent>
          </Tabs>
        </CardContent>
      </Card>

      {/* Helpful tips section */}
      <div className="mt-8 p-6 bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-blue-950/20 dark:to-indigo-950/20 rounded-xl border-2 border-blue-200/50 dark:border-blue-800/50">
        <div className="flex items-start gap-3">
          <Sparkles className="h-5 w-5 text-blue-600 dark:text-blue-400 mt-0.5 flex-shrink-0" />
          <div>
            <h3 className="font-semibold text-blue-900 dark:text-blue-100 mb-2">
              Quick Tips
            </h3>
            <ul className="space-y-1.5 text-sm text-blue-800 dark:text-blue-200">
              <li>• <strong>Individual expenses</strong> are perfect for splitting bills with one person</li>
              <li>• <strong>Group expenses</strong> let you split costs among multiple people at once</li>
              <li>• Choose between equal splits, percentage-based, or exact amounts</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}