import BarChart from "../Icons/BarChart";
import Settings from "../Icons/Settings";
import Excel from "../Icons/Excel";
import Brain from "../Icons/Brain";
import DollarSign from "../Icons/DollarSign";
import SunHigh from "../Icons/SunHigh";
import Lock from "../Icons/Lock";
import TrendingUp from "../Icons/TrendingUp";
import cls from "./RightSidebar.module.scss";

export default function RightSidebar() {
  return (
    <div className={cls.sidebar}>
      {/* Planka ko'rsatkichi */}
      <div className={cls.plankaWidget}>
        <div className={cls.plankaHeader}>
          <div className={cls.plankaLeft}>
            <div className={cls.widgetIcon}>
              <BarChart />
            </div>
            <div className={cls.widgetContent}>
              <div className={cls.widgetTitle}>Planka ko'rsatkichi</div>
              <a href="#" className={cls.widgetLink}>
                Joriy kassa kesimida
              </a>
            </div>
          </div>
          <button className={cls.settingsBtn}>
            <Settings />
          </button>
        </div>
        <div className={cls.plankaBody}>
          <div className={cls.plankaInfo}>
            <div className={cls.plankaValue}>7545.06</div>
            <div className={cls.plankaProgress}>
              <TrendingUp />
              <span className={cls.plankaPercent}>98% bajarildi</span>
            </div>
          </div>
          <div className={cls.plankaChart}>
            <svg
              viewBox="0 0 180 100"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <defs>
                <linearGradient id="chartGradient" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="#FF8C00" stopOpacity="0.3" />
                  <stop offset="100%" stopColor="#FF8C00" stopOpacity="0.02" />
                </linearGradient>
              </defs>
              <path
                d="M0 85 Q20 80 35 70 T70 55 Q85 48 100 35 T135 20 Q150 18 165 25 T180 15"
                fill="none"
                stroke="#FF8C00"
                strokeWidth="2.5"
              />
              <path
                d="M0 85 Q20 80 35 70 T70 55 Q85 48 100 35 T135 20 Q150 18 165 25 T180 15 V100 H0 Z"
                fill="url(#chartGradient)"
              />
              <path
                d="M0 65 Q30 60 60 50 T120 35 Q150 30 180 40"
                fill="none"
                stroke="#47B13C"
                strokeWidth="2.5"
              />
            </svg>
          </div>
        </div>
      </div>

      {/* Excelga eksport */}
      <div className={cls.excelCard}>
        <div className={cls.excelIcon}>
          <Excel />
        </div>
        <div className={cls.excelContent}>
          <div className={cls.excelTitle}>Excelga eksport qilish</div>
          <div className={cls.excelSub}>Barcha sotuv & Kirim-chiqimlar</div>
        </div>
      </div>

      {/* Si tahlil */}
      <div className={cls.widget}>
        <div className={cls.brainIcon}>
          <Brain color="#fff" />
        </div>
        <div className={cls.widgetContent}>
          <div className={cls.widgetTitle}>Si tahlil</div>
          <div className={cls.widgetSub}>Sun'iy intellekt tahlili</div>
        </div>
      </div>

      {/* Valyuta kursi */}
      <div className={cls.widget}>
        <div className={cls.currencyIcon}>
          <DollarSign />
        </div>
        <div className={cls.widgetContent}>
          <div className={cls.widgetTitle}>1$ ~ 12 110 uzs</div>
          <div className={cls.widgetSub}>Markaziy Bank 25 Mart 2026</div>
        </div>
      </div>

      {/* Ob-havo */}
      <div className={cls.widget}>
        <div className={cls.weatherIcon}>
          <SunHigh color="#666" />
        </div>
        <div className={cls.widgetContent}>
          <div className={cls.widgetTitle}>+4 °C</div>
          <div className={cls.widgetSub}>Quyoshli kun</div>
        </div>
      </div>

      {/* Kirish parametrlarini eslab qolish */}
      <label className={cls.toggleRow}>
        <input type="checkbox" className={cls.toggleInput} />
        <span className={cls.toggleSwitch} />
        <span className={cls.toggleLabel}>
          Kirish parametrlarini eslab qolish
        </span>
      </label>

      {/* Qulflash */}
      <div className={cls.lockRow}>
        <div className={cls.lockCircle}>
          <Lock />
        </div>
        <span className={cls.lockText}>Qulflash</span>
      </div>
    </div>
  );
}
