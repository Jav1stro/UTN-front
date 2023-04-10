export const TrashIcon = ({ width, height, onClick }) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      onClick={onClick}
      style={{cursor:'pointer'}}
    >
      <path
        d="m8.734 1.76-.305.615H4.357C3.607 2.375 3 2.989 3 3.75c0 .76.606 1.375 1.357 1.375h16.286c.75 0 1.357-.614 1.357-1.375 0-.76-.607-1.375-1.357-1.375H16.57l-.305-.614A1.35 1.35 0 0 0 15.053 1H9.947a1.35 1.35 0 0 0-1.213.76zM20.643 6.5H4.357l.9 14.566C5.323 22.154 6.214 23 7.286 23h10.425c1.073 0 1.964-.846 2.032-1.934L20.643 6.5z"
        fill="#C62828"
      />
    </svg>
  );
};
