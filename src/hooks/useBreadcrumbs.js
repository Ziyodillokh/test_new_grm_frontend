import { useLocation, matchPath } from 'react-router-dom';
import { MANAGER_ROUTES } from '@/routes/manager';

const useBreadcrumbs = () => {
    const { pathname } = useLocation();

    const getBreadcrumbs = (routes, currentPath) => {
        let matches = [];

        routes.forEach(route => {
            const match = matchPath({ path: route.path, end: route.end ?? false }, currentPath);

            if (match) {
                matches.push({
                    label: typeof route.breadcrumb === 'function' ? route.breadcrumb(match.params) : route.breadcrumb,
                    to: route.path
                });

                if (route.children) {
                    matches = [...matches, ...getBreadcrumbs(route.children, currentPath)];
                }
            }
        });

        return matches;
    };

    return getBreadcrumbs(MANAGER_ROUTES, pathname);
};

export default useBreadcrumbs;