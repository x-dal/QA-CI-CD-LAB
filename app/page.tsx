export default function Home() {
  return (
    <main className="min-h-screen bg-slate-950 px-6 py-16 text-white sm:py-24">
      <article className="mx-auto max-w-3xl">
        <p className="text-sm font-semibold tracking-[0.25em] text-cyan-400">
          QA CI LAB · LESSON 01
        </p>
        <h1 className="mt-4 text-4xl font-bold tracking-tight sm:text-6xl">
          Start CI with Next.js and GitHub Actions
        </h1>
        <p className="mt-6 text-lg leading-8 text-slate-300">
          Continuous integration automatically checks every change before it
          reaches production. For a Next.js project, begin by running lint,
          tests, and a production build on every push and pull request.
        </p>

        <section className="mt-12 rounded-2xl border border-slate-700 bg-slate-900 p-6 sm:p-8">
          <h2 className="text-2xl font-semibold">1. Add project scripts</h2>
          <p className="mt-3 text-slate-300">
            Ensure your <code className="text-cyan-300">package.json</code> has
            scripts such as <code className="text-cyan-300">lint</code>,{" "}
            <code className="text-cyan-300">test</code>, and{" "}
            <code className="text-cyan-300">build</code>. CI will run these
            commands in a clean environment.
          </p>
        </section>

        <section className="mt-6 rounded-2xl border border-slate-700 bg-slate-900 p-6 sm:p-8">
          <h2 className="text-2xl font-semibold">2. Create the workflow</h2>
          <p className="mt-3 text-slate-300">
            Create <code className="text-cyan-300">.github/workflows/ci.yml</code>{" "}
            and add this starter workflow:
          </p>
          <pre className="mt-5 overflow-x-auto rounded-lg bg-slate-950 p-5 text-sm leading-6 text-cyan-100"><code>{`name: CI

on: [push, pull_request]

jobs:
  test:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v5
      - uses: actions/setup-node@v6
        with:
          node-version: 24
          cache: npm
      - run: npm ci
      - run: npm run lint
      - run: npm test
      - run: npm run build`}</code></pre>
        </section>

        <section className="mt-6 rounded-2xl border border-slate-700 bg-slate-900 p-6 sm:p-8">
          <h2 className="text-2xl font-semibold">3. Push and verify</h2>
          <p className="mt-3 text-slate-300">
            Commit and push the workflow. Open the <strong>Actions</strong> tab
            in your GitHub repository to watch the checks run. A green check
            means your change passed CI.
          </p>
        </section>
      </article>
    </main>
  );
}
