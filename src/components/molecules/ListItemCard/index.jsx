import ChevronRight from '../../common/Icons/ChevronRight';
import cls from './ListItemCard.module.scss';

const ListItemCard = ({ icon, title, subtitle, onClick, showChevron = true }) => {
    return (
        <div className={cls.card} onClick={onClick} role="button" tabIndex={0}>
            <div className={cls.iconWrapper}>{icon}</div>
            <div className={cls.content}>
                <h3 className={cls.title}>{title}</h3>
                {subtitle && <p className={cls.subtitle}>{subtitle}</p>}
            </div>
            {showChevron && <button className={cls.chevron}><ChevronRight /></button>}
        </div>
    );
};

export default ListItemCard;