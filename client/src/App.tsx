import { lazy, Suspense } from "react";
import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";

// Eagerly load the Home page for fastest initial load
import Home from './pages/Home'
import PaulsSeries from './pages/PaulsSeries'
import ThankYou from './pages/ThankYou'
import NotFound from './pages/not-found'

// Lazy load all other pages to improve initial load time
const NotFound = lazy(() => import("@/pages/not-found"));
const EmailTemplate = lazy(() => import("@/pages/EmailTemplate"));
const EmailTemplate2 = lazy(() => import("@/pages/EmailTemplate2"));
const EmailTemplate3 = lazy(() => import("@/pages/EmailTemplate3"));
const EmailTemplate4 = lazy(() => import("@/pages/EmailTemplate4"));
const EmailTemplate5 = lazy(() => import("@/pages/EmailTemplate5"));
const ThankYou = lazy(() => import("@/pages/ThankYou"));
const Sections = lazy(() => import("@/pages/Sections"));
const FullPageComponents = lazy(() => import("@/pages/full-page-components"));
const EmailsAll = lazy(() => import("@/pages/Emails-all"));

// Loading fallback component
const PageLoading = () => (
  <div className="min-h-screen flex items-center justify-center">
    <div className="animate-pulse text-primary text-lg font-medium">Loading...</div>
  </div>
);

function Router() {
  return (
    <Switch>
      {/* Home page is eagerly loaded for fastest main route render */}
      <Route path="/" component={Home} />

      {/* All other routes are lazy-loaded */}
      <Route path="/email-1">
        <Suspense fallback={<PageLoading />}>
          <EmailTemplate />
        </Suspense>
      </Route>
      <Route path="/email-2">
        <Suspense fallback={<PageLoading />}>
          <EmailTemplate2 />
        </Suspense>
      </Route>
      <Route path="/email-3">
        <Suspense fallback={<PageLoading />}>
          <EmailTemplate3 />
        </Suspense>
      </Route>
      <Route path="/email-4">
        <Suspense fallback={<PageLoading />}>
          <EmailTemplate4 />
        </Suspense>
      </Route>
      <Route path="/email-5">
        <Suspense fallback={<PageLoading />}>
          <EmailTemplate5 />
        </Suspense>
      </Route>
      <Route path="/sections">
        <Suspense fallback={<PageLoading />}>
          <Sections />
        </Suspense>
      </Route>
      <Route path="/full">
        <Suspense fallback={<PageLoading />}>
          <FullPageComponents />
        </Suspense>
      </Route>
      <Route path="/all-emails">
        <Suspense fallback={<PageLoading />}>
          <EmailsAll />
        </Suspense>
      </Route>
      <Route path="/thank-you">
        <Suspense fallback={<PageLoading />}>
          <ThankYou />
        </Suspense>
      </Route>

      {/* Fallback 404 route (also lazy-loaded) */}
      <Route>
        <Suspense fallback={<PageLoading />}>
          <NotFound />
        </Suspense>
      </Route>
    </Switch>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Router />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;