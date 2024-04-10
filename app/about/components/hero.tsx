import { Button } from "@/components/ui/button";

export default function Hero() {
    return (
        <div className="py-40 flex font-bold items-center">
            <div className="container">
                <h1 className="font-bold mb-5 text-4xl lg:text-6xl">Hero</h1>
                <p className="text-muted-foreground mb-5">
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                    Quam, voluptatum? Commodi eius aperiam quidem qui
                    repudiandae ex numquam molestias porro a voluptas voluptatum
                    aliquid error eaque pariatur beatae officia illum, minus
                    dolorem delectus quo totam harum recusandae nobis. At,
                    assumenda.
                </p>
                <Button>お問い合わせ</Button>
            </div>
        </div>
    );
}
