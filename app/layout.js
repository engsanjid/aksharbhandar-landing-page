export const metadata = {
  title: "Aksharbhandar - অক্ষরভান্ডার",
  description: "টিম মার্শালের বিশ্বখ্যাত ৩টি বই — প্রিজনার্স অব জিওগ্রাফি, দ্য পাওয়ার অব জিওগ্রাফি, দ্য ফিউচার অব জিওগ্রাফি। মাত্র ৪৯০ টাকায় পান। ক্যাশ অন ডেলিভারি।",
  icons: {
    icon: "/b1833076-612f-494e-acd8-79741a729470.jpg",
    shortcut: "/b1833076-612f-494e-acd8-79741a729470.jpg",
    apple: "/b1833076-612f-494e-acd8-79741a729470.jpg",
  },
  openGraph: {
    title: "জিওগ্রাফি ট্রিলজি — মাত্র ৪৯০ টাকায়!",
    description: "৩টি মাস্টারপিস বই এখন মাত্র ৪৯০ টাকায়। সারাদেশে হোম ডেলিভারি।",
    type: "website",
  },
};
export default function RootLayout({ children }) {
  return (
    <html lang="bn">
      <body>{children}</body>
    </html>
  );
}