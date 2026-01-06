export default function ThankYouPage() {
  return (
    <main className="min-h-screen flex items-center justify-center px-6 text-center">
      <div className="max-w-md space-y-4">
        <h1 className="text-3xl font-bold">Thank You! 🙌</h1>
        <p className="text-textMuted">
          Your message has been sent successfully.  
          I really appreciate you reaching out and I’ll get back to you soon.
        </p>

        <a href="/" className="inline-block mt-6 px-6 py-3 bg-primary text-white rounded-md">Back to Home</a>
      </div>
    </main>
  );
}