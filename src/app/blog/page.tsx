import Link from "next/link";
import { Calendar, Tag, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const posts = [
    {
        id: 1,
        title: "Como se preparar para seu primeiro salto duplo",
        summary: "Dicas essenciais de alimentação, vestuário e mentalidade para aproveitar ao máximo a experiência.",
        date: "12 AGO 2024",
        category: "Iniciantes",
        image: "https://images.unsplash.com/photo-1529141707011-85b467e2a441?q=80&w=2070&auto=format&fit=crop",
        slug: "primeiro-salto",
    },
    {
        id: 2,
        title: "Entenda as fases do curso AFF",
        summary: "O passo a passo da formação que vai te transformar em um paraquedista autônomo em 7 níveis.",
        date: "15 AGO 2024",
        category: "Instrução",
        image: "https://images.unsplash.com/photo-1596716768393-2705e464c126?q=80&w=2070&auto=format&fit=crop",
        slug: "curso-aff-fases",
    },
    {
        id: 3,
        title: "Equipamentos: O que é o Cypress?",
        summary: "Conheça a tecnologia que garante a abertura automática do paraquedas reserva em emergências.",
        date: "20 AGO 2024",
        category: "Segurança",
        image: "https://images.unsplash.com/photo-1519074069444-1ba4fff66d16?q=80&w=1974&auto=format&fit=crop",
        slug: "equipamentos-cypress",
    },
    {
        id: 4,
        title: "Recorde Brasileiro de Grandes Formações",
        summary: "Flyup lidera o time que quebrou o recorde nacional de Big Way em Boituva neste fim de semana.",
        date: "25 AGO 2024",
        category: "Notícias",
        image: "https://images.unsplash.com/photo-1542408892-d965d1d61993?q=80&w=1974&auto=format&fit=crop",
        slug: "recorde-brasileiro",
    },
    {
        id: 5,
        title: "Benefícios mentais dos esportes radicais",
        summary: "Como a adrenalina controlada pode ajudar no foco, redução de estresse e autoconfiança.",
        date: "01 SET 2024",
        category: "Lifestyle",
        image: "https://images.unsplash.com/photo-1522066228383-7d84813088b9?q=80&w=2070&auto=format&fit=crop",
        slug: "beneficios-mentais",
    },
    {
        id: 6,
        title: "Boituva: A capital do paraquedismo",
        summary: "Por que nossa cidade é considerada o melhor lugar da América Latina para a prática do esporte.",
        date: "05 SET 2024",
        category: "Local",
        image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1974&auto=format&fit=crop",
        slug: "boituva-capital",
    },
];

export default function Blog() {
    return (
        <div className="pt-24 min-h-screen bg-zinc-950">
            {/* Header */}
            <section className="py-20 border-b border-white/5 bg-zinc-900/20">
                <div className="container mx-auto px-6 text-center">
                    <span className="text-primary text-sm font-bold uppercase tracking-widest mb-4 block">
                        Conteúdo Exclusivo
                    </span>
                    <h1 className="text-5xl md:text-7xl font-black text-white uppercase tracking-tighter font-montserrat mb-6">
                        Flyup <span className="text-primary">Journal</span>
                    </h1>
                    <p className="text-zinc-400 max-w-2xl mx-auto text-lg">
                        Mergulhe no universo do paraquedismo. Dicas técnicas, novidades e histórias inspiradoras.
                    </p>
                </div>
            </section>

            {/* Grid */}
            <section className="py-24">
                <div className="container mx-auto px-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {posts.map((post) => (
                            <article
                                key={post.id}
                                className="group bg-zinc-900/30 border border-white/5 rounded-xl overflow-hidden hover:border-white/20 hover:bg-zinc-900/50 transition-all duration-300 flex flex-col h-full"
                            >
                                {/* Image */}
                                <Link href={`/blog/${post.slug}`} className="block relative h-64 overflow-hidden">
                                    <div
                                        className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                                        style={{ backgroundImage: `url(${post.image})` }}
                                    />
                                    <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors" />

                                    <div className="absolute top-4 left-4">
                                        <span className="px-3 py-1 bg-black/60 backdrop-blur-md text-primary text-xs font-bold uppercase tracking-wider rounded-md border border-white/10 flex items-center gap-2">
                                            <Tag size={12} />
                                            {post.category}
                                        </span>
                                    </div>
                                </Link>

                                {/* Content */}
                                <div className="p-8 flex flex-col flex-grow">
                                    <div className="flex items-center gap-2 text-zinc-500 text-xs uppercase tracking-wider mb-4">
                                        <Calendar size={14} />
                                        <span>{post.date}</span>
                                    </div>

                                    <Link href={`/blog/${post.slug}`} className="block mb-4">
                                        <h3 className="text-2xl font-bold text-white font-montserrat uppercase leading-tight group-hover:text-primary transition-colors line-clamp-2">
                                            {post.title}
                                        </h3>
                                    </Link>

                                    <p className="text-zinc-400 text-sm leading-relaxed line-clamp-3 mb-6 flex-grow">
                                        {post.summary}
                                    </p>

                                    <div className="pt-6 border-t border-white/5">
                                        <Button variant="link" className="px-0 text-white hover:text-primary p-0 h-auto font-bold uppercase tracking-wider text-xs">
                                            Ler Artigo <ArrowRight className="ml-2 size-4" />
                                        </Button>
                                    </div>
                                </div>
                            </article>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
}
