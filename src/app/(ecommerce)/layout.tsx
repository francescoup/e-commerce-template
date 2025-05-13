export default function BlogLayout({
    children,
  }: {
    children: React.ReactNode
  }) {
    return <section className="bg-gray-600 text-gray-800 h-dvh">{children}</section>
  }