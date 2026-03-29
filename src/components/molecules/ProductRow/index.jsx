import Avatar from '@/components/common/Avatar';
import CheckCircle from '@/components/common/Icons/CheckCircle';
import MoreVertical from '@/components/common/Icons/MoreVertical';
import cls from './ProductRow.module.scss';

const ProductRow = ({
    image,
    collection,
    tags,
    code,
    size,
    price,
    count,
    discount,
    total,
    secondPrice,
    showCheck,
    sellerAvatar,
    buyerAvatar,
}) => {
    return (
        <div className={cls.row}>
            <label className={cls.checkbox}>
                <input type="checkbox" />
                <span className={cls.checkmark} />
            </label>

            <div className={cls.imageCell}>
                <div className={cls.productImage}>
                    <img src={image} alt="" />
                </div>
            </div>

            <div className={cls.infoCell}>
                <span className={cls.collectionName}>{collection}</span>
                {tags && tags.length > 0 && (
                    <div className={cls.tags}>
                        {tags.map((tag, i) => (
                            <span key={i} className={cls.tag}>{tag}</span>
                        ))}
                    </div>
                )}
            </div>

            <div className={cls.cell}>{code}</div>
            <div className={cls.cell}>{size}</div>
            <div className={cls.cell}>{price}</div>
            <div className={cls.cell}>{count}</div>
            <div className={cls.discountCell}>{discount}</div>
            <div className={cls.totalCell}>{total}</div>
            <div className={cls.secondPriceCell}>{secondPrice}</div>

            <div className={cls.avatarsCell}>
                <Avatar src={sellerAvatar} />
                <Avatar src={buyerAvatar} />
            </div>

            <div className={cls.actionsCell}>
                {showCheck && (
                    <button className={cls.checkBtn}>
                        <CheckCircle />
                    </button>
                )}
                <button className={cls.moreBtn}>
                    <MoreVertical />
                </button>
            </div>
        </div>
    );
};

export default ProductRow;
