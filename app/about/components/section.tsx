
export default function Section({
    title,
    subtitle,
    children,
}: {
    title: string;
    subtitle: string;
    children: React.ReactNode;
}) {
    return (
        <section className="py-20 container">
            <div className="text-center space-y-6 mb-10">
                <h2 className="font-bold text-4xl">{title}</h2>
                <p className="text-muted-foreground">{subtitle}</p>
            </div>

            {children}

            {/* <div className="grid lg:grid-cols-3 gap-4">
                <div className="border relative rounded-md p-6 shadow space-y-4">
                    <div className="aspect-video bg-muted"></div>
                    <h2>
                        記事タイトル
                        <Link href="/" className="absolute inset-0"></Link>
                    </h2>
                    <p>Lorem ipsum dolor sit amet.</p>
                    <button>タグA</button>
                </div>
            </div> */}
        </section>
    );
}
