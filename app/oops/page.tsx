export default function OopsPage() {
  return (
    <main className="min-h-screen flex items-center justify-center px-6 text-center">
      <div className="max-w-md space-y-4">
        <h1 className="text-3xl font-bold">Oops 😕</h1>
        <p className="text-textMuted">
          Something went wrong and the message could not be sent.
          Please try again or contact me directly via email.
        </p>

        <a href="/#contact" className="inline-block mt-6 px-6 py-3 border rounded-md">Try Again</a>
      </div>
    </main>
  );
}