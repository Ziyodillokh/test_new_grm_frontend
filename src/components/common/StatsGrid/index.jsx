import StatsCard from "@/components/molecules/StatsCard";
import MainBalanceCard from "../MainBalanceCard";
import cls from "./StatsGrid.module.scss";

const StatsGrid = () => {
  return (
    <div className={cls.grid}>
      <div className={cls.main}>
        <MainBalanceCard
          balance="$128 460.90"
          income="$172 545.06"
          expense="$73 545.06"
          saldo="$1,842.00"
        />
      </div>
      <div className={cls.mini}>
        <StatsCard
          variant="blue"
          title="Umumiy sotuv"
          value="122 860.00"
          trend="↘ -1.8%"
          selectable
        />
        <StatsCard
          title="Qarz savdosi"
          value="1,094.00"
          trend="↘ -1.8%"
          selectable
        />
        <StatsCard
          title="Terminal"
          value="2,387.00"
          trend="↘ -1.8%"
          selectable
        />
        <StatsCard
          title="Qaytarilgan"
          value="-1,094.00"
          trend="↘ -1.8%"
          selectable
        />
        <StatsCard
          title="Inkasatsiya"
          value="122 860.00"
          trend="↘ -1.8%"
          selectable
        />
        <StatsCard
          title="Sotuv hajmi m²"
          value="122 860.00"
          trend="↘ -1.8%"
          selectable
        />
        <StatsCard
          title="Navar foydasi"
          value="122 860.00"
          trend="↘ -1.8%"
          selectable
        />
        <StatsCard
          variant="orange"
          title="Chegirma"
          value="122 860.00"
          trend="↘ -1.8%"
          selectable
        />
      </div>
    </div>
  );
};

export default StatsGrid;
