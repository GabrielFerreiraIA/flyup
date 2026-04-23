import { LinkItem } from './types';

export const LINKS_DATA: LinkItem[] = [
  {
    title: 'AGENDAR SALTO DUPLO',
    url: '#', // Prevent default on click
    imageUrl: 'https://i.imgur.com/WeXMFnr.png',
    borderColor: '#3CFF00',
    action: 'BOOKING_MODAL',
    redirectUrl: 'https://wa.me/5515998282280?text=Oi%20eu%20gostaria%20de%20saber%20mais%20informa%C3%A7%C3%B5es%20sobre%20o%20salto%20duplo',
  },
  {
    title: 'CURSO AFF ONLINE',
    url: '/curso-aff-pro',
    imageUrl: 'https://i.imgur.com/cdXbDxL.png',
    borderColor: '#3CFF00',
  },
  {
    title: 'SITE OFICIAL',
    url: 'https://www.flyupparaquedismo.com.br',
    imageUrl: 'https://i.imgur.com/VSP4BXY.png',
    borderColor: '#3CFF00',
  },
  {
    title: 'CURSO DE PARAQUEDISMO',
    url: 'https://cursodeparaquedismo.com.br/',
    imageUrl: 'https://i.imgur.com/03twwC5.png',
    borderColor: '#3CFF00',
  },
];

export const COPYRIGHT_TEXT: string = 'FLYUP PARAQUEDISMO © TODOS OS DIREITOS RESERVADOS';
