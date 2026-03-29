import Monitor from "@/components/common/Icons/Monitor"
import FileText from "@/components/common/Icons/FileText"
import Refresh from "@/components/common/Icons/Refresh"
import ShoppingCart from "@/components/common/Icons/ShoppingCart"
import Tag from "@/components/common/Icons/Tag"
import Books from "@/components/common/Icons/Books"
import Users from "@/components/common/Icons/Users"
import PieChart from "@/components/common/Icons/PieChart"
import { createBrowserRouter } from "react-router-dom"
import MainLayout from "../components/layouts/MainLayout"
import Reports from "../pages/Reports"
import CashReport from "@/pages/CashReport"
import SalesWindow from "@/pages/SalesWindow"

export const MANAGER_ROUTES = [
    {
        path: '/',
        icon: <Monitor />,
        label: "Joriy Kassa",
        breadcrumb: "Yanvar Oy Kassasi",
        element: <CashReport />,
        end: true,
        children: [
            {
                path: '/sales',
                breadcrumb: "Sotuv oynasi",
                element: <SalesWindow />,
            },
        ],
    },
    {
        path: '/reports',
        icon: <FileText />,
        label: "Hisobotlar",
        breadcrumb: "Hisobotlar",
        element: <Reports />,
        end: false
    },
    {
        path: '/transfer',
        icon: <Refresh />,
        label: "Transfer",
        breadcrumb: "Transfer",
        element: <div>Transfer</div>,
        end: false
    },
    {
        path: '/products',
        icon: <ShoppingCart />,
        label: "Mahsulotlar",
        breadcrumb: "Mahsulotlar",
        element: <div>Products</div>,
        end: false
    },
    {
        path: '/prices',
        icon: <Tag />,
        label: "Narx-navo",
        breadcrumb: "Narx-navo",
        element: <div>Prices</div>,
        end: false
    },
    {
        path: '/employees',
        icon: <Users />,
        label: "Ishchilar boshqaruvi",
        breadcrumb: "Ishchilar boshqaruvi",
        element: <div>Employees</div>,
        end: false
    },
    {
        path: '/central-data',
        icon: <Books />,
        label: "Markaziy ma'lumotlar",
        breadcrumb: "Markaziy ma'lumotlar",
        element: <div>Markaziy ma'lumotlar</div>,
        end: false
    },
    {
        path: '/monitoring',
        icon: <PieChart />,
        label: "Monitoring",
        breadcrumb: "Monitoring",
        element: <div>Monitoring</div>,
        end: false
    }
]

function buildRouterChildren(routes) {
    const result = [];
    routes.forEach(route => {
        const { children, ...routeWithoutChildren } = route;
        result.push(routeWithoutChildren);
        if (children) {
            children.forEach(child => {
                result.push(child);
            });
        }
    });
    return result;
}

const routes = createBrowserRouter([
    {
        path: '/',
        element: <MainLayout links={MANAGER_ROUTES} />,
        children: buildRouterChildren(MANAGER_ROUTES),
    }
], { basename: '/oneip' })

export default routes
