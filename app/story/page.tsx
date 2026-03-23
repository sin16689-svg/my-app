import Link from "next/link";

export default function Home() {
  return (
    <div className="bg-[#e6cfc2] min-h-screen p-10">

      {/* 전체 그리드 */}
      <div className="grid grid-cols-2 gap-6">

        {/* 왼쪽 영역 */}
        <div className="grid grid-cols-2 gap-4">

          {/* 카드 1 */}
          <div className="bg-white p-4">
            <img src="/OIP.webp" className="w-full h-40 object-cover mb-2"/>
            <p className="text-sm">운수 좋은 날</p>
          </div>

          {/* 카드 2 */}
          <div className="bg-white p-4">
            <img src="/OIP.webp" className="w-full h-40 object-cover mb-2"/>
            <p className="text-sm">소설의 시작</p>
          </div>

          {/* 카드 3 */}
          <div className="bg-white p-4">
            <img src="/OIP.webp" className="w-full h-40 object-cover mb-2"/>
            <p className="text-sm">물과 바다</p>
          </div>

          {/* 카드 4 */}
          <div className="bg-white p-4">
            <img src="/OIP.webp" className="w-full h-40 object-cover mb-2"/>
            <p className="text-sm">또 다른 이야기</p>
          </div>

        </div>

        {/* 오른쪽 큰 영역 */}
        <div className="bg-[#d9b8a5] p-6 flex flex-col justify-center">

          <h2 className="text-2xl font-bold mb-4">
            [운수 좋은 날]
          </h2>

          <p className="text-sm leading-relaxed">
            이곳에 작품 설명이 들어갑니다.
            사용자가 선택한 이야기에 따라 다양한 스토리를 보여줄 수 있습니다.
          </p>

        </div>

        {/* 아래 왼쪽 */}
        <div className="bg-[#d9b8a5] p-6">
          <h3 className="text-lg font-bold mb-2">스토리 소개</h3>
          <p className="text-sm">
            작품의 배경과 흐름을 설명하는 영역입니다.
          </p>
        </div>

        {/* 아래 오른쪽 */}
        <div className="bg-[#d9b8a5] p-6 flex items-center justify-center">
          <h1 className="text-2xl font-bold text-center">
            나만의 이야기를<br />
            새롭게 재구성하다
          </h1>
        </div>

      </div>

    </div>
  );
}