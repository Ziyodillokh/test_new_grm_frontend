import Plus from '../../common/Icons/Plus';
import cls from './CreateActionCard.module.scss';

const CreateActionCard = ({ image, title, subtitle, actionIcon, onActionClick }) => {
    return (
        <div className={cls.card}>
            <div className={cls.imageWrapper}>{image}</div>
            <div className={cls.content}>
                <h3 className={cls.title}>{title}</h3>
                <p className={cls.subtitle}>{subtitle}</p>
                <button className={cls.actionButton} onClick={onActionClick}>
                    {actionIcon || <Plus />}
                </button>
            </div>
        </div>
    );
};

export default CreateActionCard;