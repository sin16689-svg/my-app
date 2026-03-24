import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen bg-[#f5e6dc]">
      {/* 상단 네비 */}
      <div className="flex justify-between items-center px-10 py-5 bg-white/70 backdrop-blur-md shadow-sm">
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

      {/* 추천 작품 섹션 */}
<div className="mt-16 max-w-5xl mx-auto px-6">
  <div className="bg-white/70 backdrop-blur-sm rounded-3xl shadow-[0_8px_30px_rgba(0,0,0,0.08)] px-10 py-12">
    <h2 className="text-center text-4xl font-bold mb-3">추천 작품</h2>
    <p className="text-center text-gray-600 mb-10">
      도서와 영화 속 다양한 서사를 새로운 방식으로 경험해보세요
    </p>

    <div className="grid grid-cols-2 gap-x-10 gap-y-12">
      <div className="group bg-[#faf7f5] rounded-2xl p-5 shadow-sm hover:shadow-xl transition duration-300 text-center">
        <div className="overflow-hidden rounded-xl bg-white flex items-center justify-center h-72">
      <img
          src="/OIP.webp"
          className="max-h-full object-contain group-hover:scale-105 transition duration-300"
      />
      </div>
        <p className="mt-4 text-lg font-semibold">운수 좋은 날 - 현진건</p>
        <p className="mt-1 text-sm text-gray-500">도서</p>
      </div>

      <div className="group bg-[#faf7f5] rounded-2xl p-5 shadow-sm hover:shadow-xl transition duration-300 text-center">
        <div className="overflow-hidden rounded-xl bg-white flex items-center justify-center h-72">
          <img
            src="/소년이 온다.webp"
            className="max-h-full object-contain group-hover:scale-105 transition duration-300"
            alt="소년이 온다"
          />
        </div>
        <p className="mt-4 text-lg font-semibold">소년이 온다 - 한강</p>
        <p className="mt-1 text-sm text-gray-500">도서</p>
      </div>

      <div className="group bg-[#faf7f5] rounded-2xl p-5 shadow-sm hover:shadow-xl transition duration-300 text-center">
        <div className="overflow-hidden rounded-xl bg-white flex items-center justify-center h-72">
          <img
            src="/왕과사는남자.jpg"
            className="max-h-full object-contain group-hover:scale-105 transition duration-300"
            alt="왕과사는 남자"
          />
        </div>
        <p className="mt-4 text-lg font-semibold">왕과사는 남자</p>
        <p className="mt-1 text-sm text-gray-500">영화</p>
      </div>

      <div className="group bg-[#faf7f5] rounded-2xl p-5 shadow-sm hover:shadow-xl transition duration-300 text-center">
        <div className="overflow-hidden rounded-xl bg-white flex items-center justify-center h-72">
          <img
            src="/프로젝트헤일미리.jpg"
            className="max-h-full object-contain group-hover:scale-105 transition duration-300"
            alt="프로젝트 헤일메리"
          />
        </div>
        <p className="mt-4 text-lg font-semibold">프로젝트 헤일메리</p>
        <p className="mt-1 text-sm text-gray-500">영화</p>
      </div>
    </div>
  </div>
</div>
    <div className="mt-24 px-10 py-20 bg-gradient-to-b from-white to-[#f5e6dc]">

  <h2 className="text-3xl font-bold text-center mb-10">
    Persona IF 소개
  </h2>

  <p className="text-center text-gray-600 mb-16 max-w-2xl mx-auto">
    기존 소설을 기반으로 사용자가 직접 선택하고 개입하여,
    새로운 이야기를 만들어가는 AI 인터랙티브 스토리 플랫폼입니다.
  </p>

  <div className="grid grid-cols-3 gap-10 text-center max-w-4xl mx-auto">

    <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition">
      <h3 className="font-bold text-lg mb-2">AI 스토리 생성</h3>
      <p className="text-sm text-gray-600">
        사용자의 선택을 기반으로 새로운 이야기를 생성합니다.
      </p>
    </div>

    <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition">
      <h3 className="font-bold text-lg mb-2">인터랙티브 경험</h3>
      <p className="text-sm text-gray-600">
        직접 참여하며 스토리를 만들어가는 경험을 제공합니다.
      </p>
    </div>

    <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition">
      <h3 className="font-bold text-lg mb-2">개인화 스토리</h3>
      <p className="text-sm text-gray-600">
        사용자마다 다른 나만의 이야기를 생성합니다.
      </p>
    </div>

  </div>
</div>
    </div>
  );
}