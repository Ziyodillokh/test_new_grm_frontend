import CardList from "@/components/organisms/CardList";
import Monitor from "@/components/common/Icons/Monitor";
import Refresh from "@/components/common/Icons/Refresh";
import InfoWidget from "@/components/molecules/InfoWidget";
import ListItemCard from "@/components/molecules/ListItemCard";
import CreateActionCard from "@/components/molecules/CreateActionCard";
import DeviceAnalytics from "@/components/common/Icons/DeviceAnalytics";
import PageHeaderActions from "@/components/organisms/PageHeaderActions";
import cls from './Reports.module.scss'

const reportList = [
    {
        title: 'Joriy Kassa Hisoboti',
        subtitle: "Mart oyi uchun dokon arendasiga",
        icon: <DeviceAnalytics />
    },
    {
        title: 'Oylik Hisobotlar',
        subtitle: "Mart oyi uchun dokon arendasiga",
        icon: <DeviceAnalytics />
    },
    {
        title: 'Qoldiq Hisoboti',
        subtitle: "Mart oyi uchun dokon arendasiga",
        icon: <DeviceAnalytics />
    },
    {
        title: 'Sotuvchi Hisoboti',
        subtitle: "Mart oyi uchun dokon arendasiga",
        icon: <DeviceAnalytics />
    },
    {
        title: 'Umumiy Hisobot',
        subtitle: "Mart oyi uchun dokon arendasiga",
        icon: <DeviceAnalytics />
    },
    {
        title: 'Savdo bo’yicha otchot',
        subtitle: "Mart oyi uchun dokon arendasiga",
        icon: <DeviceAnalytics />
    },
    {
        title: 'Dilerlar boyicha otchot',
        subtitle: "Mart oyi uchun dokon arendasiga",
        icon: <DeviceAnalytics />
    },
    {
        title: 'Holaguncha otchot',
        subtitle: "Mart oyi uchun dokon arendasiga",
        icon: <DeviceAnalytics />
    },
]

export default function Reports() {
    return (
        <div className={cls.reports}>
            <PageHeaderActions>
                <CreateActionCard
                    image={<img src={`${import.meta.env.BASE_URL}assets/report-icon.png`} />}
                    title="HISOBOT YARATISH"
                    subtitle="Talabga mos hisobot yaratish"
                />
                <InfoWidget
                    title="Monitoring"
                    subtitle="Flilallar kesimida"
                    icon={<Monitor width={36} height={36} strokeWidth={0.7} />}
                />
                <InfoWidget
                    title="Yangilashni so'rash"
                    subtitle="Barcha kirim-chiqimlarni kiritishni so’rash"
                    icon={<Refresh width={36} height={36} strokeWidth={0.7} />}
                />
            </PageHeaderActions>
            <CardList>
                {reportList.map((item, index) => (
                    <ListItemCard
                        key={index}
                        title={item.title}
                        subtitle={item.subtitle}
                        icon={item.icon}
                    />
                ))}
            </CardList>
        </div>
    )
}
