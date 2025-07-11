export default function AppLogo() {
    // return (
    //     <>
    //         <div className="flex aspect-square size-8 items-center justify-center rounded-md bg-sidebar-primary text-sidebar-primary-foreground">
    //             <AppLogoIcon className="size-5 fill-current text-white dark:text-black" />
    //         </div>
    //         <div className="ml-1 grid flex-1 text-left text-sm">
    //             <span className="mb-0.5 truncate leading-tight font-semibold">SixPac</span>
    //         </div>
    //     </>
    // );

    return (
        <div className="flex items-center">
            <img src="/sixpaclogo.svg" alt="Logo" className="h-8 w-auto" />
        </div>
    );
}
