export function Footer() {
  return (
    <footer className="bg-gray-200 dark:bg-gray-900 py-6 mt-auto">
      <div className="container mx-auto text-center text-sm text-gray-600 dark:text-gray-400">
        © {new Date().getFullYear()} Enable Design System, Inc. All rights reserved.
      </div>
    </footer>
  );
}
