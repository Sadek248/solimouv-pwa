export default function NotFound() {
    return (
        <main className="mx-auto flex min-h-[70vh] max-w-4xl flex-col items-center justify-center px-6 text-center">
            <h1 className="text-4xl font-bold">404</h1>
            <p className="mt-4 text-lg">Page introuvable.</p>
            <p className="mt-2 text-gray-600">
                La page que vous recherchez n’existe pas ou a été déplacée.
            </p>
        </main>
    );
}