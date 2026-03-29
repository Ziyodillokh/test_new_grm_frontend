import TrendingDown from "@/components/common/Icons/TrendingDown";
import ChevronDown from "@/components/common/Icons/ChevronDown";
import cls from "./StatsCard.module.scss";

const StatsCard = ({ title, value, trend, variant = "white", selectable }) => {
  return (
    <div className={`${cls.card} ${cls[variant]}`}>
      <div className={cls.top}>
        <span className={cls.value}>{value}</span>
        {selectable && (
          <span className={cls.selectArrows}>
            <ChevronDown width={12} height={12} />
          </span>
        )}
      </div>
      <div className={cls.trend}>
        <TrendingDown />
        <span>-1.8%</span>
      </div>
      <div className={cls.title}>{title}</div>
    </div>
  );
};

export default StatsCard;
