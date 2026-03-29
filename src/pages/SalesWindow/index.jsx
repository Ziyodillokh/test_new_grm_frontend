import StatsGrid from "@/components/common/StatsGrid";
import Toolbar from "@/components/common/Toolbar";
import CardList from "@/components/organisms/CardList";
import ProductRow from "@/components/molecules/ProductRow";
import cls from './SalesWindow.module.scss';

const products = [
    {
        image: `${import.meta.env.BASE_URL}assets/product-placeholder.jpg`,
        collection: "Ghetaran 1500",
        tags: ["Donabay", "To'rtburchak", "Klassik", "Cream, Beige"],
        code: "G499",
        size: "200x300",
        price: "$50",
        count: "1x",
        discount: "-11.38$",
        total: "420.50$",
        secondPrice: "120$",
        showCheck: true,
    },
    {
        image: `${import.meta.env.BASE_URL}assets/product-placeholder.jpg`,
        collection: "Ghetaran 1500",
        code: "G499",
        size: "200x300",
        price: "$50",
        count: "1x",
        discount: "-11.38$",
        total: "420.50$",
        secondPrice: "120$",
        showCheck: true,
    },
    {
        image: `${import.meta.env.BASE_URL}assets/product-placeholder.jpg`,
        collection: "Ghetaran 1500",
        code: "G499",
        size: "200x300",
        price: "$50",
        count: "1x",
        discount: "-11.38$",
        total: "420.50$",
        secondPrice: "120$",
        showCheck: true,
    },
    {
        image: `${import.meta.env.BASE_URL}assets/product-placeholder.jpg`,
        collection: "Ghetaran 1500",
        code: "G499",
        size: "200x300",
        price: "$50",
        count: "1x",
        discount: "-11.38$",
        total: "420.50$",
        secondPrice: "120$",
    },
    {
        image: `${import.meta.env.BASE_URL}assets/product-placeholder.jpg`,
        collection: "Ghetaran 1500",
        code: "G499",
        size: "200x300",
        price: "$50",
        count: "1x",
        discount: "-11.38$",
        total: "420.50$",
        secondPrice: "120$",
    },
    {
        image: `${import.meta.env.BASE_URL}assets/product-placeholder.jpg`,
        collection: "Ghetaran 1500",
        code: "G499",
        size: "200x300",
        price: "$50",
        count: "1x",
        discount: "-11.38$",
        total: "420.50$",
        secondPrice: "120$",
    },
    {
        image: `${import.meta.env.BASE_URL}assets/product-placeholder.jpg`,
        collection: "Ghetaran 1500",
        code: "G499",
        size: "200x300",
        price: "$50",
        count: "1x",
        discount: "-11.38$",
        total: "420.50$",
        secondPrice: "120$",
    },
];

export default function SalesWindow() {
    return (
        <div className={cls.sales}>
            <Toolbar />
            <StatsGrid />

            <CardList>
                {products.map((item, index) => (
                    <ProductRow key={index} {...item} />
                ))}
            </CardList>

            <div className={cls.dateLabel}>15-Mart 2026</div>

            <CardList>
                {products.slice(0, 3).map((item, index) => (
                    <ProductRow key={`prev-${index}`} {...item} />
                ))}
            </CardList>
        </div>
    );
}
