// Fancybox.js
import { useEffect } from 'react';
import { Fancybox as NativeFancybox } from '@fancyapps/ui';
import '@fancyapps/ui/dist/fancybox/fancybox.css';

function Fancybox(props) {
  useEffect(() => {
    NativeFancybox.bind("[data-fancybox]", props.options || {});
    return () => {
      NativeFancybox.destroy();
    };
  }, [props.options]);

  return <>{props.children}</>;
}

export default Fancybox;
