import { Metadata } from "next";
import Echo from "@/app/components/Echo";

const postUrl = `https://kmac1.vercel.app/api/echo`;

export async function generateMetadata(): Promise<Metadata> {
  const imageUrl = `https://kmac1.vercel.app/api/images/start?date=${Date.now()}`;
  return {
    title: "Farmacy",
    description: "What's your fav strain?",
    openGraph: {
      title: "Farmacy",
      images: [imageUrl],
    },
    other: {
      "fc:frame": "vNext",
      "fc:frame:image": imageUrl,
      "fc:frame:post_url": postUrl,
      "fc:frame:input:text": "Type something here...",
      "fc:frame:button:1": "🐬 Echo",
    },
  };
}

export default function Home() {
  return (
    <main className="flex flex-col text-center lg:p-16">
      <Echo />
    </main>
  );
}
