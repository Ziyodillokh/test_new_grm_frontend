import { NavLink } from 'react-router-dom'
import cls from './Breadcrumbs.module.scss'

export default function Breadcrumbs({ items = [] }) {
    return (
        <ul className={cls.breadcrumbs}>
            {items?.length > 0 && items?.map(item => (
                <li key={item.to} className={cls.breadcrumbs__item}>
                    <NavLink
                        end
                        to={item.to}
                        className={({ isActive }) => isActive ? cls.active : ''}
                    >
                        {item.label}
                    </NavLink>
                </li>
            ))}
        </ul>
    )
}