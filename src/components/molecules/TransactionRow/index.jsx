import { useState } from "react";
import Avatar from "@/components/common/Avatar";
import MoreVertical from "@/components/common/Icons/MoreVertical";
import CheckCircle from "@/components/common/Icons/CheckCircle";
import ChevronDown from "@/components/common/Icons/ChevronDown";
import ChevronUp from "@/components/common/Icons/ChevronUp";
import { cn } from "@/lib/utils";
import cls from "./TransactionRow.module.scss";

const TransactionRow = ({
  amount,
  subAmount,
  isIncome,
  isLink,
  typeLabel,
  statusColor,
  date,
  collection,
  code,
  size,
  price,
  length,
  discount,
  showCheck,
  comment,
  tags,
  avatarSrc,
  avatarBadgeColor,
}) => {
  const [expanded, setExpanded] = useState(false);
  const hasExpandContent = comment || (tags && tags.length > 0);

  return (
    <div className={cls.wrapper}>
      <div className={cls.row}>
        <div className={cls.amountCell}>
          <span className={cn(cls.amount, isLink && cls.link)}>{amount}</span>
          {subAmount && <span className={cls.subAmount}>{subAmount}</span>}
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
            style={{ backgroundColor: statusColor || "#47B13C" }}
          />
          <span className={cls.statusLabel}>{typeLabel}</span>
        </div>

        <div className={cls.dateCell}>{date}</div>

        <div className={cls.collectionCell}>{collection}</div>

        <div className={cls.codeCell}>{code}</div>

        <div className={cls.sizeCell}>{size}</div>

        <div className={cls.priceCell}>{price}</div>

        <div className={cls.lengthCell}>{length}</div>

        {discount ? (
          <div className={cls.discountCell}>{discount}</div>
        ) : (
          <div className={cls.discountCell} />
        )}

        <div className={cls.actionsCell}>
          {hasExpandContent && (
            <button
              className={cls.expandBtn}
              onClick={() => setExpanded(!expanded)}
            >
              {expanded ? <ChevronUp /> : <ChevronDown />}
            </button>
          )}

          {showCheck && (
            <button className={cls.checkBtn}>
              <CheckCircle />
            </button>
          )}

          <button className={cls.moreBtn}>
            <MoreVertical />
          </button>
        </div>
      </div>

      {expanded && hasExpandContent && (
        <div className={cls.expandedContent}>
          {comment && (
            <div className={cls.commentRow}>
              <span className={cls.commentLabel}>Izoh:</span>
              <span className={cls.commentText}>{comment}</span>
            </div>
          )}
          {tags && tags.length > 0 && (
            <div className={cls.tagsRow}>
              {tags.map((tag, i) => (
                <span key={i} className={cls.tag}>
                  {tag}
                </span>
              ))}
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default TransactionRow;
