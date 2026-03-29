import Plus from '../Icons/Plus';
import cls from './ActionButton.module.scss';
import { cn } from '@/lib/utils';

export default function ActionButton({ label, variant = 'green', onClick }) {
    return (
        <button className={cn(cls.btn, cls[variant])} onClick={onClick}>
            <Plus />
            <span>{label}</span>
        </button>
    );
}
