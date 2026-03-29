import Avatar from "@/components/common/Avatar";
import MoreVertical from "@/components/common/Icons/MoreVertical";
import cls from "./CashflowRow.module.scss";
import { cn } from "@/lib/utils";

const CashflowRow = ({
  amount,
  isIncome,
  typeLabel,
  statusColor,
  date,
  comment,
  avatarSrc,
  avatarBadgeColor,
}) => {
  return (
    <div className={cls.row}>
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

      <div className={cls.dateCell}>{date}</div>

      <div className={cls.commentCell}>{comment}</div>

      <button className={cls.moreBtn}>
        <MoreVertical />
      </button>
    </div>
  );
};

export default CashflowRow;
