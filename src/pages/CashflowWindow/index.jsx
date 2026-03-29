import StatsGrid from "@/components/common/StatsGrid";
import Toolbar from "@/components/common/Toolbar";
import ActionButton from "@/components/common/ActionButton";
import CardList from "@/components/organisms/CardList";
import CashflowRow from "@/components/molecules/CashflowRow";
import TransactionRow from "@/components/molecules/TransactionRow";
import cls from "./CashflowWindow.module.scss";

const rows = [
  {
    type: "cashflow",
    amount: "420.50",
    isIncome: false,
    typeLabel: "Dokon",
    statusColor: "#EF5C12",
    date: "12 Mart 12:30",
    comment: "Mart oyi uchun dokon arendasiga",
    avatarBadgeColor: "#47B13C",
  },
  {
    type: "cashflow",
    amount: "420.50",
    isIncome: true,
    typeLabel: "Boss",
    statusColor: "#47B13C",
    date: "12 Mart 12:30",
    comment: "Li9 ustaxonga",
    avatarBadgeColor: "#47B13C",
  },
  {
    type: "cashflow",
    amount: "1420.50",
    isIncome: true,
    typeLabel: "Perechesleniya",
    statusColor: "#0078d4",
    date: "12 Mart 12:30",
    comment: "Gilemler uchun",
  },
  {
    type: "cashflow",
    amount: "420.50",
    isIncome: false,
    typeLabel: "Dokon",
    statusColor: "#EF5C12",
    date: "12 Mart 12:30",
    comment: "Mart oyi uchun dokon arendasiga",
    avatarBadgeColor: "#47B13C",
  },
  {
    type: "transaction",
    amount: "+ 420.50",
    subAmount: "+ 120",
    typeLabel: "Sotuv",
    statusColor: "#47B13C",
    date: "12 Mart 12:30",
    collection: "Ghariran 1500",
    code: "G499",
    size: "200x3000",
    price: "$50",
    length: "100am",
    discount: "-11.38$",
    showCheck: true,
    avatarBadgeColor: "#47B13C",
  },
  {
    type: "transaction",
    amount: "+ 420.50",
    subAmount: "+ 120",
    typeLabel: "Sotuv",
    statusColor: "#47B13C",
    date: "12 Mart 12:30",
    collection: "Ghariran 1500",
    code: "G499",
    size: "200x3000",
    price: "$50",
    length: "100am",
    discount: "-11.38$",
    showCheck: true,
    avatarBadgeColor: "#47B13C",
  },
  {
    type: "cashflow",
    amount: "420.50",
    isIncome: false,
    typeLabel: "Dokon",
    statusColor: "#EF5C12",
    date: "12 Mart 12:30",
    comment: "Mart oyi uchun dokon arendasiga",
    avatarBadgeColor: "#47B13C",
  },
  {
    type: "transaction",
    amount: "+ 420.50",
    subAmount: "+ 120",
    typeLabel: "Sotuv",
    statusColor: "#47B13C",
    date: "12 Mart 12:30",
    collection: "Ghariran 1500",
    code: "G499",
    size: "200x3000",
    price: "$50",
    length: "100am",
    discount: "-11.38$",
    avatarBadgeColor: "#47B13C",
  },
  {
    type: "cashflow",
    amount: "420.50",
    isIncome: true,
    typeLabel: "Boss",
    statusColor: "#47B13C",
    date: "12 Mart 12:30",
    comment: "Mart oyi uchun dokon arendasiga",
  },
  {
    type: "transaction",
    amount: "+ 420.50",
    subAmount: "+ 120",
    typeLabel: "Vozvrat",
    statusColor: "#EF5C12",
    date: "12 Mart 12:30",
    collection: "Ghariran 1500",
    code: "G499",
    size: "200x3000",
    price: "$50",
    length: "100am",
    discount: "-11.38$",
    avatarBadgeColor: "#47B13C",
  },
];

const toolbarActions = (
  <>
    <ActionButton label="Kirim qo'shish" variant="green" />
    <ActionButton label="Chiqim qo'shish" variant="orange" />
  </>
);

export default function CashflowWindow() {
  return (
    <div className={cls.cashflow}>
      <Toolbar actions={toolbarActions} showMonthSelect />
      <StatsGrid />
      <CardList>
        {rows.map((item, index) => {
          const { type, ...props } = item;
          return type === "transaction" ? (
            <TransactionRow key={index} {...props} />
          ) : (
            <CashflowRow key={index} {...props} />
          );
        })}
      </CardList>
    </div>
  );
}
