import cls from './PageHeaderActions.module.scss'

export default function PageHeaderActions({children}) {
  return (
    <div className={cls.container}>
        {children}
    </div>
  )
}
