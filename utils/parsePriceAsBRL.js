export default function parsePriceAsBRL(price) {
    return Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(price);
}