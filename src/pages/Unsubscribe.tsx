import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { supabase } from "@/integrations/supabase/client";
import { Button } from "@/components/ui/button";
import Seo from "@/components/Seo";

const FUNCTIONS_URL = `${import.meta.env.VITE_SUPABASE_URL}/functions/v1/handle-email-unsubscribe`;

type State = "loading" | "valid" | "invalid" | "already" | "done" | "error";

const Unsubscribe = () => {
  const [params] = useSearchParams();
  const token = params.get("token") ?? "";
  const [state, setState] = useState<State>("loading");
  const [busy, setBusy] = useState(false);

  useEffect(() => {
    if (!token) {
      setState("invalid");
      return;
    }
    const validate = async () => {
      try {
        const res = await fetch(`${FUNCTIONS_URL}?token=${encodeURIComponent(token)}`, {
          headers: { apikey: import.meta.env.VITE_SUPABASE_PUBLISHABLE_KEY as string },
        });
        const data = await res.json().catch(() => ({}));
        if (!res.ok || data?.valid === false) {
          setState(data?.reason === "already_used" ? "already" : "invalid");
          return;
        }
        setState(data?.used ? "already" : "valid");
      } catch {
        setState("error");
      }
    };
    validate();
  }, [token]);

  const confirm = async () => {
    setBusy(true);
    const { error } = await supabase.functions.invoke("handle-email-unsubscribe", {
      body: { token },
    });
    setBusy(false);
    setState(error ? "error" : "done");
  };

  return (
    <main className="min-h-screen flex items-center justify-center bg-background px-4">
      <Seo
        title="Unsubscribe | Crabtree Solutions"
        description="Manage your email preferences for Crabtree Solutions notifications."
        path="/unsubscribe/"
      />
      <div className="w-full max-w-md rounded-xl border bg-card p-8 text-center shadow-sm">
        <h1 className="text-2xl font-semibold text-primary mb-3">Email preferences</h1>
        {state === "loading" && <p className="text-muted-foreground">Checking your link…</p>}
        {state === "valid" && (
          <>
            <p className="text-muted-foreground mb-6">
              Confirm that you no longer wish to receive emails from Crabtree Solutions.
            </p>
            <Button onClick={confirm} disabled={busy}>
              {busy ? "Processing…" : "Confirm unsubscribe"}
            </Button>
          </>
        )}
        {state === "already" && (
          <p className="text-muted-foreground">You are already unsubscribed. No further action is needed.</p>
        )}
        {state === "done" && (
          <p className="text-muted-foreground">You have been unsubscribed. We're sorry to see you go.</p>
        )}
        {state === "invalid" && (
          <p className="text-muted-foreground">This unsubscribe link is invalid or has expired.</p>
        )}
        {state === "error" && (
          <p className="text-muted-foreground">Something went wrong. Please try again later.</p>
        )}
      </div>
    </main>
  );
};

export default Unsubscribe;
