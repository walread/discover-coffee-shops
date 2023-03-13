import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html className="h-full" lang="en">
      <Head />
      <body className="flex h-full flex-col bg-gradient-background bg-cover bg-no-repeat text-gray-800">
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
