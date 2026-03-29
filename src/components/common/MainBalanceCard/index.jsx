import styles from './MainBalanceCard.module.scss';
import ArrowDown from '../Icons/ArrowDown';
import ArrowUp from '../Icons/ArrowUp';

const MainBalanceCard = ({ balance, balanceSub, income, expense, saldo }) => {
    return (
        <div className={styles.card}>
            <div className={styles.balances}>
                <h2 className={styles.balance}>{balance}</h2>
                {balanceSub && <h3 className={styles.balanceSub}>{balanceSub}</h3>}
            </div>

            <div className={styles.details}>
                <div className={styles.item}>
                    <ArrowDown /> {income}
                </div>
                <div className={styles.item}>
                    <ArrowUp /> {expense}
                </div>
            </div>

            <div className={styles.footer}>
                Saldo balans — {saldo}
            </div>
        </div>
    );
};

export default MainBalanceCard;
