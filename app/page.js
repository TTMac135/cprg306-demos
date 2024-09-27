import Link from 'next/link';
import React from 'react';

export default function Page() {

  let linkStyles = "underline text-cyan-600 hover:text-cyan-950"

  return (
  <main>
    <h1 style={{fontSize: 30, fontWeight: 'bold'}}>Web Dev 2 Demos</h1>

    <ul>
      <li>
        <Link href="week-2" className={linkStyles}>Week 2</Link>
      </li>
      <li>
        <Link href="week-3" className={linkStyles}>Week 3 (Wasn't in class)</Link>
      </li>
      <li>
        <Link href="./week-4/functions" className={linkStyles} >Week 4 - Functions</Link> <Link href="./week-4/simple-counter" className={linkStyles} >Simple Counter</Link> <Link href="./week-4/advanced-counter" className={linkStyles} >Advanced Counter</Link>
      </li>
    </ul>
  </main>
  );
}