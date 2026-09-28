import LandingPage from '@/components/landing/landing-page';
import type {Metadata} from 'next';
export const metadata:Metadata={
  title:'Além da Técnica · Seu trabalho merece ser escolhido',
  description:'Marketing simples e prático para apresentar seus serviços, atrair clientes e cuidar de cada oportunidade. Conheça o Além da Técnica.',
  openGraph:{title:'Além da Técnica · Da aula para a vida real',description:'Sua profissão começa na técnica. Mas não termina nela.',type:'website',locale:'pt_BR'},
};
export default function Page(){return <LandingPage/>;}
