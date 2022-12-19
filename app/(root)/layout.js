import "../globals.style.css";

export default function RootLayout({ children }) {
  return (
    <html>
      <head>
        <meta charset="utf-8" />
        <link rel="icon" href="/favicon.ico" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#000000" />
        <meta name="description" content="Next js 13 todo app" />
        <title>Todo App</title>
      </head>
      <body className="min-h-screen w-full bg-gradient-to-br from-pink-700 to-indigo-700">
        {children}
      </body>
    </html>
  );
}
