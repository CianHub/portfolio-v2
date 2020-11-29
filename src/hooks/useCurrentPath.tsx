import { useLocation } from 'react-router-dom';

const useCurrentPathname = (): string => {
  const location = useLocation();
  return location.pathname;
};

export default useCurrentPathname;
