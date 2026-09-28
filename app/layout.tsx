import type { Metadata } from 'next';
import './globals.css';
export const metadata:Metadata={title:'Além da Técnica · Biblioteca de componentes',description:'Uma linguagem visual para aprender, aplicar e avançar. Catálogo interativo de fundamentos, componentes básicos e componentes de IA.',icons:{icon:'/favicon.svg'}};
export default function RootLayout({children}:{children:React.ReactNode}){return <html lang="pt-BR"><body>{children}</body></html>}
