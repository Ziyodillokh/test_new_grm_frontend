import Avatar from "@/components/common/Avatar";
import MoreVertical from "@/components/common/Icons/MoreVertical";
import CheckCircle from "@/components/common/Icons/CheckCircle";
import cls from "./CashflowRow.module.scss";
import { cn } from "@/lib/utils";

const STATUS_CONFIG = {
  pending: { className: "statusPending", label: "Kutilmoqda" },
  approved: { className: "statusApproved", label: "Tasdiqlangan" },
  rejected: { className: "statusRejected", label: "Rad etilgan" },
};

const CashflowRow = ({
  amount,
  isIncome,
  typeLabel,
  tipLabel,
  statusColor,
  date,
  comment,
  orderInfo,
  status = "approved",
  onApprove,
  avatarSrc,
  avatarBadgeColor,
}) => {
  const isPending = status === "pending";
  const statusCfg = STATUS_CONFIG[status] || STATUS_CONFIG.approved;

  return (
    <div className={cn(cls.row, isPending && cls.rowPending)}>
      <div className={cn(cls.amount, isIncome ? cls.income : cls.expense)}>
        {isIncome ? `+ ${amount}` : `- ${amount}`}
      </div>

      <div className={cls.avatarCell}>
        <div className={cls.avatarWrapper}>
          <Avatar src={avatarSrc} size={42} />
          {avatarBadgeColor && (
            <span
              className={cls.avatarBadge}
              style={{ backgroundColor: avatarBadgeColor }}
            />
          )}
        </div>
      </div>

      <div className={cls.statusCell}>
        <span
          className={cls.statusDot}
          style={{ backgroundColor: statusColor }}
        />
        <span className={cls.statusLabel}>{typeLabel}</span>
      </div>

      <div className={cls.tipCell}>
        {tipLabel && <span className={cls.tipBadge}>{tipLabel}</span>}
      </div>

      <div className={cls.dateCell}>{date}</div>

      <div className={cls.commentCell}>
        {orderInfo && <span className={cls.orderTag}>{orderInfo}</span>}
        <span className={cls.commentText}>{comment}</span>
      </div>

      <div className={cls.statusBadgeCell}>
        <span className={cn(cls.statusBadge, cls[statusCfg.className])}>
          <span className={cls.statusBadgeDot} />
          {statusCfg.label}
        </span>
      </div>

      {isPending && onApprove ? (
        <button
          className={cls.approveBtn}
          onClick={onApprove}
          title="Tasdiqlash"
        >
          <CheckCircle />
        </button>
      ) : (
        <div className={cls.approvePlaceholder} />
      )}

      <button className={cls.moreBtn}>
        <MoreVertical />
      </button>
    </div>
  );
};

export default CashflowRow;
