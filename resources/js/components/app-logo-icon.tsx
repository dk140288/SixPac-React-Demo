import { ImgHTMLAttributes } from 'react';

export default function AppLogoIcon(props: ImgHTMLAttributes<HTMLImageElement>) {
    return <img src="/logo.png" alt="SixPac" className="h-16 w-16" {...props} />;
}
