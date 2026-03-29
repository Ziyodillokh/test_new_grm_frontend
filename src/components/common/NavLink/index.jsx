import { NavLink as RouterNavLink } from "react-router-dom";
import cls from './NavLink.module.scss'
import { cn } from "@/lib/utils"

export default function NavLink({ path = '/', icon = null, label = '', notification = false, end = false }) {
    return (
        <RouterNavLink
            to={path}
            end={end}
            className={({ isActive }) => cn(cls.link, isActive && cls.active, notification && cls.notificationBadge)}
        >
            {icon && <span className={cls.icon}>{icon}</span>}
            <span className={cls.label}>{label}</span>
        </RouterNavLink>
    )
}
