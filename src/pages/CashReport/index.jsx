import StatsGrid from "@/components/common/StatsGrid";
import Toolbar from "@/components/common/Toolbar";
import ActionButton from "@/components/common/ActionButton";
import CardList from "@/components/organisms/CardList";
import CashflowRow from "@/components/molecules/CashflowRow";
import TransactionRow from "@/components/molecules/TransactionRow";
import cls from './CashReport.module.scss'

const rows = [
    {
        type: 'cashflow',
        amount: "420.50",
        isIncome: false,
        typeLabel: "Dokon",
        statusColor: "#EF5C12",
        date: "12 Mart 12:30",
        comment: "Mart oyi uchun dokon arendasiga",
        avatarBadgeColor: "#47B13C",
    },
    {
        type: 'cashflow',
        amount: "420.50",
        isIncome: true,
        typeLabel: "Boss",
        statusColor: "#EF5C12",
        date: "12 Mart 12:30",
        comment: "Li9 ustaxonga",
        avatarBadgeColor: "#47B13C",
    },
    {
        type: 'cashflow',
        amount: "1420.50",
        isIncome: true,
        typeLabel: "Perechesleniya",
        statusColor: "#EF5C12",
        date: "12 Mart 12:30",
        comment: "Gilamlar uchun",
        avatarBadgeColor: "#47B13C",
    },
    {
        type: 'cashflow',
        amount: "420.50",
        isIncome: false,
        typeLabel: "Dokon",
        statusColor: "#EF5C12",
        date: "12 Mart 12:30",
        comment: "Mart oyi uchun dokon arendasiga",
        avatarBadgeColor: "#47B13C",
    },
    {
        type: 'sale',
        amount: "420.50",
        subAmount: "+ 120",
        typeLabel: "Sotuv",
        statusColor: "#47B13C",
        date: "12 Mart 12:30",
        collection: "Ghetaran 1500",
        code: "G499",
        size: "200x3000",
        price: "$50",
        length: "100sm",
        showCheck: true,
        avatarBadgeColor: "#47B13C",
    },
    {
        type: 'sale',
        amount: "420.50",
        subAmount: "+ 120",
        typeLabel: "Sotuv",
        statusColor: "#47B13C",
        date: "12 Mart 12:30",
        collection: "Ghetaran 1500",
        code: "G499",
        size: "200x3000",
        price: "$50",
        length: "100sm",
        discount: "-11.38$",
        showCheck: true,
        avatarBadgeColor: "#47B13C",
    },
    {
        type: 'cashflow',
        amount: "420.50",
        isIncome: false,
        typeLabel: "Dokon",
        statusColor: "#EF5C12",
        date: "12 Mart 12:30",
        comment: "Mart oyi uchun dokon arendasiga",
        avatarBadgeColor: "#47B13C",
    },
    {
        type: 'sale',
        amount: "420.50",
        subAmount: "+ 120",
        typeLabel: "Sotuv",
        statusColor: "#47B13C",
        date: "12 Mart 12:30",
        collection: "Ghetaran 1500",
        code: "G499",
        size: "200x3000",
        price: "$50",
        length: "100sm",
        avatarBadgeColor: "#47B13C",
    },
    {
        type: 'cashflow',
        amount: "420.50",
        isIncome: true,
        typeLabel: "Boss",
        statusColor: "#EF5C12",
        date: "12 Mart 12:30",
        comment: "Mart oyi uchun dokon arendasiga",
        avatarBadgeColor: "#47B13C",
    },
    {
        type: 'sale',
        amount: "420.50",
        subAmount: "+ 120",
        typeLabel: "Vazvrat",
        statusColor: "#e74c3c",
        date: "12 Mart 12:30",
        collection: "Ghetaran 1500",
        code: "G499",
        size: "200x3000",
        price: "$50",
        length: "100sm",
        discount: "-11.38$",
        avatarBadgeColor: "#e74c3c",
    },
];

const toolbarActions = (
    <>
        <ActionButton label="Kirim qo'shish" variant="green" />
        <ActionButton label="Chiqim qo'shish" variant="orange" />
    </>
);

export default function CashReport() {
    return (
        <div className={cls.cashReport}>
            <Toolbar actions={toolbarActions} showMonthSelect />
            <StatsGrid />
            <CardList>
                {rows.map((row, index) =>
                    row.type === 'cashflow' ? (
                        <CashflowRow
                            key={index}
                            amount={row.amount}
                            isIncome={row.isIncome}
                            typeLabel={row.typeLabel}
                            statusColor={row.statusColor}
                            date={row.date}
                            comment={row.comment}
                            avatarSrc={row.avatarSrc}
                            avatarBadgeColor={row.avatarBadgeColor}
                        />
                    ) : (
                        <TransactionRow
                            key={index}
                            amount={row.amount}
                            subAmount={row.subAmount}
                            isLink={row.isLink}
                            typeLabel={row.typeLabel}
                            statusColor={row.statusColor}
                            date={row.date}
                            collection={row.collection}
                            code={row.code}
                            size={row.size}
                            price={row.price}
                            length={row.length}
                            discount={row.discount}
                            showCheck={row.showCheck}
                            avatarSrc={row.avatarSrc}
                            avatarBadgeColor={row.avatarBadgeColor}
                        />
                    )
                )}
            </CardList>
        </div>
    )
}
