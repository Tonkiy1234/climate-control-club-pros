import { Switch, Route, Router as WouterRouter } from "wouter";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { MobileCTABar } from "@/components/shared/MobileCTABar";
import { Home } from "@/pages/Home";
import { MiniSplitInstallation } from "@/pages/MiniSplitInstallation";
import { MiniSplitReplacement } from "@/pages/MiniSplitReplacement";
import { MiniSplitRepair } from "@/pages/MiniSplitRepair";
import { ServiceAreas } from "@/pages/ServiceAreas";
import { KirklandPage } from "@/pages/KirklandPage";
import { BellevuePage } from "@/pages/BellevuePage";
import { About } from "@/pages/About";
import { Financing } from "@/pages/Financing";
import { Contact } from "@/pages/Contact";
import { ThankYou } from "@/pages/ThankYou";
import { Reviews } from "@/pages/Reviews";
import NotFound from "@/pages/not-found";

const queryClient = new QueryClient();

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/mini-split-installation" component={MiniSplitInstallation} />
      <Route path="/mini-split-replacement" component={MiniSplitReplacement} />
      <Route path="/mini-split-repair" component={MiniSplitRepair} />
      <Route path="/service-areas" component={ServiceAreas} />
      <Route path="/mini-split-installation-kirkland" component={KirklandPage} />
      <Route path="/mini-split-installation-bellevue" component={BellevuePage} />
      <Route path="/about" component={About} />
      <Route path="/financing" component={Financing} />
      <Route path="/contact" component={Contact} />
      <Route path="/thank-you" component={ThankYou} />
      <Route path="/reviews" component={Reviews} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <WouterRouter base={import.meta.env.BASE_URL.replace(/\/$/, "")}>
        <Navbar />
        {/* pb-20 md:pb-0 — reserves space for the sticky mobile CTA bar on small screens */}
        <main className="pb-20 md:pb-0">
          <Router />
        </main>
        <Footer />
        {/* Sticky mobile CTA bar — hidden on md+ screens */}
        <MobileCTABar />
      </WouterRouter>
    </QueryClientProvider>
  );
}

export default App;
