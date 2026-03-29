import cls from './InfoWidget.module.scss';

const InfoWidget = ({ icon, title, subtitle, onClick }) => {
    const isClickable = Boolean(onClick);

    return (
        <div
            className={`${cls.widget} ${isClickable ? cls.clickable : ''}`}
            onClick={onClick}
        >
            <div className={cls.icon}>
                {icon}
            </div>
            <div className={cls.textContainer}>
                <h4 className={cls.title}>{title}</h4>
                <p className={cls.subtitle}>{subtitle}</p>
            </div>
        </div>
    );
};

export default InfoWidget;