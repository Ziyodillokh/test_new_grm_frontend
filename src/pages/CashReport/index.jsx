import { useState, useCallback } from "react";
import StatsGrid from "@/components/common/StatsGrid";
import Toolbar from "@/components/common/Toolbar";
import ActionButton from "@/components/common/ActionButton";
import CardList from "@/components/organisms/CardList";
import CashflowRow from "@/components/molecules/CashflowRow";
import cls from "./CashReport.module.scss";

// Mock data — will be replaced by API calls
const INITIAL_CASHFLOWS = [
    {
        id: 1,
        amount: "2 340.00",
        isIncome: true,
        typeLabel: "Sotuv",
        tipLabel: "Sotuv",
        statusColor: "#47B13C",
        date: "28 Mart 09:15",
        comment: "Gilamlar to'lovi",
        orderInfo: "Sotuv #1041",
        status: "approved",
        avatarBadgeColor: "#47B13C",
    },
    {
        id: 2,
        amount: "780.00",
        isIncome: true,
        typeLabel: "Sotuv",
        tipLabel: "Sotuv",
        statusColor: "#47B13C",
        date: "27 Mart 16:42",
        comment: "Qisman to'lov — qoldiq $220",
        orderInfo: "Sotuv #1038",
        status: "pending",
        avatarBadgeColor: "#47B13C",
    },
    {
        id: 3,
        amount: "5 000.00",
        isIncome: true,
        typeLabel: "Boss kirim",
        tipLabel: "Boss kirim",
        statusColor: "#3B82F6",
        date: "27 Mart 11:00",
        comment: "Aprel oyi uchun aylanma mablag'",
        orderInfo: null,
        status: "approved",
        avatarBadgeColor: "#3B82F6",
    },
    {
        id: 4,
        amount: "420.50",
        isIncome: false,
        typeLabel: "Dokon chiqimi",
        tipLabel: "Dokon chiqimi",
        statusColor: "#EF5C12",
        date: "26 Mart 14:30",
        comment: "Mart oyi uchun dokon arendasiga",
        orderInfo: null,
        status: "approved",
        avatarBadgeColor: "#EF5C12",
    },
    {
        id: 5,
        amount: "1 200.00",
        isIncome: false,
        typeLabel: "Xodim maoshi",
        tipLabel: "Xodim maoshi",
        statusColor: "#EF5C12",
        date: "25 Mart 18:00",
        comment: "Akmal — mart oyi maoshi",
        orderInfo: null,
        status: "pending",
        avatarBadgeColor: "#EF5C12",
    },
    {
        id: 6,
        amount: "1 200.00",
        isIncome: false,
        typeLabel: "Xodim maoshi",
        tipLabel: "Xodim maoshi",
        statusColor: "#EF5C12",
        date: "25 Mart 18:05",
        comment: "Bobur — mart oyi maoshi",
        orderInfo: null,
        status: "approved",
        avatarBadgeColor: "#EF5C12",
    },
    {
        id: 7,
        amount: "3 150.00",
        isIncome: true,
        typeLabel: "Perechisleniya",
        tipLabel: "Perechisleniya",
        statusColor: "#8B5CF6",
        date: "25 Mart 10:20",
        comment: "Bank hisobidan naqd pul olish",
        orderInfo: null,
        status: "approved",
        avatarBadgeColor: "#8B5CF6",
    },
    {
        id: 8,
        amount: "12 500.00",
        isIncome: false,
        typeLabel: "Inkassatsiya",
        tipLabel: "Inkassatsiya",
        statusColor: "#EF5C12",
        date: "24 Mart 17:00",
        comment: "Haftalik inkassatsiya — bank hisobiga",
        orderInfo: null,
        status: "approved",
        avatarBadgeColor: "#EF5C12",
    },
    {
        id: 9,
        amount: "960.00",
        isIncome: true,
        typeLabel: "Sotuv",
        tipLabel: "Sotuv",
        statusColor: "#47B13C",
        date: "24 Mart 13:10",
        comment: "To'liq to'lov",
        orderInfo: "Sotuv #1035",
        status: "approved",
        avatarBadgeColor: "#47B13C",
    },
    {
        id: 10,
        amount: "350.00",
        isIncome: false,
        typeLabel: "Dokon chiqimi",
        tipLabel: "Dokon chiqimi",
        statusColor: "#EF5C12",
        date: "23 Mart 09:45",
        comment: "Elektr energiya to'lovi",
        orderInfo: null,
        status: "pending",
        avatarBadgeColor: "#EF5C12",
    },
    {
        id: 11,
        amount: "1 840.00",
        isIncome: true,
        typeLabel: "Sotuv",
        tipLabel: "Sotuv",
        statusColor: "#47B13C",
        date: "22 Mart 15:30",
        comment: "Buyurtma to'lovi — yetkazib berish bilan",
        orderInfo: "Sotuv #1032",
        status: "approved",
        avatarBadgeColor: "#47B13C",
    },
    {
        id: 12,
        amount: "2 000.00",
        isIncome: true,
        typeLabel: "Boss kirim",
        tipLabel: "Boss kirim",
        statusColor: "#3B82F6",
        date: "21 Mart 10:00",
        comment: "Qo'shimcha mablag' kiritish",
        orderInfo: null,
        status: "rejected",
        avatarBadgeColor: "#3B82F6",
    },
];

const toolbarActions = (
    <>
        <ActionButton label="Kirim qo'shish" variant="green" />
        <ActionButton label="Chiqim qo'shish" variant="orange" />
    </>
);

export default function CashReport() {
    // State for future API integration
    const [cashflows, setCashflows] = useState(INITIAL_CASHFLOWS);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const handleApprove = useCallback((id) => {
        setCashflows((prev) =>
            prev.map((cf) =>
                cf.id === id ? { ...cf, status: "approved" } : cf
            )
        );
        // TODO: API call — PATCH /cashflows/:id/approve
    }, []);

    if (loading) {
        return (
            <div className={cls.cashReport}>
                <Toolbar actions={toolbarActions} showMonthSelect />
                <div className={cls.loadingState}>Yuklanmoqda...</div>
            </div>
        );
    }

    if (error) {
        return (
            <div className={cls.cashReport}>
                <Toolbar actions={toolbarActions} showMonthSelect />
                <div className={cls.errorState}>
                    <span>Xatolik yuz berdi: {error}</span>
                    <button
                        className={cls.retryBtn}
                        onClick={() => {
                            setError(null);
                            setLoading(true);
                            // TODO: retry fetch
                        }}
                    >
                        Qayta urinish
                    </button>
                </div>
            </div>
        );
    }

    return (
        <div className={cls.cashReport}>
            <Toolbar actions={toolbarActions} showMonthSelect />
            <StatsGrid />
            <CardList>
                {cashflows.map((cf) => (
                    <CashflowRow
                        key={cf.id}
                        amount={cf.amount}
                        isIncome={cf.isIncome}
                        typeLabel={cf.typeLabel}
                        tipLabel={cf.tipLabel}
                        statusColor={cf.statusColor}
                        date={cf.date}
                        comment={cf.comment}
                        orderInfo={cf.orderInfo}
                        status={cf.status}
                        onApprove={() => handleApprove(cf.id)}
                        avatarBadgeColor={cf.avatarBadgeColor}
                    />
                ))}
            </CardList>
        </div>
    );
}
