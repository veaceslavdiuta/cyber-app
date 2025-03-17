import { Link, useLocation } from 'react-router-dom';

const Breadcrumbs = () => {
  const location = useLocation();
  const pathnames = location.pathname.split('/').filter((x) => x);

  return (
    <nav className="container mx-auto hidden max-w-screen-xl py-10 lg:inline-block">
      <ol className="flex gap-4">
        {pathnames.map((value, index) => {
          const pathTo = `/${pathnames.slice(0, index + 1).join('/')}`;
          const isLast = index === pathnames.length - 1;
          const toUpperCaseValue =
            value.charAt(0).toUpperCase() + value.slice(1);

          return (
            <li key={index} className="flex items-center gap-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
              >
                <path d="M9 6L15 12L9 18" stroke="#A4A4A4" />
              </svg>

              {isLast ? (
                <span className="font-sfPro text-base font-medium leading-6 text-black">
                  {toUpperCaseValue}
                </span>
              ) : (
                <Link
                  to={pathTo}
                  className="font-sfPro text-base font-medium leading-6 text-[#A4A4A4] hover:text-black"
                >
                  {toUpperCaseValue}
                </Link>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
};

export default Breadcrumbs;
