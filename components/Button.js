import Link from 'next/link';

export default function Button({ color, text, url}) {
  return (
    <Link href={url}>
      <a>{text}</a>
    </Link>
  )
}