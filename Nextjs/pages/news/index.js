import Link from "next/link";

function NewsPage() {
  return (
    <>
      <h1>The news page</h1>
      <ul>
        <li>
          <Link href="/news/first-item">First item</Link>
        </li>
        <li>
          <Link href="/news/second-item">Second item</Link>
        </li>
      </ul>
    </>
  );
}

export default NewsPage;
