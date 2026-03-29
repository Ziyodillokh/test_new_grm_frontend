
export default function DeviceAnalytics({ color = "#1A1A1A", width = 32, height = 32 }) {
    return (
        <svg width={width} height={height} viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M9.33333 26.6663H22.6667M12 21.333V26.6663M20 21.333V26.6663M10.6667 15.9997L14.6667 11.9997L17.3333 14.6663L21.3333 10.6663M5.33333 5.33301H26.6667C27.403 5.33301 28 5.92996 28 6.66634V19.9997C28 20.7361 27.403 21.333 26.6667 21.333H5.33333C4.59695 21.333 4 20.7361 4 19.9997V6.66634C4 5.92996 4.59695 5.33301 5.33333 5.33301Z" stroke={color} strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
    )
}
