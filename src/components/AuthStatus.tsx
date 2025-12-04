import { authClient } from "../lib/auth-client";

export default function AuthStatus() {
  const { data: session } = authClient.useSession;

  const handleSignOut = async () => {
    await authClient.signOut();
  };

  if (session) {
    return (
      <div className="flex items-center gap-4">
        <span>Welcome, {session.user.name}</span>
        <button onClick={handleSignOut} className="text-zinc-500 hover:text-zinc-800 dark:text-zinc-400 dark:hover:text-zinc-200">
          Logout
        </button>
      </div>
    );
  }

  return (
    <div className="flex items-center gap-4">
      <a href="/login" className="text-zinc-500 hover:text-zinc-800 dark:text-zinc-400 dark:hover:text-zinc-200">Login</a>
      <a href="/signup" className="text-zinc-500 hover:text-zinc-800 dark:text-zinc-400 dark:hover:text-zinc-200">Signup</a>
    </div>
  );
}
