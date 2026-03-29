
export default function Plus({ color = "white", width = 16, height = 16 }) {
    return (
        <svg width={width} height={height} viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M7.99992 3.33301V12.6663M3.33325 7.99967H12.6666" stroke={color} strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
        </svg>
    )
}