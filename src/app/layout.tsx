import type { Metadata } from 'next'
 
export const metadata: Metadata = {
  title: 'Portifólio',
  description: 'Portifólio',
}

export default function RootLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <html lang="pt-br">
            <head>
                <meta charSet="UTF-8" />
                <link rel="icon" href="%PUBLIC_URL%/favicon.ico" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <title>Portifolio</title>
                <meta name="description" content="Web site created..." />
            </head>
            <body>
                <div id="root">{children}</div>
            </body>
        </html>
    )
}