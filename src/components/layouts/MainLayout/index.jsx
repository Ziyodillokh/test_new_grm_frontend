import { Outlet } from 'react-router-dom'
import Navbar from '@/components/common/Navbar'
import NavLink from "@/components/common/NavLink"
import RightSidebar from '@/components/common/RightSidebar'
import cls from './MainLayout.module.scss'

export default function MainLayout({ links = [] }) {
    return (
        <div className={cls.layout}>
            <Navbar />
            <div className={cls.body}>
                <aside className={cls.sidebar}>
                    <ul className={cls.sidebarNav}>
                        {links.map((link) => (
                            <li key={link.path}>
                                <NavLink
                                    path={link.path}
                                    icon={link.icon}
                                    label={link.label}
                                    end={link.end}
                                />
                            </li>
                        ))}
                    </ul>
                </aside>
                <main className={cls.content}>
                    <div className={cls.contentInner}>
                        <Outlet />
                    </div>
                </main>
                <aside className={cls.rightPanel}>
                    <RightSidebar />
                </aside>
            </div>
        </div>
    )
}
