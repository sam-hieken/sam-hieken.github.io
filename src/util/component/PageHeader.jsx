import style from './PageHeader.module.css';

export default function PageHeader({ className, children }) {
    className = className ? `${style.pageHeader} ${className}` : style.pageHeader;

    return (
        <h1 className={className}>
            {children}
        </h1>
    )
}