import { Link } from 'react-router-dom'

type Props = {
  to: string
  label: string
  className?: string
}

export default function MotionButton({ to, label, className = '' }: Props) {
  return (
    <Link
      to={to}
      className={`group relative inline-block h-14 w-[13rem] rounded-full bg-cream/0 p-1 outline-none ${className}`}
    >
      <span
        aria-hidden="true"
        className="block h-12 w-12 rounded-full bg-forest transition-[width] duration-500 ease-out group-hover:w-[calc(100%-0.5rem)]"
      />
      <span
        aria-hidden="true"
        className="absolute top-1/2 left-4 -translate-y-1/2 text-cream transition-transform duration-500 ease-out group-hover:translate-x-[0.4rem]"
      >
        <svg
          width="20"
          height="20"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <line x1="5" y1="12" x2="19" y2="12" />
          <polyline points="12 5 19 12 12 19" />
        </svg>
      </span>
      <span className="absolute top-1/2 left-1/2 ml-4 -translate-x-1/2 -translate-y-1/2 whitespace-nowrap text-[15px] font-medium tracking-[-0.01em] text-forest transition-colors duration-500 ease-out group-hover:text-cream">
        {label}
      </span>
    </Link>
  )
}
