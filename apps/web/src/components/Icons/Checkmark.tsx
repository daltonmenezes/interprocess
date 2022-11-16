import { theme } from 'styles'

export function CheckmarkIcon() {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M19.9939 5.43558C20.3056 5.70834 20.3372 6.18216 20.0644 6.49389L9.56443 18.4939C9.42774 18.6501 9.23242 18.7427 9.02496 18.7496C8.8175 18.7565 8.61645 18.6771 8.46967 18.5303L3.96967 14.0303C3.67678 13.7374 3.67678 13.2626 3.96967 12.9697C4.26256 12.6768 4.73744 12.6768 5.03033 12.9697L8.96347 16.9028L18.9356 5.50613C19.2083 5.1944 19.6822 5.16282 19.9939 5.43558Z"
        fill={String(theme.colors['accent-secondary'])}
      />
    </svg>
  )
}
