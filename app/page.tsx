import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen bg-[#f5e6dc]">
      {/* 상단 네비 */}
      <div className="flex justify-between items-center p-6">
        <h1 className="text-xl font-bold">Persona IF</h1>

        <div className="flex gap-10 text-base">
          <span className="cursor-pointer hover:underline">홈</span>
          <span className="cursor-pointer hover:underline">공지 사항</span>
          <span className="cursor-pointer hover:underline">게시판</span>
        </div>
      </div>

      {/* 메인 영역 */}
      <div className="relative h-[550px] flex">
        {/* 왼쪽: 책 이미지 */}
        <div className="w-1/2">
          <img
            src="/책.jpg"
            className="w-full h-full object-cover brightness-50"
            alt="책 배경"
          />
        </div>

        {/* 오른쪽: 글 영역 */}
        <div className="w-1/2 bg-black/40 flex flex-col justify-center items-center text-center px-10">
          <h1 className="text-6xl font-extrabold mb-4 text-white leading-tight">
            나만의 이야기를
            <br />
            새롭게 만들어보세요
          </h1>

          <p className="text-gray-200 mb-6">
            AI와 함께 기존 소설을 새롭게 재구성하는 인터랙티브 경험
          </p>

          <Link href="/story">
            <button className="bg-white text-black px-6 py-3 rounded-full hover:scale-105 transition">
              시작하기
            </button>
          </Link>
        </div>
      </div>

      {/* 구분선 */}
      <div className="mt-16 border-t border-black/20 w-3/4 mx-auto"></div>

      {/* 카드 섹션 */}
      <div className="mt-12">
        <h2 className="text-center text-2xl font-bold mb-6">추천 작품</h2>

        <div className="flex justify-evenly">
          <div className="text-center">
            <img
              src="/OIP.webp"
              className="w-36 h-50 object-cover mb-2 hover:scale-105 transition"
              alt="운수 좋은 날"
            />
            <p className="text-base">운수 좋은 날</p>
          </div>

          <div className="text-center">
            <img
              src="/소년이 온다.webp"
              className="w-36 h-50 object-cover mb-2 hover:scale-105 transition"
              alt="소년이 온다"
            />
            <p className="text-base">소년이 온다 - 한강</p>
          </div>

          <div className="text-center">
            <img
              src="/급류.webp"
              className="w-36 h-50 object-cover mb-2 hover:scale-105 transition"
              alt="급류"
            />
            <p className="text-base">급류 - 정대건</p>
          </div>
        </div>
      </div>

      {/* 서비스 소개 섹션 */}
      <div className="mt-20 px-10 py-16 bg-white">
        <h2 className="text-3xl font-bold text-left mb-6">Persona IF 소개</h2>

        <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
          Persona IF는 기존 소설의 이야기를 사용자가 직접 재구성하고,
          새로운 전개를 만들어가는 AI 기반 인터랙티브 스토리 플랫폼입니다.
        </p>

        <div className="flex justify-center gap-10 text-center">
          <div className="w-60">
            <h3 className="font-bold text-lg mb-2">AI 스토리 생성</h3>
            <p className="text-sm text-gray-600">
              사용자의 선택과 입력을 바탕으로
              새로운 이야기를 자동으로 생성합니다.
            </p>
          </div>

          <div className="w-60">
            <h3 className="font-bold text-lg mb-2">인터랙티브 경험</h3>
            <p className="text-sm text-gray-600">
              단순 감상이 아닌 직접 참여하는
              새로운 콘텐츠 경험을 제공합니다.
            </p>
          </div>

          <div className="w-60">
            <h3 className="font-bold text-lg mb-2">개인화된 이야기</h3>
            <p className="text-sm text-gray-600">
              사용자에 맞춰 변화하는
              나만의 스토리를 만들 수 있습니다.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}