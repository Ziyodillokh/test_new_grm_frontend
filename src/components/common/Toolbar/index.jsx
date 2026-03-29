import Search from '../Icons/Search';
import ArrowsSort from '../Icons/ArrowsSort';
import Filter from '../Icons/Filter';
import Excel from '../Icons/Excel';
import ChevronDown from '../Icons/ChevronDown';
import cls from './Toolbar.module.scss';

export default function Toolbar({ actions, showMonthSelect }) {
    return (
        <div className={cls.toolbar}>
            <div className={cls.left}>
                <button className={cls.btn} title="Qidirish">
                    <Search />
                </button>
                <button className={cls.btn} title="Saralash">
                    <ArrowsSort />
                </button>
                <button className={cls.btn} title="Filter">
                    <Filter />
                </button>
                <button className={cls.btn} title="Excel">
                    <Excel />
                </button>
            </div>
            <div className={cls.right}>
                {showMonthSelect && (
                    <button className={cls.monthSelect}>
                        <span>Oyni tanlang</span>
                        <ChevronDown />
                    </button>
                )}
                {actions && <div className={cls.actions}>{actions}</div>}
            </div>
        </div>
    );
}
