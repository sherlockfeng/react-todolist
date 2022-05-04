import './Layout.less';

function Layout({children}: {children: React.ReactNode}) {
    return <div className="layout">{children}</div>;
}

export default Layout;
