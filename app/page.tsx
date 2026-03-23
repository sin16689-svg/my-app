import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen bg-[#f5e6dc]">

      {/* 🔥 상단 네비 */}
      <div className="flex justify-between items-center p-6">
        <h1 className="text-xl font-bold">Persona IF</h1>

        <div className="flex gap-6 text-sm">
          <span className="cursor-pointer hover:underline">홈</span>
          <span className="cursor-pointer hover:underline">공지 사항</span>
          <span className="cursor-pointer hover:underline">게시판</span>
        </div>
      </div>

      {/* 🔥 메인 영역 */}
      <div className="flex flex-col items-center justify-center text-center mt-10">

        <h1 className="text-5xl font-extrabold mb-4 leading-tight">
          나만의 이야기를<br />
          새롭게 만들어보세요
        </h1>

        <p className="text-gray-700 mb-6">
          AI와 함께 기존 소설을 새롭게 재구성하는 인터랙티브 경험
        </p>

        {/* 👉 메인 버튼만 유지 */}
        <Link href="/story">
          <button className="bg-black text-white px-6 py-3 rounded-full hover:scale-105 transition">
            시작하기
          </button>
        </Link>

      </div>

      {/* 🔥 구분선 */}
      <div className="mt-16 border-t border-black/20 w-3/4 mx-auto"></div>

      {/* 🔥 카드 섹션 */}
      <div className="mt-12">

        <h2 className="text-center text-xl font-bold mb-6">
          추천 작품
        </h2>

        <div className="flex justify-evenly">

          <div className="text-center">
            <img src="/OIP.webp" className="w-32 h-44 object-cover mb-2 hover:scale-105 transition"/>
            <p className="text-sm">운수 좋은 날</p>
          </div>

          <div className="text-center">
            <img src="/소년이 온다.webp" className="w-32 h-44 object-cover mb-2 hover:scale-105 transition"/>
            <p className="text-sm">소년이 온다 - 한강</p>
          </div>

          <div className="text-center">
            <img src="/급류.webp" className="w-32 h-44 object-cover mb-2 hover:scale-105 transition"/>
            <p className="text-sm">급류 - 정대건</p>
          </div>

        </div>

      </div>

    </div>
  );
}