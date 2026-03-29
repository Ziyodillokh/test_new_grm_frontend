import cls from './CardList.module.scss'

export default function CardList({ children }) {
    return (
        <div className={cls.list}>
            {children}
        </div>
    )
}
