import { useEffect, useRef } from 'react';

export default function (callback: () => void) {
  const $ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (!$ref.current || $ref.current.contains(event.target as HTMLElement)) return;

      callback && callback();
    };

    document.addEventListener('click', handleClickOutside, true);

    return () => {
      document.removeEventListener('click', handleClickOutside, true);
    };
  }, [callback]);

  return $ref;
}
