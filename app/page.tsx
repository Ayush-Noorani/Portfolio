import Card from "@/components/Card";
import Image from "next/image";

export default function Home() {
  return (
    <div className="bg-gradient-to-br from-[#C3CBD0] to-[#767C81] h-screen w-screen p-5 overflow-x-auto">
      <Card name="Home" />
      <Card name="About" />
    </div>
  );
}
