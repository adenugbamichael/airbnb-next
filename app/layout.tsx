import Modal from "./components/modals/Modal"
import Navbar from "./components/navbar/Navbar"
import "./globals.css"

export const metadata = {
  title: "Airbnb",
  description: "Airbnb application",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang='en' suppressHydrationWarning={true}>
      <body suppressHydrationWarning={true}>
        <Modal />
        <Navbar />
        {children}
      </body>
    </html>
  )
}
