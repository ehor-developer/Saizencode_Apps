import { Head } from "$fresh/runtime.ts";
import Saizencode from "../islands/app.tsx";
import menus from "../data/menu.json" assert { type: "json" };

export default function Home() {
  return (
    <>
      <Head>
        <title>Saizencode</title>
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Saizencode" />
        <meta property="og:site_name" content="Ehor. Apps" />
        <meta property="og:description"
          content="サイゼリヤのメニューを検索することができるアプリ。このアプリはEhor.が練習用で製作しました。" />
      </Head>
      <div className="bg-gray-100">
        <div className="container mx-auto px-4 py-8">
          <div className="container">
            <div class="bg-green-400 text-white p-4 rounded-md my-3">
              <div class="container mx-auto flex items-center justify-between">
                <div class="text-lg font-semibold">
                  Saizencode
                </div>
                <div>
                </div>
              </div>
            </div>
          </div>
          <div class="bg-yellow-200 p-4">
            <div class="container mx-auto">
              <p class="text-yellow-900">
                注意事項: これは2023年4月の情報です。実際の情報や店舗によって異なる場合があります。
              </p>
              <p class="text-yellow-900">
                このアプリは非公式です。ここに掲載されている商品情報や価格などは間違っている場合があります。
              </p>
            </div>
          </div>
          <Saizencode menus={menus} />
        </div>
      </div>
    </>
  );
}
