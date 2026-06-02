import type { Metadata } from "next";
import SaltoDuploV3Client from "../salto-duplo-v3/SaltoDuploV3Client";

export const metadata: Metadata = {
    title: "Salto Duplo de Paraquedas em Boituva | Fly Up Paraquedismo — Since 1992",
    description:
        "Faça seu salto duplo de paraquedas em Boituva com a Fly Up, a escola mais experiente de São Paulo desde 1992. Promoção exclusiva: de R$890 por R$745 com vídeo e fotos inclusos. Parcele em até 12x. Saltamos todos os dias. Agende agora!",
    keywords: [
        "salto duplo paraquedas",
        "salto duplo boituva",
        "paraquedismo boituva",
        "salto de paraquedas são paulo",
        "escola paraquedismo boituva",
        "fly up paraquedismo",
        "salto duplo preço",
        "salto tandem boituva",
    ],
    openGraph: {
        title: "Salto Duplo de Paraquedas em Boituva | Fly Up — Since 1992",
        description:
            "Sinta 50 segundos de queda livre a 200km/h com total segurança. Promoção: de R$890 por R$745. Parcele em 12x. Saltamos todos os dias em Boituva-SP.",
        images: [
            "https://res.cloudinary.com/dn50urzkv/image/upload/f_auto,q_auto/v1771951037/Salto_Duplo_Editado_16-9_qgdiqh.png",
        ],
        type: "website",
        locale: "pt_BR",
    },
};

export default function SaltoDuploPage() {
    return <SaltoDuploV3Client />;
}
