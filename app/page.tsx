import ChatComponent from "@/components/ChatComponent";
import Me from "@/components/Me";

export default function Home() {
  return (
    <div className=" flex flex-col min-h-screen justify-center items-center container">
      <Me />
      <ChatComponent />
    </div>
  );
}
