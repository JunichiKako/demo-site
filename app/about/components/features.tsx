import Link from "next/link";
import Section from "@/app/about/components/section";

export default function Features() {
    return (
        <Section title="サービスの特徴" subtitle="素敵な機能が盛りだくさんです">
            <div className="grid lg:grid-cols-3 gap-4">
                <div className="border relative rounded-md p-6 shadow space-y-4">
                    <div className="aspect-video bg-muted"></div>
                    <h2>
                        記事タイトル
                        <Link href="/" className="absolute inset-0"></Link>
                    </h2>
                    <p>Lorem ipsum dolor sit amet.</p>
                    <button>タグA</button>
                </div>
            </div>
        </Section>
    );
}
